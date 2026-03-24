import {CSSProperties, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {createPluginRegistration} from '@embedpdf/core';
import {EmbedPDF} from '@embedpdf/core/react';
import {usePdfiumEngine} from '@embedpdf/engines/react';

import {Viewport, ViewportPluginPackage,} from '@embedpdf/plugin-viewport/react';
import {Scroller, ScrollPluginPackage, ScrollStrategy} from '@embedpdf/plugin-scroll/react';
import {DocumentContent, DocumentManagerPluginPackage,} from '@embedpdf/plugin-document-manager/react';
import {RenderLayer, RenderPluginPackage} from '@embedpdf/plugin-render/react';
import {ZoomGestureWrapper, ZoomMode, ZoomPluginPackage,} from '@embedpdf/plugin-zoom/react';
import {ExportPluginPackage} from '@embedpdf/plugin-export/react';
import {InteractionManagerPluginPackage} from '@embedpdf/plugin-interaction-manager/react';
import Toolbar, {ZOOM_PRESETS} from "@/components/PdfViewer/Toolbar.tsx";
import styles from "./PdfViewer.module.css"

function buildPlugins() {
    return [
        createPluginRegistration(DocumentManagerPluginPackage, {
            initialDocuments: [{url: "/presentatie.pdf"}],
        }),
        createPluginRegistration(ViewportPluginPackage),
        createPluginRegistration(ScrollPluginPackage),
        createPluginRegistration(RenderPluginPackage),
        createPluginRegistration(InteractionManagerPluginPackage),
        createPluginRegistration(ZoomPluginPackage, {
            defaultZoomLevel: ZoomMode.FitPage,
            presets: ZOOM_PRESETS,
        }),
        createPluginRegistration(ExportPluginPackage, {
            defaultFileName: 'document.pdf',
        }),
        createPluginRegistration(ScrollPluginPackage, {
            defaultStrategy: ScrollStrategy.Vertical, // or Horizontal
            defaultPageGap: 10,
        }),
    ];
}

export default function PdfViewer() {
    const {engine, isLoading} = usePdfiumEngine();

    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }, []);

    useEffect(() => {
        const handler = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handler);
        return () => document.removeEventListener('fullscreenchange', handler);
    }, []);

    const plugins = useMemo(() => buildPlugins(), []);

    if (isLoading || !engine) {
        return (
            <div style={{
                ...defaultStyle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#1e1e1e',
                color: '#ccc'
            }}>
                Loading PDF Engine…
            </div>
        );
    }

    return (
        <div ref={containerRef} style={{...defaultStyle}}>
            <EmbedPDF engine={engine} plugins={plugins}>
                {({activeDocumentId}) => (
                    <>
                        {activeDocumentId && (
                            <DocumentContent documentId={activeDocumentId}>
                                {({isLoaded}) =>
                                    isLoaded ? (
                                        <div className={styles.shell}>
                                            <Toolbar
                                                documentId={activeDocumentId}
                                                isFullscreen={isFullscreen}
                                                onToggleFullscreen={toggleFullscreen}
                                            />
                                            <Viewport
                                                documentId={activeDocumentId}
                                                className={styles.viewport}
                                            >
                                                <ZoomGestureWrapper documentId={activeDocumentId}>
                                                    <Scroller
                                                        documentId={activeDocumentId}
                                                        renderPage={({width, height, pageIndex}) => (
                                                            <div
                                                                style={{
                                                                    width,
                                                                    height,
                                                                    position: 'relative',
                                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                                                                    margin: '0 auto',
                                                                    background: '#fff',
                                                                }}
                                                            >
                                                                <RenderLayer
                                                                    documentId={activeDocumentId}
                                                                    pageIndex={pageIndex}
                                                                />
                                                            </div>
                                                        )}
                                                    />
                                                </ZoomGestureWrapper>
                                            </Viewport>
                                        </div>
                                    ) : (
                                        <div style={{color: '#ccc', padding: 24}}>Loading document…</div>
                                    )
                                }
                            </DocumentContent>
                        )}
                    </>
                )}
            </EmbedPDF>
        </div>
    );
}

const defaultStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none"
};


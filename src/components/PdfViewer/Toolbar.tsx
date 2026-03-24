import {useZoom, ZoomMode} from "@embedpdf/plugin-zoom/react";
import {useExport} from "@embedpdf/plugin-export/react";
import styles from "./Toolbar.module.css";
import {useTranslation} from "react-i18next";
import PageNavigation from "@/components/PdfViewer/PageNavigation.tsx";

export const ZOOM_PRESETS: Array<{ name: string; value: ZoomMode | number }> = [
    {name: 'Fit Page', value: ZoomMode.FitPage},
    {name: 'Fit Width', value: ZoomMode.FitWidth},
    {name: '50%', value: 0.5},
    {name: '75%', value: 0.75},
    {name: '100%', value: 1},
    {name: '125%', value: 1.25},
    {name: '150%', value: 1.5},
    {name: '200%', value: 2},
];


interface ToolbarProps {
    documentId: string;
    isFullscreen: boolean;
    onToggleFullscreen: () => void;
}

export default function Toolbar({documentId, isFullscreen, onToggleFullscreen}: ToolbarProps) {
    const {provides: zoom, state: zoomState} = useZoom(documentId);
    const {provides: exportApi} = useExport(documentId);
    const {t} = useTranslation();

    const presets = ZOOM_PRESETS
    const currentZoom = zoomState?.zoomLevel;

    return (
        <div className={styles.toolbar}>
            <div className={styles.leftControls}>
                <button
                    className={styles.iconBtn}
                    onClick={() => zoom?.zoomOut()}
                    title={t('toolbar.zoom.out')}
                    aria-label={t('toolbar.zoom.out')}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                </button>

                <span className={styles.zoomLabel}>
                    {zoomState ? `${Math.round((zoomState.currentZoomLevel ?? 1) * 100)}%` : '—'}
                </span>

                <button
                    className={styles.iconBtn}
                    onClick={() => zoom?.zoomIn()}
                    title={t('toolbar.zoom.in')}
                    aria-label={t('toolbar.zoom.in')}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/>
                        <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                </button>

                <div className={styles.divider}/>

                <select
                    className={styles.select}
                    value={typeof currentZoom === 'string' ? currentZoom : String(currentZoom)}
                    onChange={(e) => {
                        const val = e.target.value;
                        const numVal = parseFloat(val);
                        zoom?.requestZoom(isNaN(numVal) ? (val as ZoomMode) : numVal);
                    }}
                    aria-label="Zoom preset"
                >
                    {presets.map((p) => (
                        <option key={String(p.value)} value={String(p.value)}>
                            {p.name}
                        </option>
                    ))}
                </select>

                <div className={styles.divider}/>

                <button
                    className={styles.iconBtn}
                    onClick={() => exportApi?.download()}
                    title={t('toolbar.viewer.download')}
                    aria-label={t('toolbar.viewer.download')}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                </button>

                <button
                    className={styles.iconBtn}
                    onClick={onToggleFullscreen}
                    title={isFullscreen ? t('toolbar.viewer.exitFullscreen') : t('toolbar.viewer.fullscreen')}
                    aria-label={isFullscreen ? t('toolbar.viewer.exitFullscreen') : t('toolbar.viewer.fullscreen')}
                >
                    {isFullscreen ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="8 3 3 3 3 8"/>
                            <line x1="10" y1="10" x2="3" y2="3"/>
                            <polyline points="16 3 21 3 21 8"/>
                            <line x1="14" y1="10" x2="21" y2="3"/>
                            <polyline points="8 21 3 21 3 16"/>
                            <line x1="10" y1="14" x2="3" y2="21"/>
                            <polyline points="16 21 21 21 21 16"/>
                            <line x1="14" y1="14" x2="21" y2="21"/>
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 3 21 3 21 9"/>
                            <polyline points="9 21 3 21 3 15"/>
                            <line x1="21" y1="3" x2="14" y2="10"/>
                            <line x1="3" y1="21" x2="10" y2="14"/>
                        </svg>
                    )}
                </button>
            </div>

            <div className={styles.centerControls}>
                <PageNavigation documentId={documentId}/>
            </div>

            <div className={styles.rightControls}/>
        </div>
    );
};
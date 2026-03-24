import styles from './Slides.module.css'
import {useTranslation} from "react-i18next";
import PDFViewer from "@/components/PdfViewer/PdfViewer.tsx";

export default function Slides() {
    const {t} = useTranslation();

    return (
        <section className="panel" id="s6" style={{background: 'var(--sand)'}}>
            <div className="panel-inner">
                <div className={styles.layout}>
                    <div>
                        <span className="label reveal">{t("slides.sub-tit")}</span>
                        <div className={`sec-title reveal delay-1`}>{t("slides.title")}</div>
                        <div className={`sec-sub reveal delay-2`}>
                            {t("slides.sub-txt")}
                        </div>
                    </div>

                    <div className={`${styles.playerColumn} reveal delay-2`}>
                        <div className={styles.pdfContainer}>
                            <PDFViewer/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

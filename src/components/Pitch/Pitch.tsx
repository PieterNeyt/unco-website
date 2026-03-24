import styles from './Pitch.module.css'
import {useTranslation} from "react-i18next";

export default function Pitch() {
    const {t} = useTranslation()
    return (
        <section className="panel" id="s3" style={{background: 'var(--sand)'}}>
            <div className="panel-inner">
                <div className={styles.layout}>

                    <div className={styles.text}>
                        <span className="label reveal">{t("pitch.sub-tit")}</span>
                        <div className={`sec-title reveal delay-1`}>{t("pitch.title")}</div>
                        <p className={`${styles.desc} reveal delay-2`}>
                            {t("pitch.text")}
                        </p>
                        <p className={`${styles.meta} reveal delay-3`}>
                            {t("pitch.sub-txt")} KdG Innovation Lab, 2026.
                        </p>
                    </div>

                    <div className={`reveal delay-2`}>
                        <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/y2x6df0O9dg?si=at-GAIhu0Xx35fi2"
                                title="YouTube video player" frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy={"strict-origin-when-cross-origin"} allowFullScreen
                                style={{borderRadius: 16, display: 'block', aspectRatio: '16/9'}}/>
                    </div>

                </div>
            </div>
        </section>
    )
}

import styles from './Slides.module.css'
import {useTranslation} from "react-i18next";

export default function Slides() {
    const {t} = useTranslation();
    return (
        <section className="panel" id="s6" style={{background: 'var(--sand)'}}>
            <div className="panel-inner">
                <div className={styles.layout}>

                    {/* Left — description */}
                    <div>
                        <span className="label reveal">{t("slides.sub-tit")}</span>
                        <div className={`sec-title reveal delay-1`}>{t("slides.title")}</div>
                        <div className={`sec-sub reveal delay-2`}>
                            {t("slides.sub-txt")}
                        </div>
                        <div className={`${styles.techNote} reveal delay-3`}>
                            {t("slides.note")}
                        </div>
                    </div>

                    {/* Right — slide cards grid */}
                    <div className={styles.grid}>
                        {/*{SLIDES.map((slide, i) => (*/}
                        {/*  <a*/}
                        {/*    key={slide.num}*/}
                        {/*    href={slide.url}*/}
                        {/*    className={`${styles.card} reveal delay-${i + 1}`}*/}
                        {/*    target="_blank"*/}
                        {/*    rel="noopener noreferrer"*/}
                        {/*  >*/}
                        {/*    <div className={`${styles.thumb} ${styles[slide.color]}`}>*/}
                        {/*      {slide.emoji}*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.body}>*/}
                        {/*      <div className={styles.num}>{slide.num}</div>*/}
                        {/*      <div className={styles.title}>{slide.title}</div>*/}
                        {/*    </div>*/}
                        {/*  </a>*/}
                        {/*))}*/}
                    </div>

                </div>
            </div>
        </section>
    )
}

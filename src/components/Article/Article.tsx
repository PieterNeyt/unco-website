import styles from "./Article.module.css"
import {useTranslation} from "react-i18next";

const ARTICLE_URL = '#'

export default function Article() {
    const {t} = useTranslation()
    return (
        <section className="panel" id="s4" style={{background: 'var(--sand-l)'}}>
            <div className="panel-inner">
                <div className={styles.layout}>

                    <div className={styles.left}>
                        <span className="label reveal">{t("article.sub-tit")}</span>
                        <div className={`sec-title reveal delay-1`}>
                            {t("article.title")}
                        </div>
                        <div className={`${styles.tags} reveal delay-2`}>
                            <span className="tag">{t("article.tags.success")}</span>
                            <span className="tag">{t("article.tags.gamification")}</span>
                            <span className="tag">{t("article.tags.reward")}</span>
                        </div>
                        <div className={`${styles.meta} reveal delay-2`}>
                            {t("article.march")} 2026 · KdG Innovation Lab
                        </div>
                        <a
                            href={ARTICLE_URL}
                            className={`${styles.readMore} reveal delay-3`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("article.read")}
                        </a>
                    </div>

                    <div className={styles.right}>
                        {/*<blockquote className={`${styles.quote} reveal`}>*/}
                        {/*    "{t("article.quote")}"*/}
                        {/*</blockquote>*/}

                        {/*<div className={styles.body}>*/}
                        {/*    <p className="reveal delay-1">*/}
                        {/*        {t("article.alinea1")}*/}
                        {/*    </p>*/}
                        {/*    <h3 className="reveal delay-2">{t("article.kop1")}</h3>*/}
                        {/*    <p className="reveal delay-2">*/}
                        {/*        {t("article.alinea2")}*/}
                        {/*    </p>*/}
                        {/*    <h3 className="reveal delay-3">{t("article.kop2")}</h3>*/}
                        {/*    <p className="reveal delay-3">*/}
                        {/*        {t("article.alinea3")}*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        </section>
    )
}
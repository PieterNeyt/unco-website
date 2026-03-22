import styles from './Hero.module.css'
import {useTranslation} from "react-i18next";

export default function Hero() {
  const {t} = useTranslation()
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="panel" id="s1" style={{ background: 'var(--sand)' }}>
      <div className="panel-inner">
        <div className={styles.layout}>

          <div className={styles.left}>
            <div className={`${styles.eyebrow} reveal`}>{t("hero.sub-tit")}</div>
            <h1 className={`${styles.h1} reveal delay-1`}>
              {t("hero.title")}<br /><span className={styles.teal}>Quest 100</span>
            </h1>
            <p className={`${styles.desc} reveal delay-2`}>
              {t("hero.sub-txt")}
            </p>
            <div className={`${styles.ctas} reveal delay-3`}>
              <a onClick={() => scrollTo("s3")} className="btn btn-teal">▶ {t("hero.pitch")}</a>
              <a onClick={() => scrollTo("s2")} className="btn btn-outline">{t("hero.feature")}</a>
            </div>
          </div>

          <div className={`${styles.stats} reveal delay-2`}>
            <div className={`${styles.stat} ${styles.statTeal}`}>
              <div className={styles.statVal}>285</div>
              <div className={styles.statKey}>Kudos {t("hero.today")}</div>
              <div className={styles.statSub}>{t("hero.day")} 67 {t("hero.of")} 100</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statVal}>14k+</div>
              <div className={styles.statKey}>{t("hero.student")}</div>
              <div className={styles.statSub}>+ 1.800 {t("hero.staff")}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statVal}>77</div>
              <div className={styles.statKey}>{t("hero.course")}</div>
              <div className={styles.statSub}>{t("hero.program")}</div>
            </div>
            <div className={`${styles.stat} ${styles.statNavy}`}>
              <div className={styles.statVal}>100%</div>
              <div className={styles.statKey}>KdG SSO</div>
              <div className={styles.statSub}>Angular + Go</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

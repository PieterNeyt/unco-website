import { FEATURES } from '@/data.ts'
import styles from './Features.module.css'
import {useTranslation} from "react-i18next";

export default function Features() {
  const {t} = useTranslation()
  return (
    <section className="panel" id="s2" style={{ background: 'var(--sand-l)' }}>
      <div className="panel-inner">

        <div className={`${styles.head} reveal`}>
          <span className="label">{t("features.span")}</span>
          <div className="sec-title">{t("features.title")}</div>
          <div className="sec-sub">
            {t("features.sub")}
          </div>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <div
              key={f.type}
              className={`${styles.card} reveal delay-${Math.min((i % 4) + 1, 4)}`}
            >
              <span className={styles.icon}>{f.icon}</span>
              <div className={styles.title}>{t(`features.features.${f.type}.title`)}</div>
              <p className={styles.desc}>{t(`features.features.${f.type}.desc`)}</p>
              <span className="tag">{t(`features.features.${f.type}.tag`)}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

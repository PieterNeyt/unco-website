import styles from './Pitch.module.css'
import {useTranslation} from "react-i18next";

export default function Pitch() {
  const {t} = useTranslation()
  return (
    <section className="panel" id="s3" style={{ background: 'var(--sand)' }}>
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
            {/*
              <iframe
                width="100%" height="100%"
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameBorder="0" allowFullScreen
                style={{ borderRadius: 16, display: 'block', aspectRatio: '16/9' }}
              />
            */}
            <div
              className={styles.vidBox}
              role="button"
              tabIndex={0}
            >
              <div className={styles.playRing}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <polygon points="6,3 20,12 6,21" />
                </svg>
              </div>
              <div className={styles.vidCaption}>[ Pitch video coming soon ]</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

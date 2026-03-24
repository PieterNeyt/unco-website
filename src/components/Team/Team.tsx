import {TEAM} from '@/data.ts'
import styles from './Team.module.css'
import {useTranslation} from "react-i18next";
import MemberCard from "@/components/Team/MemberCard.tsx";

export default function Team() {
  const {t} = useTranslation()
  return (
    <section className="panel" id="s7" style={{ background: 'var(--sand-l)' }}>
      <div className="panel-inner">
        <div className={styles.layout}>

          <div className={styles.aside}>
            <span className="label reveal">{t("team.sub-tit")}</span>
            <div className={`sec-title reveal delay-1`}>{t("team.title")}</div>
            <p className={`${styles.desc} reveal delay-2`}>
              {t("team.text")}
            </p>
          </div>

          <div className={styles.cards}>
            {TEAM.map((member, i) => (
              <div key={member.name} className={`reveal delay-${i + 1}`}>
                <MemberCard member={member} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

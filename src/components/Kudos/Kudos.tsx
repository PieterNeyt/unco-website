import {KUDOS_ROWS, ARCHETYPES} from '@/data.ts'
import styles from './Kudos.module.css'
import {useTranslation} from "react-i18next";

export default function Kudos() {
    const {t} = useTranslation()
    return (
        <section className="panel" id="s5" style={{background: 'var(--navy)'}}>
            <div className="panel-inner">
                <div className={styles.heading}>
                    <span className={`label label-inv reveal`}>{t("kudos.sub-tit")}</span>
                    <div className={`sec-title sec-title-inv reveal delay-1`}>
                        {t("kudos.title")}
                    </div>
                    <div className={`sec-sub sec-sub-inv reveal delay-2`}>
                        {t("kudos.sub-txt")}
                    </div>
                </div>

                <div className={styles.layout}>
                    <div className={`${styles.tableWrap} reveal delay-2`}>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>⚡ {t("kudos.type")}</th>
                                <th>{t("kudos.desc")}</th>
                                <th>{t("kudos.dir")}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {KUDOS_ROWS.map((row) => (
                                <tr key={row.type}>
                                    <td>{t(`kudos.kudo-rows.${row.type}.action`)}</td>
                                    <td>{t(`kudos.kudo-rows.${row.type}.desc`)}</td>
                                    <td><span className={`tag tag-inv`}>{t(`kudos.kudo-rows.${row.type}.dir`)}</span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.archGrid}>
                        {ARCHETYPES.map((a, i) => (
                            <div key={a.type} className={`${styles.archItem} reveal delay-${Math.min(i +1, 4)}`}>
                                <span className={styles.archIcon}>{a.icon}</span>
                                <div>
                                    <div className={styles.archName}>{t(`kudos.archetypes.${a.type}.name`)}</div>
                                    <div className={styles.archDesc}>{t(`kudos.archetypes.${a.type}.desc`)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

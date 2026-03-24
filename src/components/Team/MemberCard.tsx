import styles from './MemberCard.module.css'
import {Member} from "@/model/member.ts";
import {useTranslation} from "react-i18next";

interface Props {
    member: Member
}

export default function MemberCard({member}: Props) {
    const {t} = useTranslation();
    const {photo, name, major, linkedin} = member

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={photo} alt={name} className={styles.image} />
            </div>

            <div className={styles.content}>
                <div className={styles.name}>{name}</div>
                <div className={styles.major}>{t(`team.${major}`)}</div>

                <a
                    href={linkedin}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🔗 LinkedIn
                </a>
            </div>
        </div>
    )
}

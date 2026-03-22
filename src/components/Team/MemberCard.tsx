import styles from './MemberCard.module.css'
import {Member} from "@/model/member.ts";

interface Props {
    member: Member
}

export default function MemberCard({member}: Props) {
    const {initials, color, name, role, bio, kudos, quests, level, linkedin} = member

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.avatar} style={{background: color}}>
                    {initials}
                </div>
                <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.role}>{role}</div>
                </div>
            </div>

            <p className={styles.bio}>{bio}</p>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <div className={styles.statVal}>{kudos}</div>
                    <div className={styles.statKey}>Kudos</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statVal}>{quests}</div>
                    <div className={styles.statKey}>Quests</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statVal}>Lv {level}</div>
                    <div className={styles.statKey}>Rang</div>
                </div>
            </div>

            <a
                href={linkedin}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                🔗 LinkedIn
            </a>
        </div>
    )
}

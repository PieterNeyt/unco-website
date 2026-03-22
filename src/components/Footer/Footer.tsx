import {NAV_SECTIONS} from '@/data.ts'
import styles from './Footer.module.css'
import {useTranslation} from "react-i18next";

export default function Footer() {
    const {t} = useTranslation()
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})

    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>Quest100</div>

            <nav className={styles.links}>
                {NAV_SECTIONS.map(({id, type}) => (
                    <button key={id} className={styles.link} onClick={() => scrollTo(id)}>
                        {t(`footer.${type}`)}
                    </button>
                ))}
            </nav>

            <div className={styles.sub}>KdG · 2026</div>
        </footer>
    )
}

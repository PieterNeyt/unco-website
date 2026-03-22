import styles from './Navbar.module.css'
import {NAV_SECTIONS} from '@/data.ts'
import {useScrollProgress} from "@/hooks/useScrollProgress.ts";
import {useTranslation} from "react-i18next";
import LanguageSwitch from "@/components/LanguageSwitch/LanguageSwitch.tsx";

export default function Navbar() {
    const {t} = useTranslation()
    const {progressBarRef, activeId} = useScrollProgress()

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
            {/* Progress bar */}
            <div className={styles.progressBar} ref={progressBarRef}/>

            <nav className={styles.nav}>
                <a className={styles.logo} onClick={() => scrollTo("s1")}>Quest100</a>

                <ul className={styles.links}>
                    {NAV_SECTIONS.map(({id, type}) => (
                        <li key={id}>
                            <button
                                className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                                onClick={() => scrollTo(id)}
                            >
                                {t(`nav.${type}`)}
                            </button>
                        </li>
                    ))}
                </ul>

                <LanguageSwitch/>
                <div className={styles.chip}>⚡ 285 KUDOS</div>
            </nav>

            {/* Side dot navigation */}
            <nav className={styles.dots} aria-label="Section navigation">
                {NAV_SECTIONS.map(({id, type}) => (
                    <button
                        key={id}
                        className={`${styles.dot} ${activeId === id ? styles.dotActive : ''}`}
                        onClick={() => scrollTo(id)}
                        title={t(`nav.${type}`)}
                        aria-label={t(`nav.${type}`)}
                    />
                ))}
            </nav>
        </>
    )
}

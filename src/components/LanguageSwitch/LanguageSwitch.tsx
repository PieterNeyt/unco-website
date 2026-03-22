import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitch.module.css'

const LANGS = [
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
]

export default function LanguageSwitch() {
    const { i18n } = useTranslation()
    const current = i18n.resolvedLanguage

    return (
        <div className={styles.wrap}>
            {LANGS.map(({ code, label }) => (
                <button
                    key={code}
                    className={`${styles.btn} ${current === code ? styles.active : ''}`}
                    onClick={() => i18n.changeLanguage(code)}
                    aria-label={`Switch to ${label}`}
                    aria-pressed={current === code}
                >
                    <span className={`${styles.flag} ${styles[`flag${code.toUpperCase()}`]}`} />
                    {label}
                </button>
            ))}
        </div>
    )
}
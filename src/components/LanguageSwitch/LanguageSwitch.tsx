import {useTranslation} from "react-i18next"
import styles from "./LanguageSwitch.module.css"

const LANGS = [
    {code: "nl", flagClass: "fi fi-be"},
    {code: "en", flagClass: "fi fi-gb"},
]

export default function LanguageSwitch() {
    const {i18n} = useTranslation()
    const current = i18n.resolvedLanguage

    return (
        <div className={styles.wrap}>
            {LANGS.map(({code, flagClass}) => (
                <button
                    key={code}
                    className={`${styles.btn} ${current === code ? styles.active : ""}`}
                    onClick={() => i18n.changeLanguage(code)}
                    aria-label={`Switch to ${code}`}
                    aria-pressed={current === code}
                >
                    <span className={`${styles.flag} ${flagClass}`}/>
                    {code.toUpperCase()}
                </button>
            ))}
        </div>
    )
}
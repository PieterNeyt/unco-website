import {ChangeEvent, useEffect, useState} from "react";
import {useScroll} from "@embedpdf/plugin-scroll/react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import styles from "./PageNavigation.module.css"
import {useTranslation} from "react-i18next";

const noSpinnerStyle = `
    input[type=number].no-spinner::-webkit-inner-spin-button,
    input[type=number].no-spinner::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number].no-spinner {
        -moz-appearance: textfield;
    }
`;

export default function PageNavigation({documentId}: { documentId: string }) {
    const {t} = useTranslation();
    const {provides: scroll, state} = useScroll(documentId)
    const [pageInput, setPageInput] = useState(String(state.currentPage))
    useEffect(() => {
        setPageInput(String(state.currentPage))
    }, [state.currentPage])
    const handleGoToPage = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const pageNumber = parseInt(pageInput, 10)
        if (pageNumber >= 1 && pageNumber <= state.totalPages) {
            scroll?.scrollToPage({pageNumber})
        }
    }
    return (
        <>
            <style>{noSpinnerStyle}</style>
            <button
                onClick={() => scroll?.scrollToPreviousPage()}
                disabled={state.currentPage <= 1}
                className={styles.iconBtn}
                title={t("toolbar.nav.prev")}
            >
                <ChevronLeft size={18}/>
            </button>

            <form onSubmit={handleGoToPage} className={styles.form}>
                <span>
                    {t("toolbar.nav.page")}
                </span>
                <input
                    type="number"
                    value={pageInput}
                    onChange={(e) => setPageInput(e.target.value)}
                    min={1}
                    max={state.totalPages}
                    className={`${styles.input} no-spinner`}
                />
                <span>
                    {t("toolbar.nav.of")} {state.totalPages}
                </span>
            </form>

            <button
                onClick={() => scroll?.scrollToNextPage()}
                disabled={state.currentPage >= state.totalPages}
                className={styles.iconBtn}
                title={t("toolbar.nav.next")}
            >
                <ChevronRight size={18}/>
            </button>
        </>
    )
}
import {useEffect, useRef, useState} from 'react'
import {NAV_SECTIONS} from '../data'

export function useScrollProgress() {
    const [activeId, setActiveId] = useState(NAV_SECTIONS[0].id)
// 1. Create a reference to attach to the DOM element
    const progressBarRef = useRef<HTMLDivElement>(null)

    // 2. Direct DOM mutation for fluent scrolling
    useEffect(() => {
        const onScroll = () => {
            // If the ref isn't attached yet, do nothing
            if (!progressBarRef.current) return;

            const scrolled = window.scrollY
            const total = document.body.scrollHeight - window.innerHeight
            const progressPercent = total > 0 ? (scrolled / total) * 100 : 0

            // DIRECT UPDATE: We bypass React state completely.
            // This is instantaneous and won't get delayed by React's render cycle.
            progressBarRef.current.style.width = `${progressPercent}%`
        }

        // Call it once on mount to handle redirects/refreshes
        onScroll()

        // Notice we don't even need requestAnimationFrame here because
        // direct DOM style updates are incredibly cheap.
        window.addEventListener('scroll', onScroll, {passive: true})
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {threshold: 0.5}
        )

        NAV_SECTIONS.forEach(({id}) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return {progressBarRef, activeId}
}

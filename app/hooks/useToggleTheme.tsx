import { useEffect, useState } from 'react'

export default function useToggleTheme() {
    let item: string = 'dark'
    if (typeof window !== 'undefined') {
        item = localStorage.getItem('theme') || 'dark'
    }
    const [theme, setTheme] = useState(item)
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme, colorTheme])

    return [colorTheme, setTheme] as const
}

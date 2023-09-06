import { useEffect, useState } from 'react'

export default function useToggleTheme() {
    let item: string = 'light'
    if (typeof window !== 'undefined') {
        item = localStorage.getItem('theme') || 'light'
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

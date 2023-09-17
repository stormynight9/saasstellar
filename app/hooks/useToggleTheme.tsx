import { useEffect, useState } from 'react'
import { themes } from '~/registry/themes'

const changeTheme = (theme: string) => {
    const root = document.documentElement
    const themeObject: any = themes.find((t) => t.name === theme)
    Object.keys(themeObject?.cssVars.dark).forEach((property) => {
        root.style.setProperty(
            `--${property}`,
            themeObject?.cssVars.dark[property]
        )
    })
}

export default function useToggleTheme() {
    const [theme, setTheme] = useState<'blue' | 'orange'>('orange')

    useEffect(() => {
        changeTheme(theme)
    }, [theme])

    // let item: string = 'dark'
    // if (typeof window !== 'undefined') {
    //     item = localStorage.getItem('theme') || 'dark'
    // }
    // const [theme, setTheme] = useState(item)
    // const colorTheme = theme === 'dark' ? 'light' : 'dark'

    // useEffect(() => {
    //     const root = window.document.documentElement
    //     root.classList.remove(colorTheme)
    //     root.classList.add(theme)
    //     localStorage.setItem('theme', theme)
    // }, [theme, colorTheme])

    return [theme, setTheme] as const
}

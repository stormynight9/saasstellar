import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { type ThemeName, themes } from '~/registry/themes'

export const changeTheme = (theme: string) => {
    const root = document.documentElement
    const themeObject: any = themes.find((t) => t.name === theme)
    if (!themeObject) return
    Object.keys(themeObject?.cssVars.dark).forEach((property) => {
        root.style.setProperty(
            `--${property}`,
            themeObject?.cssVars.dark[property]
        )
    })
}

export const getTheme = (): ThemeName => {
    let theme: ThemeName = 'orange'
    if (typeof window !== 'undefined') {
        theme = localStorage.getItem('theme') as ThemeName
        if (theme !== null) {
            theme = theme.replace(/['"]+/g, '') as ThemeName
            return theme
        }
        return 'orange'
    }
    return theme
}

const themeAtom = atomWithStorage<ThemeName>('theme', 'orange')

export default function useTheme() {
    return useAtom(themeAtom)
}

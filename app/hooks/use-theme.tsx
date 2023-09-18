import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { type ThemeName, themes } from '~/registry/themes'

export const changeTheme = (theme: string) => {
    const root = document.documentElement
    const themeObject: any = themes.find((t) => t.name === theme)
    Object.keys(themeObject?.cssVars.dark).forEach((property) => {
        root.style.setProperty(
            `--${property}`,
            themeObject?.cssVars.dark[property]
        )
    })
}

const themeAtom = atomWithStorage<ThemeName>('theme', 'blue')

export default function useTheme() {
    return useAtom(themeAtom)
}

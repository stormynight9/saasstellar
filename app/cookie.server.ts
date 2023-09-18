import { createCookie } from '@remix-run/node'

export const themeCookie = createCookie('theme', {
    maxAge: 60 * 60 * 24 * 365, // 1 year
})

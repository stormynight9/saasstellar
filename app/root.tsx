import { Partytown } from '@builder.io/partytown/react'
import { type LinksFunction } from '@remix-run/node'
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from '@remix-run/react'
import { Analytics } from '@vercel/analytics/react'
import stylesheet from '~/tailwind.css?url'
import TailwindIndicator from './components/tailwind-indicator'
import { useLayoutEffect } from 'react'
import { changeTheme, getTheme } from './hooks/use-theme'
import { HighlightInit } from '@highlight-run/remix/client'
import { json } from '@remix-run/node'

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
]

export async function loader() {
    return json({
        ENV: {
            HIGHLIGHT_PROJECT_ID: process.env.HIGHLIGHT_PROJECT_ID,
        },
    })
}

export default function App() {
    const { ENV } = useLoaderData<typeof loader>()
    useLayoutEffect(() => {
        changeTheme(getTheme())
    }, [])
    return (
        <html lang='en' className='dark'>
            <HighlightInit
                projectId={ENV.HIGHLIGHT_PROJECT_ID}
                serviceName='my-remix-frontend'
                tracingOrigins
                networkRecording={{ enabled: true, recordHeadersAndBody: true }}
            />
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1'
                />
                <Partytown debug={true} forward={['dataLayer.push']} />
                <script
                    type='text/partytown'
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-6JV9TN499V'
                />
                <script
                    type='text/partytown'
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-6JV9TN499V');`,
                    }}
                />
                <Meta />
                <Links />
            </head>
            <body className='relative overflow-x-hidden bg-background font-dm antialiased'>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <TailwindIndicator />
                {process.env.NODE_ENV === 'production' && <Analytics />}
            </body>
        </html>
    )
}

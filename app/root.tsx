import { Partytown } from '@builder.io/partytown/react'
import {
    json,
    type LinksFunction,
    type LoaderFunctionArgs,
} from '@remix-run/node'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from '@remix-run/react'
import { Analytics } from '@vercel/analytics/react'
import stylesheet from '~/tailwind.css'
import TailwindIndicator from './components/tailwind-indicator'
import { themeCookie } from './cookie.server'

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
]

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const cookieHeader = request.headers.get('Cookie')
    console.log(cookieHeader) // output: theme=gray
    const cookie = await themeCookie.parse(cookieHeader)
    console.log('cookie', cookie) // output {}
    if (cookie) {
        return json({
            theme: cookie.theme,
        })
    }
    return json(
        {
            theme: 'orange',
        },
        {
            headers: {
                'Set-Cookie': await themeCookie.serialize({ theme: 'orange' }),
            },
        }
    )
}

export default function App() {
    const { theme } = useLoaderData<typeof loader>()

    return (
        <html lang='en' className='dark'>
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
                <LiveReload />
                <TailwindIndicator />
                {process.env.NODE_ENV === 'production' && <Analytics />}
            </body>
        </html>
    )
}

import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useEffect } from 'react'
import Banner from '~/components/banner'
import Cms from '~/components/cms'
import Contact from '~/components/contact'
import Features from '~/components/features'
import Footer from '~/components/footer'
import Hero from '~/components/hero'
import Navbar from '~/components/navbar'
import Pricing from '~/components/pricing'
import useTheme, { changeTheme, getTheme } from '~/hooks/use-theme'

export const meta: MetaFunction = () => {
    return [
        { title: 'SaaSStellar' },
        {
            name: 'description',
            content:
                'Streamline operations and boost productivity with our innovative SaaS solutions. Unlock the power of seamless workflows and data-driven decisions. Experience growth with SaaSStellar."',
        },
        {
            name: 'keywords',
            content:
                'SaaS solutions, Streamlined operations, Boost productivity, Data-driven decisions, Workflow optimization, Business growth, Efficiency tools, Cloud-based software, Productivity software, Business innovation, SaaS platform, Seamless workflows, SaaS productivity, Data analytics, Streamline processes, Business efficiency, Growth strategies, SaaS benefits, Cloud solutions, Business software',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'author',
            content: 'Nader Ferjani',
        },
        {
            tagName: 'link',
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        },
        {
            tagName: 'link',
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
        },
        {
            tagName: 'link',
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
        },
        {
            tagName: 'link',
            rel: 'manifest',
            href: '/site.webmanifest',
        },
        {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#5bbad5',
        },
        {
            name: 'msapplication-TileColor',
            content: '#da532c',
        },
        {
            name: 'theme-color',
            content: '#ffffff',
        },
        {
            property: 'og:title',
            content:
                'SaaSStellar - Streamline Operations and Boost Productivity',
        },
        {
            property: 'og:description',
            content:
                'Discover how SaaSStellar can help you streamline operations, make data-driven decisions, and drive business growth. Experience the power of seamless workflows and efficiency tools.',
        },
        {
            property: 'og:image',
            name: 'og:image',
            content: 'https://saasstellar.vercel.app/saasstellar-og-image.png',
        },
        {
            property: 'og:url',
            content: 'https://saasstellar.vercel.app/',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content:
                'SaaSStellar - Streamline Operations and Boost Productivity',
        },
        {
            name: 'twitter:description',
            content:
                'Discover how SaaSStellar can help you streamline operations, make data-driven decisions, and drive business growth. Experience the power of seamless workflows and efficiency tools.',
        },
        {
            name: 'twitter:image',
            content: 'https://saasstellar.vercel.app/saasstellar-og-image.png',
        },
        {
            name: 'twitter:url',
            content: 'https://saasstellar.vercel.app/',
        },
        {
            name: 'twitter:domain',
            content: 'saasstellar.vercel.app',
        },
    ]
}

// export const loader = ({ request }: LoaderFunctionArgs) => {
//     const cookie = request.headers.get('Cookie')
//     console.log(cookie)
//     return cookie
// }

export default function Index() {
    useEffect(() => {
        changeTheme(getTheme())
    }, [])

    return (
        <div className='dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <Navbar />
            <Hero />
            <Cms />
            <Features />
            <Pricing />
            <Banner />
            <Contact />
            <Footer />
        </div>
    )
}

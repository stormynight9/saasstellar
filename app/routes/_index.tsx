import type { V2_MetaFunction } from '@remix-run/node'
import Navbar from '~/components/navbar'

export const meta: V2_MetaFunction = () => {
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
            content: 'https://saasstellar.vercel.app/saasstellar-og-image.jpg',
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
            property: 'twitter:url',
            content: 'https://saasstellar.vercel.app/',
        },
        {
            property: 'twitter:domain',
            content: 'saasstellar.vercel.app',
        },
    ]
}

export default function Index() {
    return (
        <>
            <Navbar />
        </>
    )
}

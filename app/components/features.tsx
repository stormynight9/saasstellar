import {
    BlocksIcon,
    DollarSignIcon,
    MessagesSquareIcon,
    SettingsIcon,
    ShieldCheckIcon,
    ZapIcon,
} from 'lucide-react'
import FeatureCard from './feature-card'

export interface FeatureDataInterface {
    title: string
    description: string
    icon: React.ReactNode
    backgroundColor: string
}

const featuresData: FeatureDataInterface[] = [
    {
        title: 'Highly customizable',
        description:
            'Customize the platform to your needs and make it your own.',
        icon: <SettingsIcon size={28} className='text-blue-500' />,
        backgroundColor: 'from-blue-500/20',
    },
    {
        title: 'Secure and reliable',
        description: 'We take security seriously and ensure your data is safe.',
        icon: <ShieldCheckIcon size={28} className='text-green-500' />,
        backgroundColor: 'from-green-500/20',
    },
    {
        title: 'Easy to use',
        description: 'The platform is easy to use and requires no training.',
        icon: <ZapIcon size={28} className=' text-yellow-500' />,
        backgroundColor: 'from-yellow-500/20',
    },
    {
        title: 'Powerful integrations',
        description:
            'Integrate with your favorite tools and services, and more.',
        icon: <BlocksIcon className='text-red-500' />,
        backgroundColor: 'from-red-500/20',
    },
    {
        title: 'Affordable pricing',
        description:
            'We offer affordable pricing plans for all business sizes.',
        icon: <DollarSignIcon className='text-pink-500' />,
        backgroundColor: 'from-pink-500/20',
    },
    {
        title: '24/7 support',
        description: 'Our support team is available 24/7 to help you out.',
        icon: <MessagesSquareIcon size={28} className='text-purple-500' />,
        backgroundColor: 'from-purple-500/20',
    },
]

const Features = () => {
    return (
        <section className='mx-auto mt-28 max-w-7xl px-5'>
            <div className='mx-auto flex max-w-2xl flex-col gap-6 text-center'>
                <div>
                    <p className='mb-4 text-primary'>Powerful Features</p>
                    <h1 className='scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Advanced{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Solutions{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            for{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Business{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Excellence
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    <span className='hidden lg:block'>
                        Explore a diverse range of cutting-edge tools
                        meticulously crafted to drive your business towards
                        unparalleled success.
                    </span>
                    <span className='block lg:hidden'>
                        Explore a diverse range of cutting-edge tools crafted
                        for business success.
                    </span>
                </p>
            </div>
            <div>
                <ul className='mt-20 grid place-content-center gap-20 md:grid-cols-2 lg:grid-cols-3'>
                    {featuresData.map((feature, i) => (
                        <li key={i}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                backgroundColor={feature.backgroundColor}
                            >
                                {feature.icon}
                            </FeatureCard>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Features

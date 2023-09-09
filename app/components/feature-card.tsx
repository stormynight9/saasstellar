import { cn } from '~/lib/utils'
import { type FeatureCardProps } from '~/types/feature-card'

const FeatureCard = ({
    title,
    description,
    icon,
    backgroundColor,
}: FeatureCardProps) => {
    return (
        <div
            className={cn(
                'flex max-w-sm flex-col gap-5 rounded-md bg-gradient-to-b via-transparent p-5 text-center md:bg-gradient-to-br md:text-left',
                backgroundColor
            )}
        >
            <span
                className={cn(
                    'mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b to-transparent dark:border dark:border-white/10 md:ml-0 md:bg-gradient-to-br',
                    backgroundColor
                )}
            >
                {icon}
            </span>
            <div className='flex flex-col gap-3'>
                <h2 className='scroll-m-20 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-2xl font-semibold tracking-tight text-transparent'>
                    {title}
                </h2>
                <p className='text-muted-foreground'>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard

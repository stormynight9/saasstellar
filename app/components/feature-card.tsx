import React from 'react'
import { cn } from '~/lib/utils'
interface FeatureCardProps {
    title: string
    description: string
    children: React.ReactNode
    backgroundColor: string
}

const FeatureCard = ({
    title,
    description,
    children,
    backgroundColor,
}: FeatureCardProps) => {
    return (
        <div
            className={cn(
                'flex max-w-sm flex-col gap-5 rounded-md bg-gradient-to-br via-transparent to-transparent p-5 text-left',
                backgroundColor
            )}
        >
            <span
                className={cn(
                    'inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br to-transparent dark:border dark:border-white/10',
                    backgroundColor
                )}
            >
                {children}
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

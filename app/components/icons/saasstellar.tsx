import { type SVGProps } from 'react'

interface LeafProps extends SVGProps<SVGSVGElement> {
    linearFrom?: string
    linearTo?: string
}

const Saastellar = ({ linearFrom, linearTo, ...props }: LeafProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 28 56'
        fill='none'
        {...props}
    >
        <path
            fill='url(#saasstellar-a)'
            d='M15.027 8.592c.178.166 15.444 14.589 1.833 25.66C5.443 43.54 9.38 52.505 9.457 52.676c-6.6-10.631-1.383-18.105 4.913-24.76 6.263-6.618.72-19.18.658-19.323Z'
        />
        <path
            fill='url(#saasstellar-b)'
            d='M24.331 19.428c.135.158 9.801 13.433-2.803 21.591C10.955 47.863 13.466 55.848 13.516 56c-4.62-9.648.357-15.706 6.485-20.6 6.92-5.524 4.37-15.845 4.33-15.972Z'
        />
        <path
            fill='url(#saasstellar-c)'
            d='M2.706 0c.233.15 20.336 13.134 7.417 28.342C-.714 41.099 5.567 50.318 5.688 50.493c-9.61-10.533-5.333-19.978.323-28.73C11.636 13.06 2.806.148 2.706 0Z'
        />
        <defs>
            <linearGradient
                id='saasstellar-a'
                x1={13.383}
                x2={15.253}
                y1={8.659}
                y2={52.425}
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='currentColor' className={linearFrom} />
                <stop
                    offset={1}
                    stopColor='currentColor'
                    className={linearTo}
                />
            </linearGradient>
            <linearGradient
                id='saasstellar-b'
                x1={21.192}
                x2={18.763}
                y1={19.221}
                y2={56.342}
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='currentColor' className={linearFrom} />
                <stop
                    offset={1}
                    stopColor='currentColor'
                    className={linearTo}
                />
            </linearGradient>
            <linearGradient
                id='saasstellar-c'
                x1={0.88}
                x2={12.033}
                y1={0.421}
                y2={49.038}
                gradientUnits='userSpaceOnUse'
            >
                <stop stopColor='currentColor' className={linearFrom} />
                <stop
                    offset={1}
                    stopColor='currentColor'
                    className={linearTo}
                />
            </linearGradient>
        </defs>
    </svg>
)
export default Saastellar

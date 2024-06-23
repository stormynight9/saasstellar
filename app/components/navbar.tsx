import { Link } from '@remix-run/react'
import { GithubIcon } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select'
import useTheme, { changeTheme } from '~/hooks/use-theme'
import { cn } from '~/lib/utils'
import { type ThemeName } from '~/registry/themes'
import Saastellar from './icons/saasstellar'

const Navbar = () => {
    const [theme, setTheme] = useTheme()
    return (
        <div className='px-5 py-2'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between'>
                <Link to='/' className='flex items-center gap-2'>
                    {/* <img src={saasstellar} alt='' width={28} height={26} /> */}
                    <Saastellar
                        aria-label='saasstellar logo'
                        linearFrom='text-primary'
                        className='w-7'
                        linearTo={cn(
                            'text-primary',
                            theme === 'zinc' && 'text-zinc-600',
                            theme === 'slate' && 'text-slate-600',
                            theme === 'stone' && 'text-stone-600',
                            theme === 'gray' && 'text-gray-600',
                            theme === 'neutral' && 'text-neutral-600',
                            theme === 'red' && 'text-red-600',
                            theme === 'rose' && 'text-pink-600',
                            theme === 'orange' && 'text-rose-600',
                            theme === 'green' && 'text-emerald-600',
                            theme === 'blue' && 'text-purple-600',
                            theme === 'yellow' && 'text-yellow-600',
                            theme === 'violet' && 'text-violet-600'
                        )}
                    />
                    <span className='hidden text-lg font-semibold md:block'>
                        SaaSStellar
                    </span>
                </Link>
                <div className='flex items-center gap-5'>
                    <a
                        href='https://github.com/stormynight9/saasstellar'
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background/30 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10'
                        aria-label='my github'
                    >
                        <GithubIcon className='h-5 w-5' />
                    </a>
                    <Select
                        onValueChange={(theme: ThemeName) => {
                            changeTheme(theme)
                            setTheme(theme)
                        }}
                        value={theme}
                    >
                        <SelectTrigger
                            className='w-[180px]'
                            aria-label='customize theme'
                        >
                            <SelectValue placeholder='Customize' />
                        </SelectTrigger>
                        <SelectContent className=''>
                            <SelectItem value='zinc'>
                                <span className='pointer-events-none flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-zinc-600 p-1'></span>{' '}
                                    <span>Zinc</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='slate'>
                                {' '}
                                <span className='pointer-events-none flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-slate-600 p-1'></span>{' '}
                                    <span>Slate</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='stone'>
                                {' '}
                                <span className='pointer-events-none flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-stone-600 p-1'></span>{' '}
                                    <span>Stone</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='gray'>
                                {' '}
                                <span className='flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-gray-600 p-1'></span>{' '}
                                    <span>Gray</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='neutral'>
                                {' '}
                                <span className='flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-neutral-600 p-1'></span>{' '}
                                    <span>Neutral</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='red'>
                                {' '}
                                <span className='flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-red-600 p-1'></span>{' '}
                                    <span>Red</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='rose'>
                                {' '}
                                <span className='flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-rose-600 p-1'></span>{' '}
                                    <span>Rose</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='orange'>
                                {' '}
                                <span className='flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-orange-600 p-1'></span>{' '}
                                    <span>Orange</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='green'>
                                {' '}
                                <span className='flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-green-600 p-1'></span>{' '}
                                    <span>Green</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='blue'>
                                {' '}
                                <span className='flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-blue-600 p-1'></span>{' '}
                                    <span>Blue</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='yellow'>
                                {' '}
                                <span className='flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-yellow-600 p-1'></span>{' '}
                                    <span>Yellow</span>
                                </span>
                            </SelectItem>
                            <SelectItem value='violet'>
                                {' '}
                                <span className='flex items-center gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-violet-600 p-1'></span>{' '}
                                    <span>Violet</span>
                                </span>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

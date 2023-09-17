import { Link } from '@remix-run/react'
import { GithubIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select'
import useToggleTheme from '~/hooks/useToggleTheme'
import saasstellar from '../assets/saasstellar.svg'

const Navbar = () => {
    const [theme, setTheme] = useToggleTheme()
    return (
        <div className='border-b px-5 py-2 dark:border-white/10'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={saasstellar} alt='' width={28} height={26} />
                    <span className='text-lg font-semibold'>SaaSStellar</span>
                </Link>
                <div className='flex items-center gap-5'>
                    <ul className='hidden items-center gap-1 md:flex'>
                        <li>
                            <Button
                                variant={'link'}
                                asChild
                                className='text-sm font-medium text-muted-foreground hover:text-muted-foreground/90 hover:underline'
                            >
                                <Link to={'/'}>Pricing</Link>
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant={'link'}
                                asChild
                                className='text-sm font-medium text-muted-foreground hover:text-muted-foreground/90 hover:underline'
                            >
                                <Link to={'/'}>Contact</Link>
                            </Button>
                        </li>
                    </ul>
                    <a
                        href='https://www.github.com/stormynight9'
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background/30 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10'
                        aria-label='my github'
                    >
                        <GithubIcon className='h-5 w-5' />
                    </a>
                    {/* <Button
                        onClick={() => {
                            setTheme(colorTheme)
                        }}
                        variant='outline'
                        size='icon'
                        aria-label='toggle theme'
                    >
                        {colorTheme === 'light' ? (
                            <SunIcon className='h-5 w-5' />
                        ) : (
                            <MoonStarIcon className='h-5 w-5' />
                        )}
                    </Button> */}
                    <Select
                        onValueChange={(theme: 'blue' | 'orange') =>
                            setTheme(theme)
                        }
                    >
                        <SelectTrigger className='w-[180px]'>
                            <SelectValue placeholder='Customize' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value='blue'>blue</SelectItem>
                                <SelectItem value='orange'>Orange</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

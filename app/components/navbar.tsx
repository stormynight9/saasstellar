import { Link } from '@remix-run/react'
import { GithubIcon, MoonStarIcon, SunIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import useToggleTheme from '~/hooks/useToggleTheme'
import saasstellar from '../assets/saasstellar.svg'

const Navbar = () => {
    const [colorTheme, setTheme] = useToggleTheme()
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
                        aria-label='my github'
                    >
                        <Button variant='outline' size='icon'>
                            <GithubIcon className='h-5 w-5' />
                        </Button>
                    </a>
                    <Button
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
                    </Button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

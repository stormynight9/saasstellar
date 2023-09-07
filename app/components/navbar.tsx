import { Link } from '@remix-run/react'
import { MenuIcon, MoonStarIcon, SunIcon } from 'lucide-react'
import useToggleTheme from '~/hooks/useToggleTheme'
import saasstellar from '../assets/saasstellar.svg'
import { Button } from '~/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '~/components/ui/popover'

const Navbar = () => {
    const [colorTheme, setTheme] = useToggleTheme()
    return (
        <div className='border-b px-5 py-3'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={saasstellar} alt='' width={28} height={26} />
                    <span className='text-lg font-semibold'>SaaSStellar</span>
                </Link>
                <div className='flex items-center gap-6'>
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
                        <li>
                            <Button
                                variant={'link'}
                                asChild
                                className='text-sm font-medium text-muted-foreground hover:text-muted-foreground/90 hover:underline'
                            >
                                <Link to={'/'}>Login</Link>
                            </Button>
                        </li>
                    </ul>
                    <Button variant={'black'} className='hidden md:inline-flex'>
                        Get started for free
                    </Button>
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

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                size={'icon'}
                                className='inline-flex md:hidden'
                                aria-label='open menu'
                            >
                                <MenuIcon className='h-5 w-5' />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-80' collisionPadding={18}>
                            <ul className='flex flex-col items-center gap-1'>
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
                                <li>
                                    <Button
                                        variant={'link'}
                                        asChild
                                        className='text-sm font-medium text-muted-foreground hover:text-muted-foreground/90 hover:underline'
                                    >
                                        <Link to={'/'}>Login</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button variant={'black'}>
                                        Get started for free
                                    </Button>
                                </li>
                            </ul>
                        </PopoverContent>
                    </Popover>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

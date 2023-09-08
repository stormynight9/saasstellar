import { MoveRightIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

const Hero = () => {
    return (
        <main className='mx-auto mt-24 flex max-w-2xl flex-col gap-6 px-5 text-center'>
            {/* <p className='bg-300% bg-gradient-to-r from-primary to-rose-600  bg-clip-text font-caveat text-2xl font-bold text-transparent'>
                Unlock Your Potential
            </p> */}
            <h1 className='scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                Discover the Power of SaaS{' '}
                <span className='bg-300% bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl'>
                    Simplicity.
                </span>
            </h1>
            <p className='text-lg text-muted-foreground'>
                Welcome to <span className='text-primary'>SaaSStellar</span>,
                your gateway to streamlined operations, innovation, enhanced
                productivity, and limitless growth opportunities.{' '}
                <span className='hidden lg:block'>
                    Discover a brighter future with us.
                </span>
            </p>
            <div className='mx-auto mt-8 flex w-full max-w-sm flex-col items-end space-y-2'>
                <div className='flex w-full max-w-sm flex-col items-start gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='email'
                    >
                        Want an early invite?
                    </Label>
                    <Input type='email' placeholder='Email' />
                </div>
                <Button className='flex w-full justify-between' type='submit'>
                    Join the waitlist
                    <MoveRightIcon className='mr-2 h-4 w-4' />
                </Button>
                <p className='w-full text-center text-sm text-muted-foreground'>
                    Join a waitlist of 200+ members!
                </p>
            </div>
            <span className='mx-auto h-24 w-[1px]  rounded-full bg-primary bg-gradient-to-b from-background to-transparent'></span>
        </main>
    )
}

export default Hero

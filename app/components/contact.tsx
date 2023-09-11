import { LinkedinIcon, TwitterIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import Discord from './icons/discord'

const Contact = () => {
    return (
        <section className='mx-auto mt-28 flex max-w-7xl flex-col items-center gap-20 px-5 lg:flex-row'>
            <div className='mx-auto flex max-w-2xl flex-grow basis-0 flex-col gap-6'>
                <div>
                    <h1 className='mt-4 scroll-m-20  text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Get{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            In{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Touch
                        </span>
                    </h1>
                </div>
                <p className='text-center text-lg text-muted-foreground lg:text-left'>
                    <span className='hidden lg:block'>
                        If you have any questions, suggestions, or would like to
                        discuss potential collaborations, please don't hesitate
                        to reach out. I'd love to hear from you!
                    </span>
                    <span className='block lg:hidden'>
                        Questions, ideas, or collaborations? Reach out—I'm all
                        ears!
                    </span>
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <div className='flex flex-col gap-4 lg:items-start'>
                        <a
                            href='https://twitter.com/NaderFerjani'
                            className='inline-flex gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <TwitterIcon className='h-6 w-6 text-primary/70' />{' '}
                            @NaderFerjani
                        </a>
                        <a
                            href='https://www.linkedin.com/in/nader-ferjani/'
                            className='flex items-center gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <LinkedinIcon className='h-6 w-6 text-primary/70' />{' '}
                            <span>nader-ferjani</span>
                        </a>
                        <span className='flex items-center gap-2'>
                            <Discord className='h-6 w-6 fill-primary/70' />{' '}
                            <span>stormynight9</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='gradient-border relative flex w-full max-w-xl flex-grow basis-0 flex-col gap-4 rounded-md bg-gradient-to-br from-white/5 to-transparent p-6  before:bg-gradient-to-br before:from-white/5 before:to-transparent '>
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='name'
                    >
                        Full name
                    </Label>
                    <Input
                        required
                        type='text'
                        placeholder='John Doe'
                        name='name'
                        className='w-full'
                    />
                </div>
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='email'
                    >
                        Email
                    </Label>
                    <Input
                        required
                        type='email'
                        placeholder='john.doe@example.com'
                        name='email'
                        className='w-full'
                    />
                </div>
                <div className='grid w-full gap-1.5'>
                    <Label
                        htmlFor='message'
                        className='text-left text-muted-foreground'
                    >
                        Message
                    </Label>
                    <Textarea placeholder='Your message here...' id='message' />
                </div>
                <Button variant={'secondary'}>Send message</Button>
            </div>
        </section>
    )
}

export default Contact

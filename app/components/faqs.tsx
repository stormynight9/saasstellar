import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion'
import ChatMessage from './icons/chat-message'
import DotPattern from './dot-pattern'
import { cn } from '~/lib/utils'
import { buttonVariants } from './ui/button'

const faqs = [
    {
        question:
            'Can I integrate SaaSStellar with my existing business tools?',
        answer: 'Yes, SaaSStellar supports integration with over 10 content management systems and other third-party tools.',
    },
    {
        question:
            'Are there any additional costs beyond the subscription fees?',
        answer: "No, SaaSStellar's pricing plans include all core features and support. Additional costs may apply only if businesses opt for optional training, custom development, or premium support packages.",
    },
    {
        question:
            'Can I switch between pricing plans as my business needs change?',
        answer: "Yes, businesses can upgrade or downgrade between SaaSStellar's pricing plans at any time to better suit evolving operational requirements and budget constraints.",
    },
    {
        question:
            'Does SaaSStellar offer a trial period for testing its features?',
        answer: 'Yes, SaaSStellar offers a trial period for potential users to explore its features and functionalities before committing to a subscription plan.',
    },
]

const FAQs = () => {
    return (
        <section className='relative mx-auto px-5 pb-8 pt-40'>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>FAQs</span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Frequently{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            asked{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            questions
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    Haven’t found what you’re looking for?{' '}
                    <a
                        href='#name'
                        className={cn(
                            buttonVariants({ variant: 'link' }),
                            'px-0 text-lg text-foreground'
                        )}
                    >
                        Contact us.
                    </a>
                </p>
                <div className='mt-20 flex items-center justify-between'>
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            'fill-primary/40 [mask-image:linear-gradient(to_bottom,transparent,white,white,transparent,transparent)]'
                        )}
                    />
                    <Accordion
                        collapsible
                        type='single'
                        className='mx-auto w-full max-w-4xl grow basis-28 text-left'
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className='text-left text-xl hover:no-underline'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-base text-muted-foreground'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQs

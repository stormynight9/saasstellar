const Footer = () => {
    return (
        <footer className='mt-24 flex h-32 flex-col items-center justify-between bg-gradient-to-b from-transparent to-primary/20'>
            <div className='p-5 text-center'>
                Looking for a frontend developer with React/Astro and TailwindCSS skills? Reach
                out to me at{' '}
                <span className='whitespace-nowrap '>
                    <a
                        href='mailto:ferjani.nader@hotmail.fr'
                        className='font-medium text-primary brightness-150 hover:underline'
                    >
                        ferjani.nader@hotmail.fr
                    </a>{' '}
                    🚀
                </span>
            </div>
            <div className='mt-auto h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent'></div>
        </footer>
    )
}

export default Footer

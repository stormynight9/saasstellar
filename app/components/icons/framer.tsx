import { type SVGProps } from 'react'
const Framer = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <path d='M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z' />
    </svg>
)
export default Framer

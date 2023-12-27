import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const twclsx = (...classes: ClassValue[]) => twMerge(clsx(...classes))

export default twclsx

import { FC, PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}

export const Heading: FC<PropsWithChildren<IHeading>> = ({
	children,
	className
}) => {
	return <h1 className={`font-semibold text-3xl  ${className}`}>{children}</h1>
}

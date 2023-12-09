import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

export interface ISeo {
	title: string
	description?: string
	image?: string
}

export const titleMerge = (title: string) => `${title} | Sandjma`

export const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	children,
	description,
	image
}) => {
	const pathname = usePathname()
	const currentUrl = `${process.env.CLIENT_URL}${pathname}`
	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<link rel='canonical' href={currentUrl} />
						<meta property='og:local' content='ru' />
						<meta property='og:title' content={titleMerge(title)} />
						<meta property='og:url' content={currentUrl} />
						<meta
							property='og:image'
							content={image || '/public/favicon.ico'}
						/>
						<meta property='site_name' content={'Sandjma'} />
						<meta property='og:description' content={description} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}

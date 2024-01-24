'use client'

import { ComposeChildren } from '@/shared/utils/reactUtils'
import { ReactQuery } from './react-query/ReactQueryProvider'
import { ThemeProvider } from './themesProvider/themes.provider'

const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ComposeChildren>
			<ThemeProvider />
			<ReactQuery />
			{children}
		</ComposeChildren>
	)
}

export default Provider

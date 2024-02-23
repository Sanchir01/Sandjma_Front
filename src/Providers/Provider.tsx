'use client'

import { ReactQuery } from '@/Providers/react-query/ReactQueryProvider'
import { ThemeProvider } from '@/Providers/themesProvider/themes.provider'
import { ComposeChildren } from '@/shared/utils/reactUtils'

const Provider = ({ children }: { children: React.ReactNode }) => (
	<ComposeChildren>
		<ThemeProvider />
		<ReactQuery />
		{children}
	</ComposeChildren>
)

export default Provider

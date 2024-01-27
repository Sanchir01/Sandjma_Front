'use client'

import AppSessionProvider from '@/entities/session/next-auth.Provider'
import { ComposeChildren } from '@/shared/utils/reactUtils'
import { ReactQuery } from './react-query/ReactQueryProvider'
import { ThemeProvider } from './themesProvider/themes.provider'

const Provider = ({ children }: { children: React.ReactNode }) => (
	<ComposeChildren>
		<ThemeProvider />
		<AppSessionProvider />
		<ReactQuery />
		{children}
	</ComposeChildren>
)

export default Provider

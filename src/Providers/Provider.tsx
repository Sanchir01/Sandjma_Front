'use client'

import AppSessionProvider from '@/Providers/AppAuthProvider/next-auth.Provider'
import { ReactQuery } from '@/Providers/react-query/ReactQueryProvider'
import { ThemeProvider } from '@/Providers/themesProvider/themes.provider'
import { ComposeChildren } from '@/shared/utils/reactUtils'

const Provider = ({ children }: { children: React.ReactNode }) => (
	<ComposeChildren>
		<ThemeProvider />
		<AppSessionProvider />
		<ReactQuery />
		{children}
	</ComposeChildren>
)

export default Provider

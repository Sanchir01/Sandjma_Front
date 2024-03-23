'use client'

import { ReactQuery } from '@/Providers/react-query/ReactQueryProvider'
import { ThemeProvider } from '@/Providers/themesProvider/themes.provider'
import { ApolloWrapper } from '@/shared/api/apollo-client'
import { ComposeChildren } from '@/shared/utils/reactUtils'

const Provider = ({ children }: { children: React.ReactNode }) => (
	<ComposeChildren>
		<ApolloWrapper />
		<ThemeProvider />
		<ReactQuery />
		{children}
	</ComposeChildren>
)

export default Provider

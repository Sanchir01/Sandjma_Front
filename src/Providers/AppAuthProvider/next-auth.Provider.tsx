'use client'
import { SessionProvider as NextAuthSession } from 'next-auth/react'
import { ReactNode } from 'react'

const AppSessionProvider = ({ children }: { children?: ReactNode }) => (
	<NextAuthSession>{children}</NextAuthSession>
)

export default AppSessionProvider

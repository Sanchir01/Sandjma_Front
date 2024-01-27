import { compact } from 'lodash-es'
import type { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const nextAuthConfig: AuthOptions = {
	providers: compact([
		Credentials({
			credentials: {
				email: { label: 'email', type: 'email', required: true },
				phone: { label: 'phone', type: 'phone', required: true }
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.phone) return null

				return null
			}
		})
	]),
	pages: {
		signIn: '/auth/login',
		newUser: '/auth/register'
	}
}

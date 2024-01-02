import { LoginDocument, RegisterDocument } from 'gql/gql/graphql'
import { myRequest } from './user.service'

export const authService = {
	async login({ password, phone }: { password: string; phone: string }) {
		return myRequest.request(LoginDocument, { loginInput: { password, phone } })
	},
	async register({
		email,
		password,
		phone
	}: {
		email: string
		password: string
		phone: string
	}) {
		return myRequest.request(RegisterDocument, {
			authInput: { email, password, phone }
		})
	}
}

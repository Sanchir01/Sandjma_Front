import { EnumTokens } from '@/shared/utils/Tokens.service'
import { GetNewTokenMutation, GetUserProfileQuery } from 'gql/gql/graphql'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const { cookies, url } = request
	const response = new NextResponse()

	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const loginPage = url.includes('/auth/login')
	const registerPage = url.includes('/auth/register')
	const adminPanel = url.includes('/admin')
	const orderPage = url.includes('/order')

	if (loginPage || registerPage) {
		if (accessToken && refreshToken) {
			return NextResponse.redirect(new URL('/catalog', url))
		}
	}
	if (loginPage || registerPage) return NextResponse.next()
	console.log(accessToken, 'acccessToken', refreshToken, 'refresh')

	if (accessToken === undefined) {
		return NextResponse.redirect(new URL('/auth/login', url))
	}

	if (refreshToken === undefined) {
		const GetNewToken = `mutation Mutation {
	newToken {
		refreshToken
		user {
			email
			id
			isAdmin
		}
	}
}
			`

		const { newToken } = (
			await fetch(process.env.SERVER_GRAPHQL as string, {
				credentials: 'include',
				body: JSON.stringify({
					query: GetNewToken
				}),
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Cookie: `${EnumTokens.ACCESS_TOKEN}=${accessToken}`
				}
			}).then(res => res.json())
		).data as GetNewTokenMutation

		console.log(newToken, 'token')

		if (newToken.refreshToken === undefined) {
			return NextResponse.redirect(new URL('/auth/login', url))
		}
		const myDate = new Date()
		myDate.setHours(myDate.getHours() + 4)
		response.cookies.set({
			name: EnumTokens.REFRESH_TOKEN,
			value: newToken.refreshToken,
			expires: myDate,
			secure: true,
			sameSite: 'none'
		})
		return NextResponse.rewrite(url, response)
	}

	const query = `query GetProfile {
					getProfile {
						id
						isAdmin
					}
					}`
	const getUser = (
		await fetch(process.env.SERVER_GRAPHQL as string, {
			credentials: 'include',
			body: JSON.stringify({ query }),
			headers: {
				'Content-Type': 'application/json',
				Cookie: `refreshToken=${refreshToken}`
			},

			method: 'POST'
		}).then(res => res.json())
	).data as GetUserProfileQuery

	if (orderPage && getUser === undefined)
		return NextResponse.redirect(new URL('/auth/login', url))

	if (getUser?.getProfile?.isAdmin === true) return

	if (adminPanel) {
		return NextResponse.redirect(new URL('/404', url))
	}
	if (adminPanel) {
		refreshToken === undefined &&
			NextResponse.redirect(new URL('/catalog', url))
		return
	}

	return response
}
export const config = {
	matcher: ['/order', '/auth/:path*', '/admin/:path*']
}

import { EnumTokens } from '@/shared/utils/Tokens.service'
import { GetNewTokensMutation, GetUserProfileQuery } from 'gql/gql/graphql'
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

	if (accessToken === undefined) {
		console.log(response.cookies.get(EnumTokens.REFRESH_TOKEN))

		console.log(response.cookies.get(EnumTokens.REFRESH_TOKEN))
		return (
			NextResponse.rewrite(url, response),
			NextResponse.redirect(new URL('/auth/login', url))
		)
	}

	if (refreshToken === undefined) {
		const GetNewToken = `mutation GetNewTokens {
		newToken {
			user {
				email
				id
				isAdmin
			}
			refreshToken
			}
		}`

		const { newToken } = (
			await fetch(process.env.SERVER_GRAPHQL as string, {
				credentials: 'include',
				body: JSON.stringify({
					query: GetNewToken
				}),
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Cookie: `accessToken=${accessToken}`
				}
			}).then(res => res.json())
		).data as GetNewTokensMutation
		console.log(newToken, 'token')

		if (newToken.refreshToken === undefined) {
			return NextResponse.redirect(new URL('/auth/login', url))
		}
		const myDate = new Date()

		response.cookies.set('refreshToken', newToken.refreshToken, {
			path: '/',
			expires: myDate.setHours(myDate.getHours() + 12),
			secure: true,
			httpOnly: false,
			domain:
				process.env.NODE_ENV === 'production'
					? process.env.CLIENT_DOMAIN
					: 'localhost'
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

	console.log(getUser)
	if (orderPage && getUser === undefined)
		return NextResponse.redirect(new URL('/auth/login', url))
	if (getUser?.getProfile?.isAdmin === true) return NextResponse.next()

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

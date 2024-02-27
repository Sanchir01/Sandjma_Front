/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
'use client'
import { useUser } from '@/Providers/store/useUser'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
	const user = useStoreZustand(useUser, state => state.user)
	useEffect(() => {
		user?.isAdmin === false && redirect('/catalog')
	}, [user])
	return <>{children}</>
}

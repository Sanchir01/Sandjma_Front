'use client'
import { useUser } from '@/Providers/store/useUser'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'

export default function Layout({ children }: { children: React.ReactNode }) {
	const user = useStoreZustand(useUser, state => state.user)
	// const { replace } = useRouter()
	// useEffect(() => {
	// 	user === null && replace('/catalog')
	// 	user?.isAdmin === false && replace('/catalog')
	// }, [replace, user])
	return <>{children}</>
}

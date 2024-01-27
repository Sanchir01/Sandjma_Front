import { useMutation } from '@tanstack/react-query'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const useSignOut = () => {
	const router = useRouter()

	const mutation = useMutation({
		mutationKey: ['sign-out'],
		mutationFn: () => signOut({ callbackUrl: '/catalog' }),
		onSuccess: async () => {
			router.push('/catalog')
		}
	})
	return {
		signOut: mutation.mutateAsync,
		isLoading: mutation.isPending
	}
}

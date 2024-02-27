'use client'
import { useUser } from '@/Providers/store/useUser'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { Button } from '@/shared/ui'

import { ShieldCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
const HeaderAdmin: FC = () => {
	const user = useStoreZustand(useUser, state => state.user)
	const { push } = useRouter()

	return user?.isAdmin === true ? (
		<Button variant={'ghost'} onClick={() => push('/admin')}>
			<ShieldCheck />
		</Button>
	) : (
		<></>
	)
}

export default HeaderAdmin

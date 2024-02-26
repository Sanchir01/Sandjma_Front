'use client'
import { useUser } from '@/Providers/store/useUser'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { Button } from '@/shared/ui'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'
import { UsersRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

export const HeaderProfile: FC = () => {
	const isExistUser = false
	const { push } = useRouter()
	const useProfile = useStoreZustand(useUser, state => state.user)
	const logout = useUser(state => state.logout)
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<UsersRound className='cursor-pointer' />
			</DropdownMenuTrigger>
			{useProfile ? (
				<DropdownMenuContent className='mt-3'>
					<DropdownMenuLabel>Ваш профиль</DropdownMenuLabel>
					<DropdownMenuGroup>
						<DropdownMenuItem>{useProfile.email}</DropdownMenuItem>
						<DropdownMenuItem>
							<Button onClick={() => (logout(), push('/catalog'))}>
								Выйти из аккаунта
							</Button>
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			) : (
				<DropdownMenuContent className='w-full'>
					<Button onClick={() => push('/auth/login')}>Войти</Button>
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	)
}

'use client'
import { Button } from '@/shared/ui'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { UsersRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

export const HeaderProfile: FC = () => {
	const isExistUser = false
	const { push } = useRouter()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<UsersRound className='cursor-pointer' />
			</DropdownMenuTrigger>
			{isExistUser ? (
				<DropdownMenuContent className='mt-3'>
					<DropdownMenuLabel>MyName</DropdownMenuLabel>
				</DropdownMenuContent>
			) : (
				<DropdownMenuContent className='w-full'>
					<Button onClick={() => push('/auth/login')}>Войти</Button>
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	)
}

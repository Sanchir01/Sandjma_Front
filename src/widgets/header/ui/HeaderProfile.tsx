import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { UsersRound } from 'lucide-react'
import type { FC } from 'react'

export const HeaderProfile: FC = () => (
	<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<UsersRound className='cursor-pointer' />
		</DropdownMenuTrigger>
		<DropdownMenuContent className='mt-3'>
			<DropdownMenuLabel>MyName</DropdownMenuLabel>
		</DropdownMenuContent>
	</DropdownMenu>
)

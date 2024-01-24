import { UsersRound } from 'lucide-react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import type { FC } from 'react'

export const HeaderProfile: FC = () => (
	<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<UsersRound className='cursor-pointer' />
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuLabel>MyName</DropdownMenuLabel>
		</DropdownMenuContent>
	</DropdownMenu>
)

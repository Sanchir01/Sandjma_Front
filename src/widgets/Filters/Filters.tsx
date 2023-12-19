import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/shared/ui'
import { SlidersHorizontal } from 'lucide-react'
import { FC } from 'react'

const Filters: FC = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<SlidersHorizontal className='hover:cursor-pointer' /> Open
			</SheetTrigger>
			<SheetContent side={'left'}>
				<SheetHeader>
					<SheetTitle>Are you sure absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}

export default Filters

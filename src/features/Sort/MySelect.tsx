import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui'
import cn from 'clsx'
import { FC, ReactNode } from 'react'

export interface IPropsSelectContent {
	id: number
	value: string
	name: string
	color?: string
}

export interface IPropsSelect {
	children?: ReactNode
	placeholder: string
	content: IPropsSelectContent[]
	onChange: (value: string) => void
	defaultValue?: string
}

export const MySelect: FC<IPropsSelect> = ({
	content,
	onChange,
	children,
	placeholder,
	defaultValue
}) => {
	return (
		<div className='max-[850px]:min-w-[200px] min-w-[300px] flex gap-2 items-center justify-between'>
			{children}
			<div className='min-w-[200px]'>
				<Select onValueChange={value => onChange(value)}>
					<SelectTrigger className='rounded'>
						<SelectValue placeholder={placeholder} />
					</SelectTrigger>
					<SelectContent className='bg-white rounded-lg '>
						{content ? (
							content.map(item => (
								<SelectGroup
									defaultChecked
									defaultValue={defaultValue}
									key={item.id}
								>
									<SelectItem className='cursor-pointer' value={item.value}>
										<div className='flex gap-2 items-center'>
											<div>{item.name} </div>
											{item.color ? (
												<span
													className={cn(
														`w-3 h-3 rounded-full border-2 border-collapse`
													)}
													style={{ background: `${item.color}` }}
												/>
											) : (
												<></>
											)}
										</div>
									</SelectItem>
								</SelectGroup>
							))
						) : (
							<div className=''>loading</div>
						)}
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}

import cn from 'clsx'
import { InputHTMLAttributes, forwardRef, memo } from 'react'
export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: string
	type?: string
	className?: string
	title: string
}

export const Field = memo(
	forwardRef<HTMLInputElement, IInput>(
		({ placeholder, error, type = 'text', className, title, ...rest }, ref) => {
			return (
				<div className={cn(className, '')}>
					<label className='flex flex-col gap-3 relative py-5'>
						<span>{title}</span>
						<input placeholder={placeholder} type={type} ref={ref} {...rest} />
						{error && (
							<div className={'text-red-400 absolute bottom-0'}>{error}</div>
						)}
					</label>
				</div>
			)
		}
	)
)

Field.displayName = 'Field'

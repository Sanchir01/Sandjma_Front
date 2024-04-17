/* eslint-disable max-len */
import { Input } from '@/shared/ui/input/input'
import { cn } from '@/shared/utils/utils'
import { Eye, EyeOffIcon } from 'lucide-react'
import React from 'react'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		const [showPassword, setShowPassword] = React.useState(false)
		return (
			<Input
				suffix={
					showPassword ? (
						<Eye
							className='cursor-pointer absolute right-3 top-2'
							onClick={() => setShowPassword(false)}
							size={20}
						/>
					) : (
						<EyeOffIcon
							className='cursor-pointer absolute right-3 top-2'
							onClick={() => setShowPassword(true)}
							size={20}
						/>
					)
				}
				type={showPassword ? 'text' : 'password'}
				className={cn(
					'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }

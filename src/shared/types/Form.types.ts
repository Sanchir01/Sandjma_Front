import { ReactNode } from 'react'
import {
	FieldErrors,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister
} from 'react-hook-form'
export interface IPhonePassword {
	phone: string
	password: string
}
export interface IFormProps {
	children: ReactNode
	handleSubmit: UseFormHandleSubmit<IPhonePassword, undefined>
	formRegister: UseFormRegister<IPhonePassword>
	onSubmit: SubmitHandler<IPhonePassword>
	errors: FieldErrors<IPhonePassword>

	className?: string
}

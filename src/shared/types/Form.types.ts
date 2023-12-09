import { AuthEnum } from '@/features'
import { IPhonePassword } from '@/widgets/Form'
import { ReactNode } from 'react'
import {
	FieldErrors,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister
} from 'react-hook-form'
export interface IFormProps {
	children: ReactNode
	handleSubmit: UseFormHandleSubmit<IPhonePassword, undefined>
	formRegister: UseFormRegister<IPhonePassword>
	onSubmit: SubmitHandler<IPhonePassword>
	errors: FieldErrors<IPhonePassword>
	type: AuthEnum
}

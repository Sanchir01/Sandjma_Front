import { FromEntity } from '@/entities'
import { AuthButton, AuthEnum } from '@/features'
import { useMutation } from '@apollo/client'
import { LoginDocument } from 'gql/gql/graphql'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
export interface IPhonePassword {
	password: string
	phone: string
	email?: string
}
export const Form: FC = () => {
	const [mutate, { data }] = useMutation(LoginDocument)
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IPhonePassword>({
		mode: 'onChange',
		defaultValues: { phone: '' }
	})
	const onSubmit: SubmitHandler<IPhonePassword> = async data => {
		console.log(data)
		await mutate({
			variables: { loginInput: { phone: data.phone, password: data.password } }
		})
		console.log(data)
	}
	const [type, setType] = useState<AuthEnum>(AuthEnum.login)
	return (
		<FromEntity
			formRegister={formRegister}
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			errors={errors}
			type={type}
		>
			<AuthButton
				onClick={() =>
					setType(type === AuthEnum.auth ? AuthEnum.login : AuthEnum.auth)
				}
				text={'Войти'}
				type={type}
			/>
		</FromEntity>
	)
}

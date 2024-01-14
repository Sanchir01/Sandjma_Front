import { useUser } from '@/app/store/useUser'
import { FromEntity } from '@/entities'
import { AuthButton, AuthEnum } from '@/features'
import { authService } from '@/shared/service/auth.service'
import { AuthServiceTokens } from '@/shared/utils'
import { useMutation } from '@tanstack/react-query'

import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
export interface IPhonePassword {
	password: string
	phone: string
	email?: string
}

export const Form: FC = () => {
	const { mutateAsync: login } = useMutation({
		mutationFn: ({ password, phone }: { password: string; phone: string }) =>
			authService.login({ password, phone }),
		mutationKey: ['login']
	})

	const { mutateAsync: register } = useMutation({
		mutationFn: ({
			password,
			phone,
			email
		}: {
			password: string
			phone: string
			email: string
		}) => authService.register({ password, phone, email }),
		mutationKey: ['register']
	})

	const setUser = useUser(state => state.setUser)
	const { replace } = useRouter()
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
		if (data.email) {
			await register({
				email: data.email,
				password: data.password,
				phone: data.password
			}).then(res => {
				if (res.register) {
				}
			})
		} else {
			await login({ password: data.password, phone: data.phone })
				.then(res => {
					if (res?.login) {
						setUser(res.login.user)
						AuthServiceTokens.saveTokenToStorage(res.login.refreshToken)
						replace('/catalog')
					}
				})
				.catch(er => toast.error(er.message))
		}

		console.log(data)
		reset()
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

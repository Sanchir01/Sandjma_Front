import { useUser } from '@/app/store/useUser'
import { FromEntity } from '@/entities'
import { AuthButton, AuthEnum } from '@/features'
import { AuthService } from '@/shared/utils'
import { useMutation } from '@apollo/client'
import { LoginDocument, RegisterDocument } from 'gql/gql/graphql'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
export interface IPhonePassword {
	password: string
	phone: string
	email?: string
}

export const Form: FC = () => {
	const [login] = useMutation(LoginDocument)
	const [register] = useMutation(RegisterDocument)
	const setUser = useUser(state => state.setUser)
	const router = useRouter()
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
			register({
				variables: {
					authInput: {
						email: data.email,
						password: data.password,
						phone: data.phone
					}
				}
			}).catch(er => toast.error(er.message))
		} else {
			await login({
				variables: {
					loginInput: { phone: data.phone, password: data.password }
				}
			})
				.then(({ data }) => {
					if (data?.login) {
						setUser(data.login.user)
						AuthService.saveTokenToStorage(data.login.refreshToken)
						router.push('/catalog')
					}
				})
				.catch(er => toast.error(er.message))
		}

		console.log(data)
		// reset()
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

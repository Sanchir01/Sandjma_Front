import { Button } from '@/shared/ui'
import { FC } from 'react'

export enum AuthEnum {
	auth = 'auth',
	login = 'login'
}
export interface IAuthButton {
	text: string
	onClick: () => void
	type: AuthEnum
}

export const AuthButton: FC<IAuthButton> = ({ text, onClick, type }) => {
	return (
		<div className='flex flex-col gap-3'>
			<Button type='button' onClick={onClick}>
				Перейти на {type === 'login' ? 'Регистрацию' : 'Авторизацию'}
			</Button>
			<Button type={'submit'}>{text}</Button>
		</div>
	)
}

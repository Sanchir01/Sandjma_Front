import { AuthEnum } from '@/features'
import { IFormProps } from '@/shared/types/Form.types'
import { Heading } from '@/shared/ui'
import { Field } from '@/shared/ui/input'
import cn from 'clsx'
import { FC } from 'react'
import InputMask from 'react-input-mask'
import { validEmail } from '../ui/valid-email'
import { validPhone } from '../ui/valid-phone'

export const FromEntity: FC<IFormProps> = ({
	children,
	handleSubmit,
	formRegister,
	onSubmit,
	errors,
	type,
	className
}) => {
	return (
		<section className=' flex h-[80dvh]'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cn('rounded-lg bg-bg-color shadow-lg p-8 m-auto', className)}
			>
				<Heading className=' text-center mb-4'>
					{type === AuthEnum.login
						? 'Вход в личный кабинет'
						: 'Регистрация пользователя'}
				</Heading>

				<div className='flex flex-col gap-3'>
					<h4>Телефон</h4>
					<InputMask
						className=' w-full'
						mask={'+7 (999) 999 99 99'}
						{...formRegister('phone', {
							required: 'Некооректный номер телефона',
							pattern: {
								value: validPhone,
								message: 'введите кооректный номер телефона'
							}
						})}
						type='phone'
						placeholder='Номер телефона'
					/>
				</div>

				<Field
					placeholder={'sdad'}
					title={'Password'}
					{...formRegister('password', {
						required: 'Неправильный пароль',
						minLength: {
							value: 6,
							message: 'Min 6 символов'
						}
					})}
					type='text'
					error={errors.password?.message}
				/>
				{type === AuthEnum.auth ? (
					<Field
						placeholder={'Введите емаил'}
						title={'Email'}
						{...formRegister('email', {
							required: 'Неправильный пароль',
							pattern: {
								value: validEmail,
								message: 'Min 6 символов'
							}
						})}
						type='email'
						error={errors.email?.message}
					/>
				) : (
					<></>
				)}
				{children}
			</form>
		</section>
	)
}

'use client'
import { useUser } from '@/Providers/store/useUser'
import { authService } from '@/shared/service/auth.service'
import { IInputRegister, registerSchema } from '@/shared/types/Auth.types'
import { Button } from '@/shared/ui'
import { Card, CardContent, CardHeader } from '@/shared/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import InputMask from 'react-input-mask'
export default function RegisterPage() {
	const { mutateAsync } = useMutation({
		mutationKey: ['registration'],
		mutationFn: ({
			email,
			password,
			phone
		}: {
			email: string
			password: string
			phone: string
		}) =>
			authService.register({
				email,
				password,
				phone
			})
	})
	const form = useForm<IInputRegister>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			phone: '+7 (***) ***-**-**'
		}
	})
	const { push } = useRouter()
	const userStore = useUser(state => state.setUser)
	const onSubmit = async (data: IInputRegister) => {
		console.log(data)

		try {
			const { register } = await mutateAsync({
				email: data.email,
				password: data.password,
				phone: data.phone
			})
				userStore(register.user),
				push('/catalog'),
				toast.success('Удачная авторизация')
		} catch (e: any) {
			toast.error(e.response.errors[0].message)
		}
	}
	return (
		<Card className='p-8'>
			<CardHeader className='text-xl'>Регистация</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex max-w-md w-full flex-col gap-4'
					>
						<FormField
							name='phone'
							control={form.control}
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2'>
									<FormLabel>Номер телефона</FormLabel>
									<FormControl>
										<InputMask
											className='border border-black rounded-lg p-1'
											placeholder='Введите номер телефона'
											mask='+7 (999) 999-99-99'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name='email'
							control={form.control}
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2'>
									<FormLabel>Введите email</FormLabel>
									<FormControl>
										<InputMask
											mask={''}
											placeholder='Электронная почта'
											type='email'
											className='border border-black rounded-lg p-1'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							name='password'
							control={form.control}
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2'>
									<FormLabel>Введите никнейм</FormLabel>
									<FormControl>
										<InputMask
											mask={''}
											placeholder='Введите пароль'
											type='text'
											className='border border-black rounded-lg p-1'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Link
							href={'/auth/login'}
							className='hover:underline max-[776px]:pointer-events-none'
						>
							Войти в аккаунт
						</Link>
						<Button type='submit' className='w-full '>
							Регистация
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

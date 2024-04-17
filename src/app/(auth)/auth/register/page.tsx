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
import { Input } from '@/shared/ui/input/input'
import Loader from '@/shared/ui/loader'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import InputMask from 'react-input-mask'
import { PasswordInput } from './passwordInput'
export default function RegisterPage() {
	const { mutateAsync, isPending } = useMutation({
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
	const { replace } = useRouter()
	const userStore = useUser(state => state.setUser)
	const onSubmit = async (data: IInputRegister) => {
		try {
			await mutateAsync({
				email: data.email,
				password: data.password,
				phone: data.phone
			}).then(
				res => (
					userStore(res.register.user),
					replace('/catalog'),
					toast.success('Удачная авторизация')
				)
			)
		} catch (e: any) {
			toast.error(e.response.errors[0].message)
		}
	}
	return (
		<Card className='p-8 max-w-[350px]'>
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
										<Input
											placeholder='Введите email'
											{...field}
											type='email'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name='password'
							control={form.control}
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2'>
									<FormLabel>Введите пароль</FormLabel>
									<FormControl>
										<PasswordInput {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Link
							href={'/auth/login'}
							className='hover:underline  cursor-pointer py-2'
						>
							Войти в аккаунт
						</Link>
						<Button type='submit' className='w-full '>
							{isPending ? <Loader /> : 'Регистация'}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

/* eslint-disable max-len */
'use client'
import { useUser } from '@/Providers/store/useUser'
import { authService } from '@/shared/service/auth.service'
import { IInputLogin, loginSchema } from '@/shared/types/Auth.types'
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
import { Input } from '@/shared/ui/input'
import Loader from '@/shared/ui/loader'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import InputMask from 'react-input-mask'

export default function LoginPage() {
	const form = useForm<IInputLogin>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			phone: '+7 (***) *** ** **',
			password: ''
		}
	})
	const { replace } = useRouter()
	const { mutateAsync, isPending } = useMutation({
		mutationFn: ({ password, phone }: { password: string; phone: string }) =>
			authService.login({ password, phone })
	})

	const userStorage = useUser(state => state.setUser)
	const onSubmit = async (data: IInputLogin) => {
		try {
			await mutateAsync({
				password: data.password,
				phone: data.phone
			}).then(
				e => (
					userStorage(e?.login?.user),
					toast.success('Удачная авторизация'),
					replace('/catalog')
				)
			)
		} catch (e: any) {
			toast.error(e.message)
		}
	}

	return (
		<Card className='p-8 max-w-[350px]'>
			<CardHeader className='text-xl'>Вход в аккаунт</CardHeader>
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
								<FormItem className='flex flex-col gap-2 '>
									<FormLabel>Номер телефона</FormLabel>
									<FormControl>
										<InputMask
											className='border border-black rounded-lg p-1'
											placeholder='Введите номер телефона'
											mask='+7 (999) 999 99 99'
											{...field}
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
								<FormItem className='flex flex-col gap-2 '>
									<FormLabel>Пароль</FormLabel>
									<FormControl>
										<Input
											{...field}
											type='password'
											placeholder='Введите пароль'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Link
							href={'/auth/register'}
							className='hover:underline  cursor-pointer py-2'
						>
							Пройти регистрацию
						</Link>
						<Button type='submit' className='w-full '>
							{isPending ? <Loader /> : 'Войти'}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

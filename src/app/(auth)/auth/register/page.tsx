'use client'
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
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
export default function RegisterPage() {
	const form = useForm<IInputRegister>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			phone: '+7 (***) ***-**-**',
			email: '',
			name: ''
		}
	})
	const [showCaptcha, setShowCaptcha] = useState(false)

	const onSubmit = (data: IInputRegister) => {
		console.log(data)
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
							name='name'
							control={form.control}
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2'>
									<FormLabel>Введите никнейм</FormLabel>
									<FormControl>
										<InputMask
											mask={''}
											placeholder='Никнейм'
											type='text'
											className='border border-black rounded-lg p-1'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<ReCAPTCHA
							sitekey={process.env.GOOGLE_KEY_RECPTCHA as string}
							onChange={() => setShowCaptcha(true)}
						/>
						<Button
							disabled={showCaptcha === false}
							type='submit'
							className='w-full'
						>
							Submit
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

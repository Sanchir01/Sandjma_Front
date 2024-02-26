import { z } from 'zod'

export type IInputLogin = z.infer<typeof loginSchema>

export const loginSchema = z.object({
	phone: z
		.string()
		.min(16, 'не корректный номер телефона, должно быть максимум 16 цыфр'),
	password: z
		.string()
		.min(6, 'не корректный пароль, должно быть минимум 6 символов')
})

export type IInputRegister = z.infer<typeof registerSchema>

export const registerSchema = z.object({
	phone: z
		.string()
		.min(16, 'не корректный номер телефона, должно быть максимум 16 цыфр'),
	name: z.string(),
	email: z.string()
})

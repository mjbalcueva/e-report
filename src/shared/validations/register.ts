import { z } from 'zod'

export const registerSchema = z.object({
	firstName: z.string().min(1, 'First Name is required'),
	lastName: z.string().min(1, 'Last Name is required'),
	email: z.string().email('Email is required'),
	username: z.string().min(1, 'Username is required'),
	password: z.string().min(1, 'Password is required')
})

export type RegisterSchema = z.infer<typeof registerSchema>

import { hash } from 'bcryptjs'

import { registerSchema } from '@/shared/validations/register'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const authRouter = createTRPCRouter({
	register: publicProcedure.input(registerSchema).mutation(async ({ ctx, input }) => {
		const { email, password, firstName, lastName, username } = input

		const user = await ctx.db.user.findUnique({
			where: { email }
		})
		if (user) {
			throw new Error('User already exists')
		}

		const hashedPassword = await hash(password, 10)

		const newUser = await ctx.db.user.create({
			data: {
				firstName,
				lastName,
				username,
				email,
				password: hashedPassword
			}
		})

		return {
			message: 'User created successfully',
			user: newUser
		}
	})
})

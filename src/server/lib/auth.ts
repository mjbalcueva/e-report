import { PrismaAdapter } from '@auth/prisma-adapter'
import { type Role } from '@prisma/client'
import { compare } from 'bcryptjs'
import NextAuth, { type DefaultSession } from 'next-auth'
import { type DefaultJWT } from 'next-auth/jwt'
import Credentials from 'next-auth/providers/credentials'

import { loginSchema } from '@/shared/validations/login'

import { db } from '@/server/lib/db'

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			firstname: string
			lastname: string
			role: Role
			isTwoFactorEnabled: boolean
			hasPassword: boolean
		}
	}
}

declare module 'next-auth/jwt' {
	interface JWT extends DefaultJWT {
		firstname: string
		lastname: string
		role: Role
		isTwoFactorEnabled: boolean
		hasPassword: boolean
	}
}

export const {
	auth,
	handlers: { GET, POST }
} = NextAuth({
	pages: {
		signIn: '/auth/auth'
	},
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {}
			},
			authorize: async (credentials) => {
				const validatedFields = loginSchema.safeParse(credentials)
				if (!validatedFields.success) return null

				const { email, password } = validatedFields.data

				const user = await db.user.findUnique({ where: { email } })
				if (!user?.password) return null

				const isPasswordValid = await compare(password, user.password)
				if (!isPasswordValid) return null

				return user
			}
		})
	],

	adapter: PrismaAdapter(db),
	session: { strategy: 'jwt' }
})

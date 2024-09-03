'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'

import { api } from '@/shared/trpc/react'
import { registerSchema, type RegisterSchema } from '@/shared/validations/register'

import { cn } from '@/client/lib/utils'
import styles from '@/client/styles/auth.module.css'

interface RegisterFormProps {
	onToggle: () => void
}

export const RegisterForm = ({ onToggle }: RegisterFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: ''
		}
	})

	const { mutate } = api.auth.register.useMutation()

	const onSubmit: SubmitHandler<RegisterSchema> = (data) => mutate(data)

	return (
		<div className={cn(styles.formBox, styles.register)}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h1>Registration</h1>
				<div className={styles.twoForms}>
					<div className={styles.inputBox}>
						<input type="text" placeholder="First Name" required {...register('firstName')} />
						{errors.firstName && <span>{errors.firstName.message}</span>}
					</div>
					<div className={styles.inputBox}>
						<input type="text" placeholder="Last Name" required {...register('lastName')} />
						{errors.lastName && <span>{errors.lastName.message}</span>}
					</div>
				</div>
				<div className={styles.inputBox}>
					<input type="email" placeholder="Email" required {...register('email')} />
					{errors.email && <span>{errors.email.message}</span>}
				</div>
				<div className={styles.inputBox}>
					<input type="text" placeholder="Username" required {...register('username')} />
					{errors.username && <span>{errors.username.message}</span>}
				</div>
				<div className={styles.inputBox}>
					<input type="password" placeholder="Password" required {...register('password')} />
					{errors.password && <span>{errors.password.message}</span>}
				</div>
				<button type="submit">Register</button>
				<div className={styles.registerLink}>
					<p>
						Already have an Account?{' '}
						<a href="#" onClick={onToggle}>
							Login
						</a>
					</p>
				</div>
			</form>
		</div>
	)
}

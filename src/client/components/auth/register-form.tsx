'use client'

import { cn } from '@/client/lib/utils'
import styles from '@/client/styles/auth.module.css'

interface RegisterFormProps {
	onToggle: () => void
}

export const RegisterForm = ({ onToggle }: RegisterFormProps) => {
	return (
		<div className={cn(styles.formBox, styles.register)}>
			<form className={styles.form}>
				<h1>Registration</h1>
				<div className={styles.twoForms}>
					<div className={styles.inputBox}>
						<input type="text" placeholder="First Name" required />
					</div>
					<div className={styles.inputBox}>
						<input type="text" placeholder="Last Name" required />
					</div>
				</div>
				<div className={styles.inputBox}>
					<input type="email" placeholder="Email" required />
				</div>
				<div className={styles.inputBox}>
					<input type="text" placeholder="Username" required />
				</div>
				<div className={styles.inputBox}>
					<input type="password" placeholder="Password" required />
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

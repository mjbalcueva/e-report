'use client'

import Image from 'next/image'
import { useState } from 'react'

import { LoginForm } from '@/client/components/auth/login-form'
import { RegisterForm } from '@/client/components/auth/register-form'
import { cn } from '@/client/lib/utils'
import styles from '@/client/styles/auth.module.css'

export default function AuthPage() {
	const [isLogin, setIsLogin] = useState(true)

	const toggleForm = () => setIsLogin(!isLogin)

	return (
		<div className="relative flex min-h-screen items-center justify-center">
			<Image
				src="/assets/auth-background.jpg"
				alt="Authentication background"
				fill
				priority
				quality={100}
				className="absolute inset-0 object-cover"
			/>
			<div className={cn(styles.wrapper, !isLogin && styles.active)}>
				{isLogin ? <LoginForm onToggle={toggleForm} /> : <RegisterForm onToggle={toggleForm} />}
			</div>
		</div>
	)
}

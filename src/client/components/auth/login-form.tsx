'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface LoginFormProps {
	onToggle: () => void
}

export const LoginForm = ({ onToggle }: LoginFormProps) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		// Replace this with your actual authentication logic
		if (username === 'admin' && password === 'admin') {
			router.push('/admin')
		} else if (username === 'user' && password === 'user') {
			router.push('/user')
		} else if (username === 'responder' && password === 'responder') {
			router.push('/responder')
		} else if (username === 'unit' && password === 'unit') {
			router.push('/unit')
		} else if (username === 'police' && password === 'police') {
			router.push('/police')
		} else if (username === 'barangay' && password === 'barangay') {
			router.push('/barangay')
		} else {
			alert('Invalid Username or Password')
		}
	}

	return (
		<div className="form-box login">
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className="inputbox">
					<input
						type="text"
						placeholder="Username"
						required
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="inputbox">
					<input
						type="password"
						placeholder="Password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="remember-forgot">
					<label>
						<input type="checkbox" /> Remember me
					</label>
					<a href="#">Forgot password?</a>
				</div>
				<button type="submit">Login</button>
				<div className="register-link">
					<p>
						Don&apos;t have an account?{' '}
						<a href="#" onClick={onToggle}>
							Create Account
						</a>
					</p>
				</div>
			</form>
		</div>
	)
}

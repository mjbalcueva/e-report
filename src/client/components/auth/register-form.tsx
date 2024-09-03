'use client'

interface RegisterFormProps {
	onToggle: () => void
}

export const RegisterForm = ({ onToggle }: RegisterFormProps) => {
	return (
		<div className="form-box register">
			<form>
				<h1>Registration</h1>
				<div className="two-forms">
					<div className="inputbox">
						<input type="text" placeholder="First Name" required />
					</div>
					<div className="inputbox">
						<input type="text" placeholder="Last Name" required />
					</div>
				</div>
				<div className="inputbox">
					<input type="email" placeholder="Email" required />
				</div>
				<div className="inputbox">
					<input type="text" placeholder="Username" required />
				</div>
				<div className="inputbox">
					<input type="password" placeholder="Password" required />
				</div>
				<button type="submit">Register</button>
				<div className="register-link">
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

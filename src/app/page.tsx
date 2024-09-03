import Link from 'next/link'

import { auth } from '@/server/lib/auth'

export default async function Page() {
	const session = await auth()

	return (
		<>
			<h1>Hello World</h1>
			<Link href={session ? '/api/auth/signout' : '/api/auth/login'}>{session ? 'Sign out' : 'Sign in'}</Link>
		</>
	)
}

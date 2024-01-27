import { Button } from '@/shared/ui'
import { LogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { FC } from 'react'

const SignInButton: FC = () => {
	const handleSignIn = () => signIn()
	return (
		<Button onClick={handleSignIn} variant='outline'>
			<LogIn className={'mr-2 h-4 w-4'} /> Войти
		</Button>
	)
}

export default SignInButton

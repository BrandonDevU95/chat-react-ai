import { Button } from '@/components/ui/button';
import { useAuthActions } from '../../hooks/useAuthActions';

const LoginPage = () => {
	const { loginWithGoogle } = useAuthActions();
	return (
		<div>
			<h1>Login Page</h1>
			<Button onClick={loginWithGoogle}>Login with Google</Button>
		</div>
	);
};

export default LoginPage;

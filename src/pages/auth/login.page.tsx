import { useAuthActions } from '../../hooks/useAuthActions';

const LoginPage = () => {
	const { loginWithGoogle } = useAuthActions();
	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={loginWithGoogle}>Login with Google</button>
		</div>
	);
};

export default LoginPage;

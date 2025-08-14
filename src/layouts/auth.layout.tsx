import { Navigate, Outlet } from 'react-router';

import { useSigninCheck } from 'reactfire';

const AuthLayout = () => {
	const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

	//Mostrar Loading mienstras se verifica el estado de autenticación
	if (status === 'loading' || !hasEmitted) {
		return <div>Loading...</div>;
	}

	//Redirigir si el usuario ya esta autenticado
	if (status === 'success' && signInCheckResult?.signedIn === true) {
		return <Navigate to="/admin" replace />;
	}

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default AuthLayout;

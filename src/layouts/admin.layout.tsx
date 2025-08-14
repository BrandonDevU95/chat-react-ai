import { Navigate, Outlet } from 'react-router';

import { useSigninCheck } from 'reactfire';

const AdminLayout = () => {
	const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

	console.log({
		status,
		signInCheckResult,
		hasEmitted,
	});

	//Mostrar Loading mienstras se verifica el estado de autenticación
	if (status === 'loading' || !hasEmitted) {
		return <div>Loading...</div>;
	}

	//Redirigir si el usuario no esta autenticado
	if (status === 'success' && signInCheckResult?.signedIn === false) {
		return <Navigate to="/auth/login" replace />;
	}

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default AdminLayout;

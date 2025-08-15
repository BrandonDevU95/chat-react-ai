import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
	type AuthError,
} from 'firebase/auth';
import { useAuth } from 'reactfire';
import { useState } from 'react';

interface AuthActionsResponse {
	success: boolean;
	error: AuthError | null;
}

export const useAuthActions = () => {
	const [loading, setLoading] = useState(false);
	const auth = useAuth();

	const login = async (data: {
		email: string;
		password: string;
	}): Promise<AuthActionsResponse> => {
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password);
			return {
				success: true,
				error: null,
			};
		} catch (error) {
			console.error('Error signing in:', error);
			return {
				success: false,
				error: error as AuthError,
			};
		} finally {
			setLoading(false);
		}
	};

	const register = async (data: {
		email: string;
		password: string;
		displayName: string;
	}): Promise<AuthActionsResponse> => {
		setLoading(true);
		try {
			const currentUser = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			);

			if (currentUser.user) {
				await updateProfile(currentUser.user, {
					displayName: data.displayName,
				});
			}

			return {
				success: true,
				error: null,
			};
		} catch (error) {
			console.error('Error signing up:', error);
			return {
				success: false,
				error: error as AuthError,
			};
		} finally {
			setLoading(false);
		}
	};

	const loginWithGoogle = async (): Promise<AuthActionsResponse> => {
		setLoading(true);
		try {
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
			return {
				success: true,
				error: null,
			};
		} catch (error) {
			console.error('Error signing in with Google:', error);
			return {
				success: false,
				error: error as AuthError,
			};
		} finally {
			setLoading(false);
		}
	};

	const logout = async (): Promise<AuthActionsResponse> => {
		setLoading(true);
		try {
			await signOut(auth);
			return {
				success: true,
				error: null,
			};
		} catch (error) {
			console.error('Error signing out:', error);
			return {
				success: false,
				error: error as AuthError,
			};
		} finally {
			setLoading(false);
		}
	};

	return { loading, login, register, loginWithGoogle, logout };
};

import { useUser } from 'reactfire';

const App = () => {
	const { data: user } = useUser();
	console.log('User:', user);
	return <div>App</div>;
};

export default App;

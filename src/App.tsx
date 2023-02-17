import MainPage from '@pages/mainPage';

import './App.css';

//import logo from './logo.svg';

const App = () => {
	const mainPageAttr = { flag: false, name: 'Kim Woo Seok' };

	return (
		<div className="App">
			<MainPage {...mainPageAttr} />
			<div>Hello World</div>
		</div>
	);
};

export default App;

//import Routes from "@routes/firstRoute";
import MainPage from "@pages/mainPage";

import "./App.css";
import logo from "./logo.svg";

const App = () => {
	return (
		<div className="App">
			<MainPage flag />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;

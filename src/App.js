import AccordianComponent from './components/AccordianComponent';
import FormComponent from './components/FormComponent';
import ContentComponent from './components/ContentComponent';
import LinksComponent from './components/LinksComponent';
import ProfileComponent from './components/ProfileComponent';
import NavbarComponent from './components/NavbarComponent';
import ExclusiveComponent from './components/ExclusiveComponent';
import './App.css';
import videoBg from './assets/Video.mp4';

function App() {
	return (
		<div>
			<NavbarComponent />
			<main>
				<video src={videoBg} autoPlay loop muted />
				<div className="bodyContent">
					<ProfileComponent />
					<LinksComponent />
					<ExclusiveComponent />
					<ContentComponent />
					<FormComponent />
					<AccordianComponent index={1} />
					<AccordianComponent index={12} />
					<AccordianComponent index={13} />
				</div>
			</main>
		</div>
	);
}

export default App;

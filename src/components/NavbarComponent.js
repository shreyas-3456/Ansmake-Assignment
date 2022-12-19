import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowAltCircleRight,
	faHeartMusicCameraBolt,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
	return (
		<div className="fixed-Buttons-wrapper">
			<Navbar className="fixed-top fixed-Buttons" bg="" expand="lg">
				<div className="arrowButtonContainer">
					<button className="arrowButton">
						<FontAwesomeIcon icon={faArrowAltCircleRight} />
					</button>
				</div>
				<div className="subscribeButtonContainer">
					<Button className="subscribeButton">
						<FontAwesomeIcon
							icon={faHeartMusicCameraBolt}
							style={{ marginRight: '5px', color: 'black' }}
							inverse
						/>
						Subscribe
					</Button>
				</div>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faTwitch,
	faTwitter,
	faYoutube,
	faDiscord,
	faTiktok,
	faLinkedin,
	faSpotify,
	faAppStore,
} from '@fortawesome/free-brands-svg-icons';

const LinksComponent = () => {
	return (
		<div className="links">
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faEnvelope} inverse />
				</div>
			</a>
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faInstagram} inverse />
				</div>
			</a>
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faTwitch} inverse />
				</div>
			</a>
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faYoutube} inverse />
				</div>
			</a>
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faTwitter} inverse />
				</div>
			</a>
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faTiktok} inverse />
				</div>
			</a>
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faDiscord} inverse />
				</div>
			</a>
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faLinkedin} inverse />
				</div>
			</a>
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faSpotify} inverse />
				</div>
			</a>
			<a href="#" className="link">
				<div className="border">
					<FontAwesomeIcon icon={faAppStore} inverse />
				</div>
			</a>
		</div>
	);
};

export default LinksComponent;

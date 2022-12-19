import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckSquare,
	faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
const ProfileComponent = () => {
	return (
		<div className="profile">
			<img
				className="profile-img"
				src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/087c4922-3aae-4514-96a1-a48d63f51725?_reload=450871c0-7db4-11ed-9c3b-0f9b879880d4"
				alt=""
			/>
			<h2>
				ABC <FontAwesomeIcon icon={faCheckSquare} inverse />
			</h2>
			<p>Live each day to the ⚛️ fullest!</p>
			<div>
				<FontAwesomeIcon icon={faLocationPin} inverse />
				{'   '}
				San Francisco, California
			</div>
		</div>
	);
};

export default ProfileComponent;

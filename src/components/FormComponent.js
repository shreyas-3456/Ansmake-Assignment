import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const FormComponent = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className="form-container border border-white">
			<form autocomplete="off">
				<h5>Join the squad</h5>
				<p>Know when I drop merch & speed vlogs</p>
				<div>
					<input
						type="email"
						placeholder="Enter email"
						controlId="formBasicEmail"
						autocomplete="false"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="password"
						placeholder="Password"
						controlId="formBasicPassword"
						autocomplete="false"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className="radio-container">
						<div>
							<input type="radio" id="fan" name="role" value="fan" /> {' '}
							<label for="html">I'm a Fan</label>
						</div>
						<div>
							<input
								type="radio"
								id="contentCreator"
								name="role"
								value="contentCreator"
							/>
							<label for="html">I'm a Creator</label>
						</div>
						<div>
							<input type="radio" id="brand" name="role" value="brand" /> {' '}
							<label for="html">I'm a Brand</label>
						</div>
					</div>
					<Button className="contentButton">Subscribe</Button>
				</div>
			</form>
		</div>
	);
};

export default FormComponent;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';

import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const ContentComponent = () => {
	return (
		<div className="content-container">
			<div className="boxContainer border border-white ">
				<div className="imageContainer ">
					<img
						class=""
						src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_340/v1/page-block-image/digital-product/wide/52de6ac1-5eab-11ed-acc0-432ae882870e_d6eac790-5eac-11ed-acc0-432ae882870e"
					/>
					<div className="content">
						<h5>Weekly training</h5>
						<p>
							Get the inside view of what I did for training every week! FULL
							BREAKDOWN
						</p>
						<Button className="contentButton">
							<FontAwesomeIcon
								icon={faArrowAltCircleRight}
								inverse
								style={{ marginRight: '5px', color: 'black' }}
							/>
							Subscribe to
						</Button>
					</div>
				</div>
			</div>
			<div className="boxContainer border border-white ">
				<div className="imageContainer ">
					<img
						class=""
						src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_340/v1/page-block-image/digital-product/wide/52de6ac1-5eab-11ed-acc0-432ae882870e_d6eac790-5eac-11ed-acc0-432ae882870e"
					/>
					<div className="content">
						<h5>Weekly training</h5>
						<p>
							Get the inside view of what I did for training every week! FULL
							BREAKDOWN
						</p>
						<Button className="contentButton">
							<FontAwesomeIcon
								icon={faArrowAltCircleRight}
								inverse
								style={{ marginRight: '5px', color: 'black' }}
							/>
							Subscribe to
						</Button>
					</div>
				</div>
			</div>
			<div className="boxContainer border border-white ">
				<div className="imageContainer ">
					<img
						class=""
						src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_340/v1/page-block-image/digital-product/wide/52de6ac1-5eab-11ed-acc0-432ae882870e_d6eac790-5eac-11ed-acc0-432ae882870e"
					/>
					<div className="content">
						<h5>Weekly training</h5>
						<p>
							Get the inside view of what I did for training every week! FULL
							BREAKDOWN
						</p>
						<Button className="contentButton">
							<FontAwesomeIcon
								icon={faArrowAltCircleRight}
								inverse
								style={{ marginRight: '5px', color: 'black' }}
							/>
							Subscribe to
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentComponent;

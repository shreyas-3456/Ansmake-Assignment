import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import YouTube from 'react-youtube';
import useWindowDimensions from '../customhooks/getScreenSize';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccordianComponent = ({ index }) => {
	const { height, width } = useWindowDimensions();
	console.log(width);

	return (
		<div className="my-4  accordionCom">
			<Accordion className=" ">
				<Accordion.Item eventKey={String(index)}>
					<Accordion.Header className="header ">
						Workout with Batman
					</Accordion.Header>
					<Accordion.Body className="bg-black">
						{width >= 660 ? (
							<YouTube videoId="fJGDnvoLKFA" />
						) : (
							<a
								href="https://youtu.be/fJGDnvoLKFA"
								className="linkVideo"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									icon={faArrowRight}
									inverse
									style={{ marginRight: '5px' }}
								/>
								LINK TO MY VIDEO
							</a>
						)}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default AccordianComponent;

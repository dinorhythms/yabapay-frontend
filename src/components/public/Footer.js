import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "react-native-vector-icons/FontAwesome";
import appstore from "../../assets/images/app-store-badge.jpg";
import playstore from "../../assets/images/google-play-badge.jpg";
import { stylesColors } from "../../utils/publicVariables";

const { grey, blue } = stylesColors;

const classes = {
	container: {
		backgroundColor: grey
	},
	list: {
		color: "red"
	},
	footerLinks: {
		fontSize: "0.9rem"
	},
	icons: {
		marginRight: '1rem'
	}
};

const Footer = () => {
	return (
		<section style={classes.container} className="pb-3">
			<Container>
				<Row>
					<Col xs={12} md={3} className="mt-5">
						<h6>HELP</h6>
						<ul className="list-group mt-4">
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Faq
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Contact Us
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Live Chat
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Login
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Career
								</a>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={3} className="mt-5">
						<h6>INFORMATION</h6>
						<ul className="list-group mt-4">
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Privacy Policy
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Term of Use
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Social Media
								</a>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={3} className="mt-5">
						<h6>QUICK LINKS</h6>
						<ul className="list-group mt-4">
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									About Us
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Features
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Sign up
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Login
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 mb-2">
								<a href="/" className="text-secondary">
									Career
								</a>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={3} className="mt-5 text-center text-md-left">
						<h6>Find us on Social Media</h6>
						<Icon
							name="facebook-square"
							className="mr-3"
							style={classes.icons}
							size={30}
							color={blue}
						/>
						<Icon name="twitter" className="mr-3" style={classes.icons} size={30} color={blue} />
						<Icon
							name="linkedin-square"
							className="mr-3"
							style={classes.icons}
							size={30}
							color={blue}
						/>
						<Icon name="instagram" style={classes.icons} className="mr-3" size={30} color={blue} />
						<Icon
							name="youtube-square"
							className="mr-3"
							style={classes.icons}
							size={30}
							color={blue}
						/>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col xs={12} md={5} style={classes.footerLinks} className="mt-2 text-center text-md-left">
						<span className="mr-3 text-secondary">PRIVACY POLICY</span>
						<span className="mr-3 text-secondary">TERMS OF USE</span>
					</Col>
					<Col xs={12} md={3} className="mt-4 mt-md-0">
						<img
							src={playstore}
							className="img-fluid w-50"
							alt="download at play store"
						/>
						<img
							src={appstore}
							className="img-fluid w-50"
							alt="download at app store"
						/>
					</Col>
					<Col xs={12} md={4} className="text-center text-md-right mt-4 mt-md-2">
						<span className="text-secondary">DESIGN BY FLINTTECH</span>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer;

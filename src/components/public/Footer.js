import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Icon from "react-native-vector-icons/FontAwesome";
import appstore from "../../assets/images/app-store-badge.jpg";
import playstore from "../../assets/images/google-play-badge.jpg";
import { stylesColors } from "../../utils/publicVariables";

const { grey, grey2 } = stylesColors;

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
							color={grey2}
						/>
						<Icon name="twitter" className="mr-3" style={classes.icons} size={30} color={grey2} />
						<Icon
							name="linkedin-square"
							className="mr-3"
							style={classes.icons}
							size={30}
							color={grey2}
						/>
						<Icon name="instagram" style={classes.icons} className="mr-3" size={30} color={grey2} />
						<Icon
							name="youtube-square"
							className="mr-3"
							style={classes.icons}
							size={30}
							color={grey2}
						/>
						<h6 className="mt-4">Sign Up for our Newsletter</h6>
						<Form className="mt-1 mb-3">
							<Form.Row>
								<Col>
									<Form.Control className="mt-2" type="text" placeholder="Enter your Email" />
								</Col>
								<Col xs={2}>
									<Button variant="warning" className="mt-2" style={classes.button}>Go</Button>
								</Col>
							</Form.Row>
            </Form>
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
				</Row>
				<hr />
				<Row>
					<Col xs={12} md={5} style={classes.footerLinks} className="text-center text-md-left">
						<span className="mr-3 text-secondary"><small>PRIVACY POLICY</small></span>
						<span className="mr-3 text-secondary"><small>TERMS OF USE</small></span>
					</Col>
					<Col xs={12} md={3} className="">
					</Col>
					<Col xs={12} md={4} className="text-center text-md-right mt-2 mt-md-0">
						<span className="text-secondary"><small>DESIGN BY FLINTTECH</small></span>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer;

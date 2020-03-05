import React from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import Icon from "react-native-vector-icons/FontAwesome";
// import bg2 from "../../assets/images/bg/bg_features.jpg";
import bg from "../../assets/images/bg/bg_header.jpg";
import AppDownload from "../../components/public/AppDownload";
import PageHeader from "../../components/public/PageHeader";
// import { stylesColors } from "../../utils/publicVariables";
import FeatureSection from "../../components/public/FeatureSection";

// const { yellow } = stylesColors;

// const classes = {
//   rectBoxes: {
//     width: '10rem',
//     height: '10rem'
//   },
// }

export default function FeaturesPage() {
	return (
		<>
			<PageHeader rootPage="Home" currentPage="Our Features" bg={bg} />
      <FeatureSection/>
			{/* <section className="mt-n5 pb-5">
				<Container>
					<Row>
						<Col xs={12} md={4} className="mb-2">
							<Card className="bg-dark text-center mt-2 border-0">
								<Card.Img src={bg2} alt="Card image" />
								<Card.ImgOverlay className="mt-5 mt-md-4">
									<h1 className="mt-0 mb-0">100% Secure</h1>
									<Card.Text className="mt-2 mb-0">
										Moving your card details to a much more secured place
									</Card.Text>
									<Icon name="shield" size={80} color={yellow} />
								</Card.ImgOverlay>
							</Card>
						</Col>
						<Col xs={12} md={4} className="mb-2">
							<Card className="bg-dark text-center mt-2 border-0">
								<Card.Img src={bg2} alt="Card image" />
								<Card.ImgOverlay className="mt-5 mt-md-4">
									<h1 className="mt-0 mb-0">Tech Support</h1>
									<Card.Text className="mt-2 mb-0">
										Please feel free to write an email to us.
										support@yabapay.com
									</Card.Text>
									<Icon name="envelope" size={80} color={yellow} />
								</Card.ImgOverlay>
							</Card>
						</Col>
						<Col xs={12} md={4} className="mb-2">
							<Card className="bg-dark text-center mt-2 border-0">
								<Card.Img src={bg2} alt="Card image" />
								<Card.ImgOverlay className="mt-5 mt-md-4">
									<h1 className="mt-0 mb-0">Refer & Earn</h1>
									<Card.Text className="mt-2 mb-0">
										Invite a friend to sign up and earn some money for yourself
									</Card.Text>
									<Icon name="compress" size={80} color={yellow} />
								</Card.ImgOverlay>
							</Card>
						</Col>
					</Row>
				</Container>
			</section> */}
			{/* <section className="pb-5">
				<Container>
					<Row>
						<Col xs={12} md={6}>
							<Card className="d-flex flex-row pt-3 bg-light">
								<div className="w-25 text-center border-2">
									<Icon name="shield" size={80} color={yellow} />
								</div>
								<div>
									<h2>Trust pay</h2>
									<h6 className="text-secondary mb-3">
										100% Payment Protection. <br /> Easy Return Policy
									</h6>
								</div>
							</Card>
						</Col>
            <Col xs={12} md={6} className="mt-3 mt-md-0">
							<Card className="d-flex flex-row pt-3 bg-light">
								<div className="w-25 text-center border-2">
									<Icon name="shield" size={80} color={yellow} />
								</div>
								<div>
									<h2>24X7 Support</h2>
									<h6 className="text-secondary mb-3">
                    We're here to help. Always  <br /> available to support you 
									</h6>
								</div>
							</Card>
						</Col>
					</Row>
				</Container>
			</section> */}
			<AppDownload />
		</>
	);
}

import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import Button from "react-bootstrap/Button";
import { BrightnessHigh } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import styles from '../assets//PlantHeader.module.css';

const PlantHeader = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary w-100">
				<Row className="px-2 w-100">
					<Col sm="2">
						<Navbar.Brand
							className="gap-1 d-flex align-items-center"
							href="#"
						>
							<Image
								className="ratio-1x1"
								src={logo}
								style={{ width: "2.4rem", height: "2.4rem" }}
								rounded
							/>
							<h1 className="fs-4 fw-bold mb-0">Plantify</h1>
						</Navbar.Brand>
					</Col>
					<Col sm="10" className="d-flex justify-content-between align-items-center fw-semibold">
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Row className="w-100 align-items-center">
								<Col className={`d-flex justify-content-center gap-5 ${styles.navItems}`}>
									<Nav.Link href="#">Trang chủ</Nav.Link>
									<Nav.Link href="#">Khám phá</Nav.Link>
									<Nav.Link href="#">Gian hàng</Nav.Link>
									<Nav.Link href="#">Bác sĩ AI</Nav.Link>
									<Nav.Link href="#">Đồ thị tri thức</Nav.Link>
									<Nav.Link href="#">Blog</Nav.Link>
								</Col>
								<Col className="d-flex gap-4 align-items-center justify-content-center">
									<BrightnessHigh role="button"></BrightnessHigh>
									<Nav.Link href="#">Hỏi AI</Nav.Link>
									<Nav.Link href="#">Đăng nhập</Nav.Link>
									<Button variant="success rounded-5">Đăng ký</Button>
								</Col>
							</Row>
						</Navbar.Collapse>
					</Col>
				</Row>
		</Navbar>
	);
};

export default PlantHeader;

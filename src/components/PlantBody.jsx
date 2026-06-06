import { Button, Col, Image, Row } from "react-bootstrap";
import plant from "../assets/images/plant.webp";
import {
	ArrowLeft,
  BrightnessHigh,
	ThermometerHalf,
	Wind,
	Droplet,
} from "react-bootstrap-icons";

const PlantBody = () => {
	return (
		<div className="px-2 mt-4">
			<Button variant="link d-flex gap-3 fw-semibold align-items-center text-decoration-none text-black">
				<ArrowLeft></ArrowLeft>Quay lại
			</Button>
			<Row className="mt-3 w-100 pe-3 d-flex gap-3" style={{ height: "43.75rem" }}>
				<Col sm="6">
					<Image
						className="rounded-4 w-100 h-100 object-fit-cover"
						src={plant}
					></Image>
				</Col>
				<Col sm="5">
					<div
						className="text-success bg-success-subtle rounded-4 px-2"
						style={{ width: "max-content" }}
					>
						Dễ
					</div>
					<h1 className="fw-bold mt-2" style={{ fontSize: "4rem" }}>
						Monstera Deliciosa
					</h1>
					<i className="text-secondary fs-5">Monstera Deliciosa</i>
					<div className="gap-2 d-flex mt-3">
						<div
							className="rounded-4 px-2 fw-semibold"
							style={{
								width: "max-content",
								background: "rgb(241, 245, 246)",
								fontSize: "0.85rem",
							}}
						>
							Cây Monstera
						</div>
						<div
							className="rounded-4 px-2 fw-semibold"
							style={{
								width: "max-content",
								background: "rgb(241, 245, 246)",
								fontSize: "0.85rem",
							}}
						>
							Trầu Bà Lá Xẻ
						</div>
					</div>
					<p className="mt-4 fs-4 text-secondary">
						Monstera Deliciosa là loại cây cảnh nội thất phổ biến với lá xẻ độc
						đáo. Cây dễ trồng, thích hợp cho người mới bắt đầu và có khả năng
						thanh lọc không khí tốt.
					</p>
					<div>
						<Row xs="2" lg={2} className="gap-4 w-100">
							<Col
								lg={5}
								className="d-flex align-items-center rounded-3 p-4 border-secondary-subtle border gap-3 "
                style={{height:"6rem"}}
							>
								<Droplet
									className="fs-2 mb-2"
									style={{ color: "rgb(83, 134, 189)" }}
								></Droplet>
								<div className="d-flex flex-column">
									<h6 className="text-secondary">Tưới nước</h6>
									<h5 className="fw-semibold text-nowrap" style={{fontSize: "1.1rem"}}>7-10 ngày/lần</h5>
								</div>
							</Col>
							<Col lg={5} className="d-flex align-items-center rounded-3 p-4 border-secondary-subtle border gap-3 "
              style={{height:"6rem"}}>
								<BrightnessHigh
									className="fs-2 mb-2"
									style={{ color: "rgb(226, 208, 132)"}}
								></BrightnessHigh>
								<div className="d-flex flex-column">
									<h6 className="text-secondary">Ánh sáng</h6>
									<h5 className="fw-semibold text-nowrap" style={{fontSize: "1.1rem"}}>Ánh sáng gián tiếp</h5>
								</div>
							</Col>
							<Col lg={5}  className="d-flex align-items-center rounded-3 p-4 border-secondary-subtle border gap-3 " style={{height:"6rem"}}>
								<ThermometerHalf
									className="fs-2 mb-2"
									style={{ color: "rgb(199, 66, 83)" }}
								></ThermometerHalf>
								<div className="d-flex flex-column">
									<h6 className="text-secondary">Tưới nước</h6>
									<h5 className="fw-semibold text-nowrap" style={{fontSize: "1.1rem"}}>7-10 ngày/lần</h5>
								</div>
							</Col>
							<Col lg={5}  className="d-flex align-items-center rounded-3 p-4 border-secondary-subtle border gap-3 " style={{height:"6rem"}}>
								<Wind
									className="fs-2 mb-2"
									style={{ color: "rgb(87, 186, 207)" }}
								></Wind>
								<div className="d-flex flex-column">
									<h6 className="text-secondary">Nhiệt độ</h6>
									<h5 className="fw-semibold text-nowrap" style={{fontSize: "1.1rem"}}>21-25°C</h5>
								</div>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default PlantBody;

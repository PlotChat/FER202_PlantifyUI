import { ChatLeftHeartFill } from "react-bootstrap-icons";

const PlantChat = () => {
	return (
		<div
			className={
				"bg-success position-fixed rounded-circle text-white fs-4 d-flex justify-content-center align-items-center"
			}
			style={{ width: "4rem", height: "4rem", bottom: "3%", right: "1%" }}
		>
			<ChatLeftHeartFill></ChatLeftHeartFill>
		</div>
	);
};

export default PlantChat;

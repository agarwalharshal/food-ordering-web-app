import React, { useState } from "react";
import ReactDOM from "react-dom";

function ConfirmOrder(props) {
	const { open, onClose, cartItems } = props;
	const [isOver, setOver] = useState(false);

	if (!open) {
		return null;
	}
	function handleOver() {
		setOver(true);
	}
	function handleOut() {
		setOver(false);
	}
	return ReactDOM.createPortal(
		<>
			<div className="overlay" />
			<div className="modal">
				<div className="modalContent">
					<h1>Your Order</h1>
					<table>
						<tr>
							<th>S.No.</th>
							<th>Dishes</th>
							<th>Qty.</th>
							<th>Amount</th>
						</tr>
						{cartItems.map((item, index) => (
							<tr>
								<td>{index + 1}</td>
								<td>{item.dish}</td>
								<td>{item.qty}</td>
								<td>{item.price * item.qty}</td>
							</tr>
						))}
					</table>
					<p style={{ marginTop: "20px" }}>
						Total Amount:{" "}
						{cartItems.reduce(
							(accumulator, item) => accumulator + item.qty * item.price,
							0
						)}
					</p>
				</div>
				<button
					className="place"
					onClick={onClose}
					onMouseOver={handleOver}
					onMouseOut={handleOut}
					style={{ backgroundColor: isOver ? "#fa8231" : "#fd9644" }}
				>
					Place Order
				</button>
			</div>
		</>,
		document.getElementById("portal")
	);
}

export default ConfirmOrder;

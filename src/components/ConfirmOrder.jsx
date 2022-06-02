import React, { useState } from "react";
import ReactDOM from "react-dom";

function ConfirmOrder(props) {
	const [isOver, setOver] = useState(false);

	if (!props.open) {
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
							<th>Price</th>
						</tr>

						<tr>{/* ordered dishes component */}</tr>
					</table>
				</div>
				<button
					className="place"
					onClick={props.onClose}
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

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

						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
							<td>Germany</td>
						</tr>
						<tr>
							<td>Centro comercial Moctezuma</td>
							<td>Francisco Chang</td>
							<td>Germany</td>
							<td>Mexico</td>
						</tr>
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

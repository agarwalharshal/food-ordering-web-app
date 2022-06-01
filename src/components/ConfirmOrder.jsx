import React from "react";
import ReactDOM from "react-dom";

function ConfirmOrder(props) {
	if (!props.open) {
		return null;
	}
	return ReactDOM.createPortal(
		<>
			<div className="overlay" />
			<div className="modal">
				<h1>Your Order</h1>
				<button className="place" onClick={props.onClose}>
					Place Order
				</button>
			</div>
		</>,
		document.getElementById("portal")
	);
}

export default ConfirmOrder;

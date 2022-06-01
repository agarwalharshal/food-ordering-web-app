import React, { useState } from "react";
import Veg from "./Vegetarian";
import NonVeg from "./NonVegetarian";
import ConfirmOrder from "./ConfirmOrder";

function App() {
	const [isGreen, setGreen] = useState(true);
	const [isOver, setOver] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	function handleClick(event) {
		const { className } = event.target;
		if (className === "veg") {
			setGreen(true);
		} else {
			setGreen(false);
		}
	}
	function handleOver() {
		setOver(true);
	}
	function handleOut() {
		setOver(false);
	}
	return (
		<div>
			<button className="veg" onClick={handleClick}>
				Vegetarian
			</button>
			<button className="nonveg" onClick={handleClick}>
				Non-Vegetarian
			</button>
			<NonVeg isGreen={isGreen} />
			<Veg isGreen={isGreen} />
			<>
				<button
					className="confirm"
					onClick={() => setIsOpen(true)}
					onMouseOver={handleOver}
					onMouseOut={handleOut}
					style={{ backgroundColor: isOver ? "#fa8231" : "#fd9644" }}
				>
					Confirm Order
				</button>
				<ConfirmOrder open={isOpen} onClose={() => setIsOpen(false)} />
			</>
		</div>
	);
}

export default App;

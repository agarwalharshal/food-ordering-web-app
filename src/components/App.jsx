import React, { useState } from "react";
import Veg from "./Vegetarian";
import NonVeg from "./NonVegetarian";
import ConfirmOrder from "./ConfirmOrder";

function App() {
	const [cartItems, setCartItems] = useState([]);
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

	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.key === product.key);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.key === product.key ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};
	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.key === product.key);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.key !== product.key));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.key === product.key ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};

	return (
		<div>
			<button className="veg" onClick={handleClick}>
				Vegetarian
			</button>
			<button className="nonveg" onClick={handleClick}>
				Non-Vegetarian
			</button>
			<NonVeg isGreen={isGreen} onAdd={onAdd} onRemove={onRemove} />
			<Veg isGreen={isGreen} onAdd={onAdd} onRemove={onRemove} />
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
				<ConfirmOrder
					open={isOpen}
					onClose={() => setIsOpen(false)}
					cartItems={cartItems}
				/>
			</>
		</div>
	);
}

export default App;

import React from "react";
import vdishes from "../vegetarian";
import MenuItem from "./MenuItem";

function Veg(props) {
	return (
		<div style={{ backgroundColor: "#26de81" }}>
			{props.isGreen && (
				<div className="menuItems">
					{vdishes.map((item) => (
						<MenuItem
							key={item.key}
							dish={item.dish}
							price={item.price}
							// qty={item.quantity}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Veg;

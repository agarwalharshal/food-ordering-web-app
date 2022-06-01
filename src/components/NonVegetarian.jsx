import React from "react";
import nvdishes from "../nonvegetarian";
import MenuItem from "./MenuItem";

function NonVeg(props) {
	return (
		<div style={{ backgroundColor: "#fc5c65" }}>
			{!props.isGreen && (
				<div className="menuItems">
					{nvdishes.map((item) => (
						<MenuItem key={item.key} dish={item.dish} price={item.price} />
					))}
				</div>
			)}
		</div>
	);
}

export default NonVeg;

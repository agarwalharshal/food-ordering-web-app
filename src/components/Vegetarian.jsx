import React from "react";
import vdishes from "../vegetarian";
import MenuItem from "./MenuItem";

function Veg(props) {
	const { products } = vdishes;
	const { isGreen, onAdd, onRemove } = props;
	return (
		<div style={{ backgroundColor: "#16a085" }}>
			{isGreen && (
				<div className="menuItems">
					{products.map((item) => (
						<MenuItem
							key={item.key}
							item={item}
							onAdd={onAdd}
							onRemove={onRemove}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Veg;

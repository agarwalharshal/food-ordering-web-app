import React from "react";
import nvdishes from "../nonvegetarian";
import MenuItem from "./MenuItem";

function NonVeg(props) {
	const { products } = nvdishes;
	const { isGreen, onAdd, onRemove } = props;
	return (
		<div style={{ backgroundColor: "#bd574e" }}>
			{!isGreen && (
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

export default NonVeg;

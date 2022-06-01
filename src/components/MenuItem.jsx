import React, { useState } from "react";

function MenuItem(props) {
	const [count, setCount] = useState(0);
	function increase() {
		setCount(count + 1);
	}
	function decrease() {
		count && setCount(count - 1);
	}
	return (
		<div className="eachItem">
			<div className="nameprice">
				<p style={{ fontSize: "2rem", fontWeight: "600" }}>{props.dish}</p>
				<p
					style={{ fontSize: "1.5rem", fontWeight: "400", textAlign: "center" }}
				>
					<blockquote style={{ fontSize: "1rem" }}>Price</blockquote>
					{props.price}
				</p>
			</div>
			<div className="qty">
				<blockquote style={{ fontSize: "1.1rem" }}>Quantity</blockquote>
				<div>
					<button onClick={decrease}>-</button>
					<p>{count}</p>
					<button onClick={increase}>+</button>
				</div>
			</div>
		</div>
	);
}

export default MenuItem;

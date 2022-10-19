import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, link }) {
	return (
		<Link to={link}>
			<button className='btn-1'>{text}</button>
		</Link>
	);
}

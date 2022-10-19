import React from "react";
import data from "../helpers/Data";

export default function Projetos() {

	const createLi = (index) => {
		const habilidades = Object.entries(data[index].habilidades)
			.filter(t => t[0].includes("habilidade"))
			.filter(d => d[1] !== " ");
		const lis = [];
		for (let i = 0; i < habilidades.length; i += 1) {
			lis.push(<div key={i}>{`${habilidades[i][1]}`}</div>);
		}
		return lis;
	};

	

	return (
		<>
			<h1>projetos</h1>
            {data.map(({ id, title }) =>
                <div>
                    <h3>{title}</h3>
                    {createLi(id)}
                </div>
                
            )}
		</>
	);
}

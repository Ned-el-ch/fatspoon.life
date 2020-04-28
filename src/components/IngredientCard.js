import React from 'react'

const IngredientCard = ({ingredient}) => {
	const {name, quantity, category} = ingredient;
	return (
		<div className="ic-container">
			<h1>{name}</h1>
		</div>
	)
}

export default IngredientCard;
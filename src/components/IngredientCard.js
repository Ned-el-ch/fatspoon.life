import React from 'react'
import { increaseIngredient } from '../actions/ingredients';

const IngredientCard = ({ingredient, increaseIngredient, decreaseIngredient, removeIngredient}) => {
	const {name, quantity, category, id} = ingredient;
	return (
		<div className={`ic-container`}>
			<div className="ic-heading-container">
				<span className="ic-heading">{name}</span>
			</div>
			{/* <svg viewBox="0 0 150 18">
				<text x="0" y="18">{name}</text>
			</svg> */}
			<button className="ic-button remove"  onClick={() => removeIngredient(id)}>x</button>
			<span className="ic-quantity">{quantity >= 1000 ? `${quantity / 1000} kg` : `${quantity} g`}</span>
			<div className="ic-buttons-container">
				<div className="ic-buttons-plus">
					<button className="ic-button pos" onClick={() => increaseIngredient(id, 1)}>1</button>
					<button className="ic-button pos" onClick={() => increaseIngredient(id, 10)}>10</button>
					<button className="ic-button pos" onClick={() => increaseIngredient(id, 100)}>100</button>
				</div>
				<div className="ic-buttons-minus">
					<button className="ic-button neg" onClick={() => decreaseIngredient(id, 1)}>1</button>
					<button className="ic-button neg" onClick={() => decreaseIngredient(id, 10)}>10</button>
					<button className="ic-button neg" onClick={() => decreaseIngredient(id, 100)}>100</button>
				</div>
			</div>
		</div>
	)
}

export default IngredientCard;
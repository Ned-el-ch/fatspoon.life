import React from 'react'
import { connect } from 'react-redux'
import { updateIngredients, removeAnIngredient } from '../Actions/ingredients.js'

const assignCategoryLabel = category => {
	switch (category) {
		case "Eggs & Dairy":
			return "cat1"
		case "Fruits & Veggies":
			return "cat2"
		case "Bread, Pasta & Noods":
			return "cat3"
		case "Baking & Grains":
			return "cat4"
		case "Meats & Seafood":
			return "cat5"
		case "Seeds & Spices":
			return "cat6"
		case "Oils & Condiments":
			return "cat7"
		case "Legumes & Nuts":
			return "cat8"
		case "Sweets & Spirits":
			return "cat9"
		default:
			return "no-label"
	}
}

const IngredientCard = ({updateIngredients, removeAnIngredient, ingredient, increaseIngredient, decreaseIngredient, removeIngredient}) => {
	const {name, weight, category, uuid} = ingredient;
	const label = assignCategoryLabel(category);
	return (
		<div className={`ic-container ${label}`}>
			<div className={`ic-heading-label ${label}`}></div>
			<div className="ic-heading-container">
				<span className={`ic-heading ${label}`}>{name}</span>
			</div>
			<button className="ic-button remove"  onClick={() => removeAnIngredient(uuid, removeIngredient)}>x</button>
			<span className="ic-weight">{weight >= 1000 ? `${weight / 1000} kg` : `${weight} g`}</span>
			<div className="ic-buttons-container">
				<div className="ic-buttons-plus">
					<button className="ic-button pos" onClick={() => updateIngredients(ingredient, increaseIngredient, weight, 1)}>1</button>
					<button className="ic-button pos" onClick={() => updateIngredients(ingredient, increaseIngredient, weight, 10)}>10</button>
					<button className="ic-button pos" onClick={() => updateIngredients(ingredient, increaseIngredient, weight, 100)}>100</button>
				</div>
				<div className="ic-buttons-minus">
					<button className="ic-button neg" onClick={() => updateIngredients(ingredient, decreaseIngredient, weight, -1)}>1</button>
					<button className="ic-button neg" onClick={() => updateIngredients(ingredient, decreaseIngredient, weight, -10)}>10</button>
					<button className="ic-button neg" onClick={() => updateIngredients(ingredient, decreaseIngredient, weight, -100)}>100</button>
				</div>
			</div>
		</div>
	)
}

export default connect(null, { updateIngredients, removeAnIngredient })(IngredientCard);
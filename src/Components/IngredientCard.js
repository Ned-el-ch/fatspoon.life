import React from 'react'

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

const IngredientCard = ({ingredient, increaseIngredient, decreaseIngredient, removeIngredient}) => {
	const {name, weight, category, id} = ingredient;
	const label = assignCategoryLabel(category);
	return (
		<div className={`ic-container ${label}`}>
			<div className={`ic-heading-label ${label}`}></div>
			<div className="ic-heading-container">
				<span className={`ic-heading ${label}`}>{name}</span>
			</div>
			<button className="ic-button remove"  onClick={() => removeIngredient(id)}>x</button>
			<span className="ic-weight">{weight >= 1000 ? `${weight / 1000} kg` : `${weight} g`}</span>
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

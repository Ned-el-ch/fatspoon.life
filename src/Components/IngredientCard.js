import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateIngredients, removeAnIngredient, editIngredient } from '../Actions/ingredients.js'
import { validateNumbers } from "../Concerns/validateInputs";

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

const IngredientCard = ({updateIngredients, removeAnIngredient, ingredient, editIngredient, removeIngredient}) => {
	const {name, weight, category, uuid} = ingredient;
	const label = assignCategoryLabel(category);
	const [initialWeight, setInitialWeight] = useState(weight);
	const [currentWeight, setCurrentWeight] = useState(weight);
	const [inputVisible, setInputVisible] = useState(false);
	useEffect(() => {
		setInitialWeight(weight)
	}, [weight])
	return (
		<div className={`ic-container ${label}`}>
			<div className={`ic-heading-label ${label}`}></div>
			<div className="ic-heading-container">
				<span className={`ic-heading ${label}`}>{name}</span>
			</div>
			<button className="ic-button remove"  onClick={() => removeAnIngredient(uuid, removeIngredient)}>✗</button>
			{inputVisible ?
				<div className="ic-weight-input-container">
					<div className="ic-weight-buttons-container">
						<button className="ic-button-save ic-button pos" onClick={() => {
							updateIngredients(ingredient, currentWeight, editIngredient);
							setInputVisible(false)
						}}>✓</button>
						<button className="ic-button-discard ic-button neg" onClick={() => {
							setCurrentWeight(initialWeight);
							setInputVisible(false);
						}}>✗</button>
					</div>
					<input 
						className="ic-weight-input"
						type="text"
						pattern="[0-9]*"
						inputMode="numeric"
						name="weight"
						autoFocus={true}
						value={currentWeight}
						onFocus={(event) => event.target.select()}
						// onBlur={() => {
						// 	setCurrentWeight(initialWeight);
						// 	setInputVisible(false);
						// }}
						onChange={(event) => {
							if (validateNumbers(event.target.value))
								setCurrentWeight(event.target.value)
							}
					}/><span className="ic-weight-input-suffix">g</span>

				</div>
			:
			<span className="ic-weight" onClick={() => setInputVisible(true)}>{weight >= 1000 ? `${weight / 1000} kg` : `${weight} g`}</span>
			}
			{/* <div className="ic-buttons-container">
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
			</div> */}
		</div>
	)
}

export default connect(null, { updateIngredients, removeAnIngredient, editIngredient })(IngredientCard);
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { updateIngredients, editIngredient } from '../Actions/ingredients'
import ShoppingListItem from './ShoppingListItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const initialState = (ingredients, mealPlan) => {
	let items = []
	// ITERATE OVER MEAL PLAN AND SELECT THE ONES FOR THE CURRENT WEEK ONLY
	// ITERATE OVER CURRENT MEALS AND IF
		// IF ITEM EXISTS IN items ADD TO ITS WEIGHT THE CURRENT RECIPE_INGREDIENT / SERVINGCOUNT * MULTIPLIER
		// IF IT DOESNT ADD A NEW ITEM TO items
	// ITERATE OVER ITEMS
		// TRY TO FIND IT IN ingredients
			// IF FOUND THEN SUBTRACT THAT INGREDIENT.WEIGHT FROM ITEM.WEIGHT
			// IF ITEM.WEIGHT < 0 REMOVE IT FROM ITEMS
	// RETURN items
	// debugger
	mealPlan.forEach(meal => {
		meal.recipe.recipe_ingredients.forEach(ri => {
			let ind = items.findIndex(e => e.uuid === ri.ingredient.uuid)
			if (ind > -1) {
				items[ind].weight += ri.weight;
			} else {
				let weight = Math.ceil((ri.weight / meal.recipe.servingCount) * meal.multiplier)
				items.push({uuid: ri.ingredient.uuid, weight, ingWeight: 0, name: ri.ingredient.name})
			}
		})
	});
	ingredients.forEach(ingredient => {
		let ind = items.findIndex(e => e.uuid === ingredient.uuid)
		if (ind > -1) {
			items[ind].weight -= ingredient.weight
			items[ind].ingWeight = ingredient.weight
		}
	})
	items = items.filter(item => item.weight > 0)
	return items;
}

const ShoppingList = ({ingredients, mealPlan, updateIngredients, editIngredient}) => {
	const [items, setItems] = useState([])

	useEffect(() => {
		setItems(initialState(ingredients, mealPlan))
	}, [setItems, ingredients, mealPlan])

	return (
		<div className="shopping-list-items-container">
			{items.length > 0 ?
			items.map(item => {
				return (
					<ShoppingListItem
						key={item.uuid}
						item={item}
						updateIngredients={updateIngredients}
						editIngredient={editIngredient}
					/>
				)
			})
			:
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} className="rf-remove-margin">
			<div className="mp-subheading-container"><span className="mp-subheading">All caught up for this week!</span></div>
			</Col>
			</Row>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
			ingredients: state.ingredients,
			mealPlan: state.mealPlan
		}
	)
}

export default connect(mapStateToProps, { updateIngredients, editIngredient })(ShoppingList);
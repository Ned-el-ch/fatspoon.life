import React, { useState } from 'react'
import PageHeader from '../Components/PageHeader.js';
import IngredientCard from '../Components/IngredientCard.js';
import AnimatedSelect from '../Components/AnimatedSelect.js';
import { connect } from 'react-redux'
import { removeIngredient } from '../Actions/ingredients'

const Fridge = ({ingredients, removeIngredient, increaseIngredient, decreaseIngredient}) => {

	const [filter, setFilter] = useState("")
	
	return (
		<div className="content fridge-container">
			<PageHeader title="My Fridge"/>
			<div className="content--inner">
				{/*
				CHECK IF THE USER HAS ANY INGREDIENTS IN THEIR FRIDGE, IF NOT RENDER
				"LOOKS LIKE YOU DON'T HAVE INGREDIENTS YET, WHAT WOULD YOU LIKE TO ADD?"
				*/}
				<AnimatedSelect/>
				<div className="fridge-ingredients-container">
					<div className="fridge-ingredients-filter">
					</div>
					<div className="fridge-ingredients">
						<div className="fridge-ingredients-filter-container">
							<span>Find by name: </span>
							<input
								type="text"
								// name="filter"
								value={filter}
								onChange={event => {
									event.preventDefault()
									setFilter(event.target.value)
								}}
							/>
						</div>
						{filter
						?
							ingredients.filter(e => e.name.toLowerCase().includes(filter.toLowerCase())).map(ingredient => {
								return(
									<IngredientCard
										key={ingredient.uuid}
										ingredient={ingredient}
										removeIngredient={removeIngredient}
									/>
								)
							})
						:
							ingredients.map(ingredient => {
								return(
									<IngredientCard
										key={ingredient.uuid}
										ingredient={ingredient}
										removeIngredient={removeIngredient}
									/>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return ({
		ingredients: state.ingredients
	})
};

export default connect(mapStateToProps, { removeIngredient })(Fridge);

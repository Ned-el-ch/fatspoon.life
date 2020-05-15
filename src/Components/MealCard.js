import React, { Fragment, useState } from 'react';
import { formatDate, compareToday } from '../Concerns/generateExtra'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux';
import { updateMultiplier, fetchUpdateMultiplier, removeFromMealPlan, fetchRemoveFromMealPlan } from "../Actions/mealPlan"
import { Link } from "react-router-dom"

const MealCard = ({ ingredients, meal, recipe, labels, link, user, updateMultiplier, fetchUpdateMultiplier, removeFromMealPlan, fetchRemoveFromMealPlan }) => {
	const [multiplier, setMultiplier] = useState(meal.multiplier)
	return (
		<Fragment>
		<div className="planned-date-container">
			<button className="mc-delete-meal" onClick={() => {
				fetchRemoveFromMealPlan(removeFromMealPlan, meal.id)
			}}>Delete</button>
			<span className="mc-subheading">{formatDate(meal.planned_date)}</span>
		</div>
		<div className="mc-container">
			<Row>
			<Col xs={12} sm={12} md={12} lg={12} className="rf-remove-margin">
				<div className="mc-recipe-heading-container">
					<span className="mc-recipe-heading">
					<Link to={link}>{recipe.title}</Link>
					</span>
				</div>
			</Col>
			</Row>
			<Row>
			<Col xs={12} sm={12} md={{ span: 5}} lg={{ span: 5}} className="rf-remove-margin">
				<img className="mc-image" src={recipe.imageLink} alt=""/>
			</Col>
			<Col xs={12} sm={12} md={{ span: 6, offset: 1}} lg={{ span: 6, offset: 1}} className="rf-remove-margin">
			<div className="mc-servings-container">
				<span className="mc-servings-label mc-subheading">Ingredients & Servings: {multiplier}</span>
				<button className="rp-servings-button pos" onClick={() => {
					setMultiplier(multiplier + 1)
					fetchUpdateMultiplier(updateMultiplier, meal.id, multiplier + 1)
				}}>▲</button>
				<button className="rp-servings-button neg" onClick={() => {
					if (multiplier > 1) {
						setMultiplier(multiplier - 1)
						fetchUpdateMultiplier(updateMultiplier, meal.id, multiplier - 1)
					}
				}}>▼</button>
			</div>
			<div className="rp-ul-container">
						<ul className="rp-ul rp-ingredients-left-ul">
						{recipe.recipe_ingredients && recipe.recipe_ingredients
							.filter((el, index) => index === 0 || index % 2 === 0)
							.map(item => {
								let ingredientAvailable = false;
								let newWeight = Math.ceil((item.weight / recipe.servingCount) * multiplier)
								if (user){
									ingredientAvailable = ingredients.find(e => e.weight >= newWeight && e.uuid === item.ingredient.uuid)
								}
								return(
								<li key={item.ingredient.uuid} className={ingredientAvailable ? "available" : user ? "not-available" : ""}>
									<span className="rp-li-weight">
									{newWeight}
									</span> g {item.ingredient.name}</li>)
						})}
						</ul>
						<ul className="rp-ul rp-ingredients-right-ul">
						{recipe.recipe_ingredients && recipe.recipe_ingredients
							.filter((el, index) => index !== 0 && index % 2 !== 0)
							.map(item => {
								let ingredientAvailable = false;
								let newWeight = Math.ceil((item.weight / recipe.servingCount) * multiplier)
								if (user){
									ingredientAvailable = ingredients.find(e => e.weight >= newWeight && e.uuid === item.ingredient.uuid)
								}
								return(
								<li key={item.ingredient.uuid} className={ingredientAvailable ? "available" : user ? "not-available" : ""}>
									<span className="rp-li-weight">
									{newWeight}
									</span> g {item.ingredient.name}</li>)
						})}
						</ul>
					</div>
			</Col>
			</Row>
			{compareToday(meal.planned_date) ?
				<Row>
			<Col xs={12} sm={12} md={12} lg={12} className="rf-remove-margin">
			<span className="mc-subheading">Instructions</span>
			<ol className="mc-instructions-ol">
						{recipe.instructions && recipe.instructions
							.split("|||")
							.map((item, index) => {
							return (<li key={index}>{item}</li>)
						})}
					</ol>
			</Col>
			</Row>
			:
			null
			}
		</div>
		</Fragment>
	)
}

export default connect(null, { updateMultiplier, fetchUpdateMultiplier, removeFromMealPlan, fetchRemoveFromMealPlan })(MealCard);

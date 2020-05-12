import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { formatDate } from '../Concerns/generateExtra'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MealCard = ({ meal, recipe, labels, link, user }) => {
	const [multiplier, setMultiplier] = useState(meal.multiplier)

	return (
		<Fragment>
		<div className="planned-date-container">
			<span className="mc-subheading">{formatDate(meal.planned_date)}</span>
		</div>
		<div className="mc-container">
			<Row>
			<Col xs={12} sm={12} md={12} lg={12} className="rf-remove-margin">
				<div className="mc-recipe-heading-container">
					<span className="mc-recipe-heading">
						{recipe.title}
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
				}}>▲</button>
				<button className="rp-servings-button neg" onClick={() => {
					if (multiplier > 1)
						setMultiplier(multiplier - 1)
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
									ingredientAvailable = user.user_ingredients.find(e => e.weight >= newWeight && e.ingredient.uuid === item.ingredient.uuid)
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
									ingredientAvailable = user.user_ingredients.find(e => e.weight >= newWeight && e.ingredient.uuid === item.ingredient.uuid)
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
			{/* <div className="mc-title-container">
				<Link to={link}>
					<span className="mc-title">{recipe.title}</span>
				</Link>
			<div className="mc-labels-container">
				<div className="mc-labels-missing-items">
					{labels.missingIngredients === 0 ?
					<span className="mc-labels-missing-items-none label">Got everything!</span>
					:
					<span className="mc-labels-missing-items-some label">Few missing items!</span>
					}
				</div>
					{labels.vegetarian ?
					<span className="mc-labels-vegetarian label">Vegetarian</span>
					:
					null
					}
			</div>
			</div>
			<div className="mc-description-container">
				<span className="mc-description">{recipe.description}</span>
			</div>
			<div className="mc-servings-and-times-container">
				<div>Prep Time: {recipe.prepTime} mins</div>
				<div>Cook Time: {recipe.cookingTime} mins</div>
				<div>Serves: {recipe.servingCount}</div>
			</div> */}
		</div>
		</Fragment>
	)
}

export default MealCard;

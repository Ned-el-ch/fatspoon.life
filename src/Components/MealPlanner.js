import React, { useState, useEffect } from 'react'
import PageHeader from './PageHeader'
import MealCard from '../Components/MealCard'
import { connect } from 'react-redux'
import { generateLink, createLabels, formatWeek } from '../Concerns/generateExtra'
import moment from 'moment'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";

const filterMeals = (meals, startDate, endDate) => {
	return meals.filter(meal => startDate.isBefore(meal.planned_date) && endDate.isAfter(meal.planned_date))
}

const generateMealCards = (mealPlan, startingIngredients, user) => {
	// debugger
	const ingredients = startingIngredients.map(e => Object.assign({}, e))
	const meals = mealPlan.map(e => Object.assign({}, e))
	// debugger
	return (
		meals.map(meal => {
			let currentIngredients = ingredients.map(e => Object.assign({}, e))
			let ris = meal.recipe.recipe_ingredients;
			ris.forEach(ri => {
				let index = ingredients.findIndex(e => e.uuid === ri.ingredient.uuid)
				if (index > -1) {
					ingredients[index].weight -= Math.ceil((ri.weight / meal.recipe.servingCount) * meal.multiplier)
					// if (ingredients[index].weight < 0) ingredients[index].weight = 0
				}
			});
			// debugger
			return (
				<MealCard
					key={meal.id}
					meal={meal}
					recipe={meal.recipe}
					labels={createLabels(meal.recipe, ingredients)}
					link={generateLink(meal.recipe)}
					user={user}
					ingredients={currentIngredients}
				/>
			)
		})
	)
}

const initialState = {
	start: moment(),
	beginWeek: moment().startOf('week').add(1, 'day'),
	endWeek: moment().endOf('week').add(1, 'day')
}

let remainingIngredients = []

const MealPlanner = ({ingredients, meals, user}) => {
	const [startingWeek] = useState(initialState.start)
	const [beginningOfCurrentWeek, setBeginningOfCurrentWeek] = useState(initialState.beginWeek)
	const [endOfCurrentWeek, setEndOfCurrentWeek] = useState(initialState.endWeek)

	// useEffect(() => {
	// 	setRemainingIngredients(ingredients)
	// 	setCurrentIngredients(ingredients)
	// }, [ingredients, setRemainingIngredients, setCurrentIngredients])

	return (
		<div className="content meal-planner-container">
			<PageHeader title="My Meal Planner"/>
			<div className="mp-week-of-container">
				<span className="rp-subheading">{formatWeek(beginningOfCurrentWeek.format(), endOfCurrentWeek.format())}</span>
			</div>
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1 }} className="rf-remove-margin">
				<div className="mp-week-button-container">
					<button onClick={(event) => {
						setBeginningOfCurrentWeek(beginningOfCurrentWeek.clone().subtract(7, 'day'))
						setEndOfCurrentWeek(endOfCurrentWeek.clone().subtract(7, 'day'))
					}}
					className="mp-week-button previous">Previous Week</button>
					<button onClick={() => {
						setBeginningOfCurrentWeek(startingWeek.clone().startOf('week').add(1, 'day'))
						setEndOfCurrentWeek(startingWeek.clone().endOf('week').add(1, 'day'))
					}}
					className="mp-week-button current">Current Week</button>
					<button onClick={() => {
						setBeginningOfCurrentWeek(beginningOfCurrentWeek.clone().add(1, 'week'))
						setEndOfCurrentWeek(endOfCurrentWeek.clone().add(1, 'week'))
					}}
					className="mp-week-button next">Next Week</button>
				</div>
			</Col>
			</Row>
			<div className="content--inner">
				{filterMeals(meals, beginningOfCurrentWeek, endOfCurrentWeek).length > 0 ?
				generateMealCards(filterMeals(meals, beginningOfCurrentWeek, endOfCurrentWeek), ingredients, user)
				
				:
				<Row>
				<Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} className="rf-remove-margin">
				<div className="mp-subheading-container"><span className="mp-subheading">You don't have any meals planned for this week!</span></div>
				<div className="mp-subheading-container"><span className="mp-subheading">Head over to your <Link to="/MyCookbook">Cookbook</Link> to add some!</span></div>
				</Col>
				</Row>
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
			user: state.user,
			meals: state.mealPlan,
			ingredients: state.ingredients
		}
	)
}

export default connect(mapStateToProps)(MealPlanner);
import React, { useState } from 'react'
import PageHeader from './PageHeader'
import MealCard from '../Components/MealCard'
import { connect } from 'react-redux'
import { fetchRemoveFromMealPlan } from "../Actions/mealPlan"
import { generateLink, createLabels, formatWeek } from '../Concerns/generateExtra'
import moment from 'moment'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const filterMeals = (meals, startDate, endDate) => {
	// debugger
	return meals.filter(meal => startDate.isBefore(meal.planned_date) && endDate.isAfter(meal.planned_date))
}

const initialState = {
	start: moment(),
	beginWeek: moment().startOf('week').add(1, 'day'),
	endWeek: moment().endOf('week').add(1, 'day')
}

const MealPlanner = ({ingredients, meals, fetchRemoveFromMealPlan, user}) => {
	const [startingWeek, setStartingWeek] = useState(initialState.start)
	const [beginningOfCurrentWeek, setBeginningOfCurrentWeek] = useState(initialState.beginWeek)
	const [endOfCurrentWeek, setEndOfCurrentWeek] = useState(initialState.endWeek)
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
				{filterMeals(meals, beginningOfCurrentWeek, endOfCurrentWeek).map(meal => {
					return (
						<MealCard
							key={meal.id}
							meal={meal}
							recipe={meal.recipe}
							labels={createLabels(meal.recipe, ingredients)}
							link={generateLink(meal.recipe)}
							user={user}
						/>
					)
				})
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

export default connect(mapStateToProps, { fetchRemoveFromMealPlan })(MealPlanner);
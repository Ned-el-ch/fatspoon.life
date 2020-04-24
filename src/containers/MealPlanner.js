import React, { Component } from 'react'
import { PageHeader } from '../components/PageHeader'

export default class MealPlanner extends Component {
	render() {
		return (
			<div className="meal-planner-container">
				<PageHeader title="My Meal Planner"/>
			</div>
		)
	}
}
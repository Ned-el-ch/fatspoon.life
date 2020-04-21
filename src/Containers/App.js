import React, { Component } from 'react'
import RecipeForm from '../components/RecipeForm'
import Recipes from './Recipes'

export default class App extends Component {
	render() {
		return (
			<div>
				<RecipeForm />
				<Recipes />
			</div>
		)
	}
}
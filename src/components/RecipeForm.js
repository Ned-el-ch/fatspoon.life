// import React, { Component } from 'react';
// import { v4 as uuid } from 'uuid';


// class RecipeForm extends Component {

// 	state={
// 		name: "",
// 		description: ""
// 	}

// 	handleOnChange = (event) => {
// 		const { value, name } = event.target;
// 		this.setState({
// 			[name]: value
// 		});
// 	}

// 	handleOnSubmit = (event) => {
// 		event.preventDefault();
// 		let recipe = {...this.state, id: uuid()};
// 		this.props.addRecipe(recipe);
// 		this.setState({
// 			name: "",
// 			description: ""
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-md-8 col-md-offset-2">
// 						<div className="panel panel-default">
// 							<div className="panel-body">
// 								<form className="form-horizontal" onSubmit={this.handleOnSubmit}>
// 									<div className="form-group">
// 										<label htmlFor="name" className="col-md-4 control-label">Name</label>
// 										<div className="col-md-5">
// 											<input
// 												className="form-control"
// 												type="text"
// 												name="name"
// 												value={this.state.name}
// 												onChange={this.handleOnChange}
// 											/>
// 										</div>
// 									</div>
// 									<div className="form-group">
// 										<label htmlFor="description" className="col-md-4 control-label">Description</label>
// 										<div className="col-md-5">
// 											<textarea
// 												className="form-control"
// 												name="description"
// 												value={this.state.description}
// 												onChange={this.handleOnChange}
// 											/>
// 										</div>
// 									</div>
// 									<div className="form-group">
// 										<div className="col-md-6 col-md-offset-4">
// 											<button type="submit" className="btn btn-default">Add</button>
// 										</div>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default connect(null, { addRecipe })(RecipeForm);

import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';

const initialState = () => {
	return (
		{
			recipe: null
		}
	)
}

const RecipeForm = () => {
	const [state, updateRecipe] = useState(initialState);
	return (
		<div className="recipe-form-container">
			{ 
			state.recipe
			?
			<div>
				<span>u should render the form here </span>
			</div>
			:
			<div>
				<button className="rf-new-recipe-button">
					Add a new recipe!
				</button>
			</div>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
			ingredients: state.search.ingredients
		}
	)
}

export default connect(mapStateToProps, { addRecipe })(RecipeForm);
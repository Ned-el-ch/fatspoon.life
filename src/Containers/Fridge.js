import React, { useState } from 'react'
import PageHeader from '../Components/PageHeader.js';
import IngredientCard from '../Components/IngredientCard.js';
import AnimatedSelect from '../Components/AnimatedSelect.js';
import { connect } from 'react-redux'
import { removeIngredient } from '../Actions/ingredients'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

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
				<Row>
				<Col xs={12} sm={12} md={12} lg={12} className="rf-remove-margin">
					<AnimatedSelect/>
				</Col>
				</Row>
				<div className="fridge-ingredients-container">
					<div className="fridge-ingredients">
					<Row>
					<Col xs={12} sm={12} md={{span: 10, offset: 1}} lg={{span: 10, offset: 1}} className="rf-remove-margin">
						<div className="fridge-ingredients-filter-container">
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroup-sizing-lg">Find by</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="ingredient name"
								aria-label="title"
								aria-describedby="inputGroup-sizing-lg"
								value={filter}
								maxLength={25}
								onChange={event => {
									event.preventDefault()
									setFilter(event.target.value)
								}}
							/>
						</InputGroup>
						</div>
					</Col>
					</Row>
						{!filter
						?
						ingredients.map(ingredient => {
							return(
								<IngredientCard
									key={ingredient.uuid}
									ingredient={ingredient}
									removeIngredient={removeIngredient}
								/>
							)
						})
						:
							ingredients.filter(e => e.name.toLowerCase().includes(filter.toLowerCase())).length > 0 
							?
							ingredients.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
							.map(ingredient => {
								return(
									<IngredientCard
										key={ingredient.uuid}
										ingredient={ingredient}
										removeIngredient={removeIngredient}
									/>
								)
							})
							:
							<div className="mp-subheading-container"><span className="mp-subheading">Item not found! Try adding it first!</span></div>
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

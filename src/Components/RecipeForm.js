import React, { useState } from 'react'
import IngredientSelect from './IngredientSelect'
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";
import { getIngredientsForSelect } from "../Concerns/getIngredientsForSelect";
import uuid from 'react-uuid'

const initialInfo = {
	title: "",
	description: "",
	imageLink: "",
	prepTime: "",
	cookingTime: "",
	servingCount: ""
}

const initialCookingData = {
	instructions: [],
	ingredients: []
}

// const validateLink = link => {
// 	let regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/
// 	return link.match(regex);
// }

const validateNumbers = str => {
	let regex = /^[1-9]\d*(\.\d+)?$/;
	return str.match(regex) || str === "";
}

const RecipeForm = ({ handleRecipe, closeRecipe }) => {
	const [info, setInfo] = useState(initialInfo);
	const [cookingData, setCookingData] = useState(initialCookingData);
	return (
		<div className="recipe-form">
			<div className="rf-main-info">
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
			<button onClick={closeRecipe} className="rf-close-form-button">x</button>
			</Col>
			</Row>
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				<span className="rf-ingredients-list-heading">At a glance</span>
			</Col>
			</Row>
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg">Title</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Get Creative!"
						aria-label="title"
						aria-describedby="inputGroup-sizing-lg"
						value={info.title}
						onChange={(event) => setInfo(Object.assign({}, info, {title: event.target.value}))}
					/>
				</InputGroup>
			</Col>
			</Row>
			<Row>
			<Col xs={12} sm={12} md={{ span: 5, offset: 1}} lg={{ span: 5, offset: 1}} className="rf-remove-margin">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg"><span role="img" aria-label="emoji">🖼️</span></InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Recipe image URL goes here"
						aria-label="main image"
						aria-describedby="inputGroup-sizing-lg"
						value={info.imageLink}
						onChange={(event) => setInfo(Object.assign({}, info, {imageLink: event.target.value}))}
					/>
				</InputGroup>
			</Col>
			<Col xs={12} sm={12} md={{ span: 5}} lg={{ span: 5}} className="rf-remove-margin">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg">Servings</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Feeds this many"
						aria-label="title"
						aria-describedby="inputGroup-sizing-lg"
						value={info.servingCount}
						onChange={(event) => {
							if (validateNumbers(event.target.value))
								setInfo(Object.assign({}, info, {servingCount: event.target.value}))
						}}
					/>
				</InputGroup>
			</Col>
			</Row>
			<Row>
			<Col xs={12} sm={12} md={{ span: 5, offset: 1}} lg={{ span: 5, offset: 1}} className="rf-remove-margin">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg">Prep Time (mins)</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Slicing n' dicing"
						aria-label="title"
						aria-describedby="inputGroup-sizing-lg"
						value={info.prepTime}
						onChange={(event) => {
							if (validateNumbers(event.target.value))
								setInfo(Object.assign({}, info, {prepTime: event.target.value}))
						}}
					/>
				</InputGroup>
			</Col>
			<Col xs={12} sm={12} md={{ span: 5}} lg={{ span: 5}} className="rf-remove-margin">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg">Cooking Time (mins)</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Frying n' crying"
						aria-label="title"
						aria-describedby="inputGroup-sizing-lg"
						value={info.cookingTime}
						onChange={(event) => {
							if (validateNumbers(event.target.value))
								setInfo(Object.assign({}, info, {cookingTime: event.target.value}))
					}}
					/>
				</InputGroup>
			</Col>
			</Row>
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				<InputGroup>
					<FormControl
						as="textarea"
						placeholder="Give your recipe a good (short) description"
						aria-label="Description"
						maxLength={155}
						style={{height: "100px", maxHeight: "100px", minHeight: "100px", resize: "none"}}
						value={info.description}
						onChange={(event) => setInfo(Object.assign({}, info, {description: event.target.value}))}
					/>
					<span className="rf-description-remaining-characters">{155 - info.description.length} characters remaining</span>
					<InputGroup.Append>
						<InputGroup.Text>Description</InputGroup.Text>
					</InputGroup.Append>
				</InputGroup>
			</Col>
			</Row>
			</div>
			<div className="rf-ingredients-container">
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				<span className="rf-ingredients-list-heading">Ingredients List</span>
			</Col>
			</Row>
			{cookingData.ingredients.map(item => {
				return (
					<Row key={item.id}>
						<Col xs={6} sm={6} md={{ span: 6, offset: 1 }} className="rf-remove-margin">
							<IngredientSelect
								ingredients={getIngredientsForSelect()}
								defaultOptionIndex={null}
								handleOnChange={(toAdd) => {
									// debugger
									const ind = cookingData.ingredients.findIndex(i => i.id === item.id);
									const obj = Object.assign({}, cookingData.ingredients[ind], {ingredient: toAdd.ingredient})
									setCookingData({
										ingredients: [...cookingData.ingredients.slice(0, ind),
														obj,
														...cookingData.ingredients.slice(ind + 1)],
										instructions: cookingData.instructions
									})
								}}
							/>
						</Col>
						<Col xs={4} sm={4} md={{ span: 2}} className="rf-remove-margin">
							<InputGroup className="mb-3">
								
								<FormControl
									placeholder="Weight"
									aria-label="ingredient weight"
									aria-describedby="inputGroup-sizing-lg"
									value={item.weight}
									onChange={(event) => {
										if (validateNumbers(event.target.value)) {
											const ind = cookingData.ingredients.findIndex(i => i.id === item.id);
											const obj = Object.assign({}, cookingData.ingredients[ind], {weight: event.target.value})
											setCookingData({
												ingredients: [...cookingData.ingredients.slice(0, ind),
																obj,
																...cookingData.ingredients.slice(ind + 1)],
												instructions: cookingData.instructions
											})
										}
									}}
								/>
								<InputGroup.Append>
									<InputGroup.Text id="inputGroup-sizing-lg">g</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</Col>
						<Col xs={2} sm={2} md={{ span: 2}} className="rf-remove-margin">
							<button
								className="rf-remove-ingredient"
								onClick={() => {
									setCookingData({
										ingredients: cookingData.ingredients.filter(i => i.id !== item.id),
										instructions: cookingData.instructions
									})
								}}
							>Remove</button>
						</Col>
					</Row>
				)
			})}
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1 }} className="rf-remove-margin">
				<button
					className="rf-new-ingredient-button"
					onClick={() => setCookingData({
						ingredients: [...cookingData.ingredients, {id: uuid(), weight: null}],
						instructions: cookingData.instructions
					})}
				>+</button>
			</Col>
			</Row>
			</div>
			<div className="rf-instructions-container">
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				<span className="rf-cooking-instructions-heading">Cooking Instructions</span>
			</Col>
			</Row>
			{cookingData.instructions.map((item, index) => {
				return (
					<Row key={item.id} className="rf-instructions-row">
					<Col xs={10} sm={10} md={{ span: 8, offset: 1}} lg={{ span: 8, offset: 1}} className="rf-remove-margin">
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>{index + 1}.</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								as="textarea"
								placeholder="What's next, chef?"
								aria-label="instruction"
								maxLength={225}
								style={{height: "140px", maxHeight: "140px", minHeight: "140px", resize: "none"}}
								value={item.text}
								onChange={(event) => {
									const ind = cookingData.instructions.findIndex(i => i.id === item.id);
									const obj = Object.assign({}, cookingData.instructions[ind], {text: event.target.value})
									setCookingData({
										ingredients: cookingData.ingredients,
										instructions: [
											...cookingData.instructions.slice(0, ind),
											obj,
											...cookingData.instructions.slice(ind + 1)
										]
									})
								}}
							/>
						</InputGroup>
					<span className="rf-instructions-remaining-characters">{225 - item.text.length} characters remaining</span>

					</Col>

					<Col xs={2} sm={2} md={{ span: 2}} className="rf-remove-margin">
							<button
								className="rf-remove-instruction"
								onClick={() => {
									setCookingData({
										ingredients: cookingData.ingredients,
										instructions: cookingData.instructions.filter(i => i.id !== item.id)
									})
								}}
							>Remove</button>
						</Col>
					</Row>
				)
			})}
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1 }} className="rf-remove-margin">
				<button
					className="rf-new-instruction-button"
					onClick={() => setCookingData({
						ingredients: cookingData.ingredients,
						instructions: [...cookingData.instructions, {id: uuid(), text: ""}]
					})}
				>+</button>
			</Col>
			</Row>
			</div>
			<button onClick={() => {
				let ingredients = cookingData.ingredients.map(i => {
					return {id: i.ingredient.id, weight: i.weight}
				});
				let recipe = {id: uuid(), info, ingredients, instructions: cookingData.instructions}
				handleRecipe(recipe);
			}}>
				Add Recipe
			</button>
		</div>
	)
}

export default RecipeForm;
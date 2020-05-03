import React, { useState } from 'react'
import IngredientSelect from './IngredientSelect'
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";
import { getIngredientsForSelect } from "../Concerns/getIngredientsForSelect";
import uuid from 'react-uuid'

const initialDescription = {
	text: ""
}

const initialImageLink = {
	text: ""
}

const initialRecipeIngredients = {
	items: [
		{
			id: uuid()
		}
	]
}

const validateLink = link => {
	let regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/
	return link.match(regex);
}

const RecipeForm = () => {
	const [description, setDescription] = useState(initialDescription);
	const [imgLink, setImgLink] = useState(initialImageLink);
	const [recipeIngredients, setRecipeIngredients] = useState(initialRecipeIngredients);
	return (
		<div className="recipe-form">
			<Row>
			<Col xs={12} sm={12} md={4} lg={{ span: 4}} className="rf-remove-margin">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg"><span role="img" aria-label="emoji">🖼️</span></InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Recipe image URL goes here"
						aria-label="main image"
						aria-describedby="inputGroup-sizing-lg"
						value={imgLink.text}
						onChange={(event) => setImgLink({text: event.target.value})}
					/>
				</InputGroup>
			</Col>
			<Col xs={12} sm={12} md={8} lg={{ span: 8}} className="rf-remove-margin">
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg">Title</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Get Creative!"
						aria-label="title"
						aria-describedby="inputGroup-sizing-lg"
					/>
				</InputGroup>
			</Col>
			</Row>
			<Row>
			<Col xs sm md={{ span: 8, offset: 4 }} className="rf-remove-margin">
				<InputGroup>
					<FormControl
						as="textarea"
						placeholder="Give your recipe a good (short) description"
						aria-label="Description"
						maxLength={150}
						style={{height: "100px", maxHeight: "100px", minHeight: "100px", resize: "none"}}
						value={description.text}
						onChange={(event) => setDescription({text: event.target.value})}
					/>
					<span className="rf-description-remaining-characters">{150 - description.text.length} characters remaining</span>
					<InputGroup.Append>
						<InputGroup.Text>Description</InputGroup.Text>
					</InputGroup.Append>
				</InputGroup>
			</Col>
			</Row>
			{recipeIngredients.items.map((item) => {
				return (
					<Row>
						<Col xs={6} sm={6} md={{ span: 5, offset: 4 }} className="rf-remove-margin">
							<IngredientSelect ingredients={getIngredientsForSelect()} defaultOptionIndex={null}/>
						</Col>
						<Col xs={4} sm={4} md={{ span: 2}} className="rf-remove-margin">
							<InputGroup className="mb-3">
								
								<FormControl
									placeholder="Weight"
									aria-label="ingredient weight"
									aria-describedby="inputGroup-sizing-lg"
									value={imgLink.text}
									onChange={(event) => setImgLink({text: event.target.value})}
								/>
								<InputGroup.Append>
									<InputGroup.Text id="inputGroup-sizing-lg">g</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</Col>
						<Col xs={2} sm={2} md={{ span: 1}} className="rf-remove-margin">
							<button
								className="rf-remove-ingredient"
								onClick={() => {
									setRecipeIngredients({items: recipeIngredients.items.filter(i => i.id !== item.id)})
								}}
							>Remove</button>
						</Col>
					</Row>
				)
			})}
			<Row>
			<Col xs sm md={{ span: 8, offset: 4 }} className="rf-remove-margin">
				<button
					className="rf-new-ingredient-button"
					onClick={() => setRecipeIngredients({items: [...recipeIngredients.items, {id: uuid()}]})}
				>+</button>
			</Col>
			</Row>
		</div>
	)
}

export default RecipeForm;
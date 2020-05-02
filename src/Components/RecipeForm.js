import React, { useState } from 'react'
import IngredientSelect from './IngredientSelect'
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";

const initialDescription = {
	text: ""
}

const RecipeForm = () => {
	const [description, setDescription] = useState(initialDescription)
	return (
		<div className="recipe-form">
			<Row>
			<Col xs={12} sm={12} md={4} lg={{ span: 4}}>
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-lg"><span role="img" aria-label="emoji">🖼️</span></InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Recipe image URL goes here"
						aria-label="main image"
						aria-describedby="inputGroup-sizing-lg"
					/>
				</InputGroup>
			</Col>
			<Col xs={12} sm={12} md={8} lg={{ span: 8}}>
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
			<Row className="align-self-start justify-content-center">
			<Col xs sm md={{ span: 8, offset: 4 }}>
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

			{/* <IngredientSelect /> */}
		</div>
	)
}

export default RecipeForm;
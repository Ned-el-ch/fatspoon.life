import React from 'react'
import IngredientSelect from './IngredientSelect'
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";

const RecipeForm = () => {
	return (
		<div className="recipe-form">
			<Row className="align-self-start justify-content-center">
			<Col xs sm md={{ span: 8, offset: 4 }}>
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
					<InputGroup.Prepend>
						<InputGroup.Text>Description</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl as="textarea" aria-label="Description" />
				</InputGroup>
			</Col>
			</Row>

			{/* <IngredientSelect /> */}
		</div>
	)
}

export default RecipeForm;
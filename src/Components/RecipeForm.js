import React from 'react'
import IngredientSelect from './IngredientSelect'
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";

const RecipeForm = () => {
	return (
		<div className="recipe-form">
			<Row className="align-self-start justify-content-right">
			<Col xs sm md lg xl={8} className="col-xxl">
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

			{/* <IngredientSelect /> */}
		</div>
	)
}

export default RecipeForm;
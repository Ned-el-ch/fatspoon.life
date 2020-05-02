import React from 'react'
import IngredientSelect from './IngredientSelect'
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";

const RecipeForm = () => {
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
					<FormControl as="textarea" aria-label="Description" maxLength={220} style={{height: "140px", maxHeight: "140px", minHeight: "140px", resize: "none"}}/>
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
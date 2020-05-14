import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { validateNumbers } from '../Concerns/validateInputs'

const ShoppingListItem = ({item, updateIngredients, editIngredient}) => {

	const { name, weight, ingWeight, uuid } = item
	const [postWeight, setPostWeight] = useState(weight)
	const [initialWeight, setInitialWeight] = useState(weight);
	const [currentWeight, setCurrentWeight] = useState(weight);
	const [inputVisible, setInputVisible] = useState(false);
	const [clickable, setClickable] = useState(true);

	useEffect(() => {
		setCurrentWeight(weight)
		setInitialWeight(weight)
		setPostWeight(weight)
	}, [weight])

	return (
		<div>
			<Row>
			<Col xs={2} sm={2} md={2} lg={2} className="rf-remove-margin">
				<button className="sli-add-ingredient" onClick={() => {
					updateIngredients({uuid}, parseInt(postWeight) + parseInt(ingWeight), editIngredient)
				}}>
					Done
				</button>
			</Col>
			<Col xs={10} sm={10} md={10} lg={10} className="rf-remove-margin">
				<div className={`sli-name-container ${clickable ? "point" : ""}`} onClick={() => {
					if (clickable) {
						setInputVisible(true)
						setClickable(false)
					}
				}}><span className="sli-name">{name}</span></div>
			{inputVisible ?
				<div className="sli-weight-input-container">
					<div className="sli-weight-buttons-container">
						<button className="sli-button-save sli-button pos" onClick={() => {
							setPostWeight(currentWeight);
							setInitialWeight(currentWeight)
							setClickable(true)
							setInputVisible(false)
						}}>✓</button>
						<button className="sli-button-discard sli-button neg" onClick={() => {
							setCurrentWeight(initialWeight);
							setClickable(true)
							setInputVisible(false);
						}}>✗</button>
					</div>
					<form onSubmit={(event) => {
						event.preventDefault()
						setPostWeight(currentWeight)
						setInitialWeight(currentWeight)
						setClickable(true)
						setInputVisible(false)
					}}>
						<input 
							className="sli-weight-input"
							type="tel"
							pattern="[0-9]*"
							inputMode="numeric"
							name="weight"
							autoFocus={true}
							value={currentWeight}
							onFocus={(event) => event.target.select()}
							onChange={(event) => {
								if (validateNumbers(event.target.value))
									setCurrentWeight(event.target.value)
							}
						}/>
					</form>
					<span className="sli-weight-input-suffix">g</span>

				</div>
			:
			<span className="sli-weight" onClick={() => {
				if (clickable) {
					setInputVisible(true)
					setClickable(false)
				}
			}}
			>{postWeight >= 1000 ? `${postWeight / 1000} kg` : `${postWeight} g`}</span>
			}
			</Col>
			</Row>
		</div>
	)
}

export default ShoppingListItem
import React, { useEffect, useState, Fragment } from 'react'
import PageHeader from '../Components/PageHeader'
import { useLocation, withRouter } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'

const RecipePage = () => {
	const [recipe, setRecipe] = useState(null)
	let leftList = [];
	let rightList = [];

	useEffect(() => {
		let location = window.location.href.split("-")
		const uuid = location[location.length - 1]

		fetch(`https://calm-brook-68370.herokuapp.com/recipes/${uuid}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		}).then(res => res.json()).then(setRecipe)
	}, [])
	return (
		<div className="content">
			{recipe ?
			<Fragment>
				<PageHeader title={recipe.title}/>
				<div className="content--inner">
				<Row>
				<Col xs={12} sm={12} md={{ span: 5, offset: 1}} lg={{ span: 5, offset: 1}} className="rf-remove-margin">
					<img className="rp-image" src={recipe.imageLink} alt=""/>
				</Col>
				<Col xs={12} sm={12} md={{ span: 5, offset: 1}} lg={{ span: 5, offset: 1}} className="rf-remove-margin">
					<div className="rp-subheading-container">
						<span className="rp-subheading">What to expect</span>
					</div>
					<span className="rp-description">{recipe.description}</span>
					{recipe.recipe_ingredients.map((item, index) => {
						if (index === 0 || index % 2 === 0) {
							leftList.push(<li key={item.ingredient.uuid}><span className="rp-li-weight">{item.weight}g</span> {item.ingredient.name}</li>)
						} else {
							rightList.push(<li key={item.ingredient.uuid}><span className="rp-li-weight">{item.weight}g</span> {item.ingredient.name}</li>)
						}
					}
					)}
					<div className="rp-subheading-container">
						<span className="rp-subheading">Ingredients</span>
					</div>
					<div className="rp-ul-container">
						<ul className="rp-ul rp-ingredients-left-ul">
							{leftList}
						</ul>
						<ul className="rp-ul rp-ingredients-right-ul">
							{rightList}
						</ul>
					</div>
				</Col>
				<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
					<div className="rp-subheading-container">
						<span className="rp-subheading">Instructions</span>
					</div>
					<ol className="rp-instructions-ol">
						{recipe.instructions.split("|||").map((item, index) => {
							return (<li key={index}>{item}</li>)
						})}
					</ol>
				</Col>
				</Row>
				</div>
			</Fragment>
			:
			null
			}
		</div>
	)
}

export default withRouter(connect(null)(RecipePage))
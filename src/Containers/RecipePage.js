import React, { useEffect, useState, Fragment } from 'react'
import PageHeader from '../Components/PageHeader'
// import { withRouter } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { connect } from 'react-redux'

const RecipePage = () => {
	const [recipe, setRecipe] = useState(null)

	useEffect(() => {
		(async function () {
			try {
				let location = window.location.href.split("-")
				let uuid = location[location.length - 1]
				await fetch(`https://calm-brook-68370.herokuapp.com/recipes/${uuid}`, {
					method: "GET",
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					}
				})
					.then(res => res.json())
					.then(data => {
						if (data.message) {
							console.log(data.message)
						} else {
							setRecipe(data)
						}
					})
			} catch (e) {
				console.log(e)
			}
		})()
	}, [setRecipe])
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
					<div className="rp-subheading-container">
						<span className="rp-subheading">Ingredients</span>
					</div>
					<div className="rp-ul-container">
						<ul className="rp-ul rp-ingredients-left-ul">
						{recipe.recipe_ingredients
							.filter((el, index) => index === 0 || index % 2 === 0)
							.map(item => {
								return(<li key={item.ingredient.uuid}><span className="rp-li-weight">{item.weight}g</span> {item.ingredient.name}</li>)
						})}
						</ul>
						<ul className="rp-ul rp-ingredients-right-ul">
						{recipe.recipe_ingredients
							.filter((el, index) => index !== 0 && index % 2 !== 0)
							.map(item => {
								return(<li key={item.ingredient.uuid}><span className="rp-li-weight">{item.weight}g</span> {item.ingredient.name}</li>)
						})}
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

export default RecipePage
// export default withRouter(connect(null)(RecipePage))
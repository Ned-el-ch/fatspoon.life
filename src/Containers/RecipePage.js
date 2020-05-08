import React, { useEffect, useState, Fragment } from 'react'
import PageHeader from '../Components/PageHeader'
import { useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const RecipePage = () => {
	const location = useLocation().pathname.split("-")
	const uuid = location[location.length - 1]
	const [recipe, setRecipe] = useState(null)
	useEffect(() => {
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
				<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
					<img className="rp-image" src={recipe.imageLink} alt=""/>
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
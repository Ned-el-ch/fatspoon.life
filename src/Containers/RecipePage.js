import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PageHeader from '../Components/PageHeader'
import { useLocation } from 'react-router-dom'

const RecipePage = (props) => {
	const location = useLocation().pathname.split("-")
	const uuid = location[location.length - 1]
	const [recipe, setRecipe] = useState({})
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
			<PageHeader title={""}/>
			<div className="content--inner">
			</div>
		</div>
	)
}

export default connect()(RecipePage)
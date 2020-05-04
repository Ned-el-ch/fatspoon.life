import React from 'react'
import { connect } from 'react-redux'
import PageHeader from '../Components/PageHeader'

const RecipePage = (props) => {
	return (
		<div>
			<PageHeader title={"12 Pancakes with Nutella and Berries"}/>
		</div>
	)
}

export default connect()(RecipePage)
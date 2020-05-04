import React from 'react'
import { connect } from 'react-redux'
import PageHeader from '../Components/PageHeader'

const RecipePage = (props) => {
	return (
		<div>
			<PageHeader title={"Pancakes with a lot more words than this container holds lol"}/>
		</div>
	)
}

export default connect()(RecipePage)
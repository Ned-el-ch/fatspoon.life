import React from 'react'
// import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PageHeader from '../Components/PageHeader'
// import { useHistory } from 'react-router'

const RecipePage = (props) => {
	// useHistory FOR THE ADDRESS I GUESS
	// useEffect(() => {FETCH THE SPECIFIC PAGE USING THE UUID IN THE ADDRESS}, [])
	return (
		<div>
			<PageHeader title={"12 Pancakes with Nutella and Berries"}/>
		</div>
	)
}

export default connect()(RecipePage)
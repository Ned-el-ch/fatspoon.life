import React from 'react'
import { connect } from 'react-redux'

export const ShoppingListContainer = () => {
	return (
		<div>
			
		</div>
	)
}

const mapStateToProps = items => {
	return (
		{
			items
		}
	)
}

export default connect(mapStateToProps)(ShoppingListContainer)
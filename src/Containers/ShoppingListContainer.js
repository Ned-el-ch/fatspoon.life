import React from 'react'
import { connect } from 'react-redux'

export const ShoppingListContainer = () => {
	return (
		<div className="shopping-list-container">
			
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
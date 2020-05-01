import React from 'react'
import { connect } from 'react-redux'

export const ShoppingListContainer = () => {
	return (
		<div>
			
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
			items: state.shoppingListItems
		}
	)
}

export default connect(mapStateToProps)(ShoppingListContainer)
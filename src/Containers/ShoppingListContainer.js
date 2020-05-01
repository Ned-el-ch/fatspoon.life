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
			items: state.itemsToPurchase
		}
	)
}

export default connect(mapStateToProps)(ShoppingListContainer)
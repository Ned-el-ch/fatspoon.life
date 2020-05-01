import React from 'react'
import { connect } from 'react-redux'
import ShoppingList from '../Components/ShoppingList'

export const ShoppingListContainer = () => {
	return (
		<div className="shopping-list-container">
			<ShoppingList />
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
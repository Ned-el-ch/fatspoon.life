import React from 'react'
import { connect } from 'react-redux'
import ShoppingList from '../Components/ShoppingList'
import PageHeader from '../Components/PageHeader'

const ShoppingListContainer = () => {
	return (
		<div className="shopping-list-container">
			<PageHeader title="My Shopping List"/>
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
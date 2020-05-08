import React from 'react'
import { connect } from 'react-redux'
import ShoppingList from '../Components/ShoppingList'
import PageHeader from '../Components/PageHeader'

const ShoppingListPage = () => {
	return (
		<div className="content shopping-list-container">
			<div className="content--inner">
				<PageHeader title="My Shopping List"/>
				<ShoppingList />
			</div>
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

export default connect(mapStateToProps)(ShoppingListPage)
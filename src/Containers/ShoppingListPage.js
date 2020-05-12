import React from 'react'
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

export default ShoppingListPage
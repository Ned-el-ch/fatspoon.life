export const addToShoppingList = shoppingListItems => {
	return (
		{
			type: "ADD_TO_SHOPPING_LIST",
			shoppingListItems
		}
	)
}

export const removeFromShoppingList = itemToRemove => {
	return (
		{
			type: "REMOVE_FROM_SHOPPING_LIST",
			itemToRemove
		}
	)
}
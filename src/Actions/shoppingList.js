export const addToShoppingList = itemsToAdd => {
	return (
		{
			type: "ADD_TO_SHOPPING_LIST",
			itemsToAdd
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
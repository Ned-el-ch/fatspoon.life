import React, {
	useEffect,
	useState,
	Fragment
} from 'react'
import PageHeader from '../Components/PageHeader'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
	connect
} from 'react-redux'
import {
	DatePickerModal
} from '../Components/DatePickerModal'
import {
	uuid
} from '../Concerns/uuid'
import {
	addToMealPlan,
	fetchAddToMealPlan
} from '../Actions/mealPlan'
import {
	starRecipe,
	unstarRecipe
} from '../Actions/recipes'
import {
	useHistory
} from 'react-router'
import LottieStar from '../Components/LottieStar'

const RecipePage = ({
		match,
		user,
		ingredients,
		addToMealPlan,
		fetchAddToMealPlan,
		starRecipe,
		unstarRecipe
	}) => {

		const [recipe, setRecipe] = useState(null)
		const [isStarred, setIsStarred] = useState(null)
		const [recipeExists, setRecipeExists] = useState(true)
		const [showModal, setShowModal] = useState(false)
		const [multiplier, setMultiplier] = useState(1)
		const history = useHistory()
		useEffect(() => {
			(async function () {
				let location = match.params.recipe.split("-")
				let uuid = location[location.length - 1]
				try {
					await fetch(`https://ancient-harbor-35585.herokuapp.com/recipes/${uuid.length === 12 ? uuid : null}`, {
							method: "GET",
							headers: {
								'Content-Type': 'application/json',
								Accept: 'application/json'
							}
						})
						.then(res => res.json())
						.then(data => {
							if (data.message || data.error) {
								setRecipeExists(false)
							} else {
								setRecipe(data)
								setMultiplier(data.servingCount)
								if (!!data.recipe_stars.find(e => e.user.username === user.username))
									setIsStarred(!!data.recipe_stars.find(e => e.user.username === user.username))
							}
						})
				} catch (e) {
					console.log(e)
				}
			})()
		}, [match, setRecipe, setRecipeExists, setMultiplier, setIsStarred])
		return ( <
			div className = "content" > {
				recipe ?
				<
				Fragment >
				<
				PageHeader title = {
					recipe.title
				}
				/> {
					user && recipe.user.username !== user.username ?
						<
						LottieStar isStarred = {
							isStarred
						}
					toggleFavorite = {
						() => {
							setIsStarred(!isStarred)
							fetch(`https://ancient-harbor-35585.herokuapp.com/recipes/${isStarred ? "unstar" : "star"}`, {
									method: "POST",
									headers: {
										'Content-Type': 'application/json',
										Accept: 'application/json',
										'Authorization': `Bearer ${localStorage.getItem('token')}`
									},
									body: JSON.stringify({
										recipe: {
											uuid: recipe.uuid
										}
									})
								})
								.then(res => res.json())
								.then(res => {
									if (res.error) {
										setIsStarred(!isStarred)
									} else {
										isStarred ? unstarRecipe(recipe.uuid) : starRecipe(recipe)
									}
								})
						}
					}
					/>:
					null
				} <
				div className = "content--inner" >
				<
				Row >
				<
				Col xs = {
					12
				}
				sm = {
					12
				}
				md = {
					{
						span: 5
					}
				}
				lg = {
					{
						span: 5
					}
				}
				className = "rf-remove-margin" >
				<
				img className = "rp-image"
				src = {
					recipe.imageLink
				}
				alt = "" / >
				<
				/Col> <
				Col xs = {
					12
				}
				sm = {
					12
				}
				md = {
					{
						span: 6,
						offset: 1
					}
				}
				lg = {
					{
						span: 6,
						offset: 1
					}
				}
				className = "rf-remove-margin" >
				<
				div className = "rp-subheading-container" >
				<
				span className = "rp-subheading" > What to expect < /span> <
				/div> <
				div className = "rp-times-container" >
				<
				span className = "rp-prep-time-label" > Prep Time : {
					recipe.prepTime
				}
				mins < /span> <
				span className = "rp-cook-time-label" > Cook Time: {
					recipe.cookingTime
				}
				mins < /span> <
				/div> <
				span className = "rp-description" > {
					recipe.description
				} < /span> <
				div className = "rp-subheading-container" > {
					/* <span className="rp-subheading"></span> */ } <
				div className = "rp-servings-container" >
				<
				span className = "rp-servings-label rp-subheading" > Ingredients & Servings: {
					multiplier
				} < /span> <
				button className = "rp-servings-button neg"
				onClick = {
					() => {
						if (multiplier > 1)
							setMultiplier(multiplier - 1)
					}
				} > ▼ < /button> <
				button className = "rp-servings-button pos"
				onClick = {
					() => {
						setMultiplier(multiplier + 1)
					}
				} > ▲ < /button> <
				/div> <
				/div> <
				div className = "rp-ul-container" >
				<
				ul className = "rp-ul rp-ingredients-left-ul" > {
					recipe.recipe_ingredients && recipe.recipe_ingredients
					.filter((el, index) => index === 0 || index % 2 === 0)
					.map(item => {
						let ingredientAvailable = false;
						let newWeight = Math.ceil((item.weight / recipe.servingCount) * multiplier)
						if (user) {
							ingredientAvailable = ingredients.find(e => e.weight >= newWeight && e.uuid === item.ingredient.uuid)
						}
						return ( <
							li key = {
								item.ingredient.uuid
							}
							className = {
								ingredientAvailable ? "available" : user ? "not-available" : ""
							} >
							<
							span className = "rp-li-weight" > {
								newWeight
							} <
							/span> g {item.ingredient.name}</li > )
					})
				} <
				/ul> <
				ul className = "rp-ul rp-ingredients-right-ul" > {
					recipe.recipe_ingredients && recipe.recipe_ingredients
					.filter((el, index) => index !== 0 && index % 2 !== 0)
					.map(item => {
						let ingredientAvailable = false;
						let newWeight = Math.ceil((item.weight / recipe.servingCount) * multiplier)
						if (user) {
							ingredientAvailable = ingredients.find(e => e.weight >= newWeight && e.uuid === item.ingredient.uuid)
						}
						return ( <
							li key = {
								item.ingredient.uuid
							}
							className = {
								ingredientAvailable ? "available" : user ? "not-available" : ""
							} >
							<
							span className = "rp-li-weight" > {
								newWeight
							} <
							/span> g {item.ingredient.name}</li > )
					})
				} <
				/ul> <
				/div> <
				/Col> <
				Col xs = {
					12
				}
				sm = {
					12
				}
				md = {
					12
				}
				lg = {
					12
				}
				className = "rf-remove-margin" >
				<
				div className = "rp-subheading-container" >
				<
				span className = "rp-subheading" > Instructions < /span> <
				/div> <
				ol className = "rp-instructions-ol" > {
					recipe.instructions && recipe.instructions
					.split("|||")
					.map((item, index) => {
							return ( < li key = {
									index
								} > {
									item
								} < /li>)
							})
					} <
					/ol> <
					/Col> <
					/Row> {
						user ?
							<
							Row >
							<
							Col xs = {
								12
							}
						sm = {
							12
						}
						md = {
							{
								span: 10,
								offset: 1
							}
						}
						lg = {
							{
								span: 10,
								offset: 1
							}
						}
						className = "rf-remove-margin" >
							<
							button onClick = {
								() => setShowModal(true)
							}
						className = "rf-add-to-meal-plan" >
							Add to meal plan <
							/button> <
							DatePickerModal
						show = {
							showModal
						}
						onHide = {
							() => setShowModal(false)
						}
						onSave = {
							(date) => {
								const dateString =
									new Date(date.getTime() + (date.getTimezoneOffset() * 60 * 1000))
									.toISOString()
									.split("T")[0]
									.split("-").join("")
								fetchAddToMealPlan(addToMealPlan, uuid(), recipe, dateString, multiplier)
								setShowModal(false)
								history.push("/")
							}
						}
						/> <
						/Col> <
						/Row>:
						null
					} <
					/div> <
					/Fragment>:
						<
						PageHeader title = {
							recipeExists ? "Recipe Loading..." : "Recipe not found"
						}
					/>
				} <
				/div>
			)
		}

		const mapStateToProps = state => {
			return ({
				user: state.user,
				ingredients: state.ingredients
			})
		}

		export default connect(mapStateToProps, {
			addToMealPlan,
			fetchAddToMealPlan,
			starRecipe,
			unstarRecipe
		})(RecipePage)
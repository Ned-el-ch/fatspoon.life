import React, { useState, useEffect } from 'react'
import PageHeader from '../Components/PageHeader.js';
import { connect } from 'react-redux'
import { starRecipe, unstarRecipe } from '../Actions/recipes';
import RecipeCard from '../Components/RecipeCard.js';

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import { fetchSearchRecipes } from "../Actions/search";
import { createLabels, generateLink } from "../Concerns/generateExtra"
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router'
import LottieLoading from '../Components/LottieLoading.js';

const SearchResults = ({ fetchSearchRecipes, recipes, ingredients }) => {
	// const { recipes, starRecipe, unstarRecipe } = props;
	const [searchQuery, setSearchQuery] = useState("");
	const [hasSearched, setHasSearched] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	let params = useParams()
	useEffect(() => {
		if (params.query) {
			fetchSearchRecipes(params.query)
			setSearchQuery(params.query)
		}
	}, [params, fetchSearchRecipes, setSearchQuery])
	return (
		<div className="content search-results-container">
			<PageHeader title="Find Some Recipes"/>
			<div className="content--inner">

			<Row className="rf-title-row">
			<Col xs={10} sm={10} md={{ span: 8, offset: 1}} lg={{ span: 8, offset: 1}} className="rf-remove-margin">
				<Form onSubmit={(event) => {
					event.preventDefault()
					setIsLoading(true)
					fetchSearchRecipes(searchQuery).then(() => setIsLoading(false))
					setSearchQuery("")
					setHasSearched(true)
				}}>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Find some recipes..."
							aria-label="query"
							aria-describedby="inputGroup-sizing-lg"
							value={searchQuery}
							maxLength={45}
							onChange={(event) => setSearchQuery(event.target.value)}
						/>
					</InputGroup>
				</Form>
			</Col>
			<Col xs={2} sm={2} md={2} lg={2} className="rf-remove-margin">
			<button disabled={!searchQuery} className="sr-search-button"
				onClick={() => {
					fetchSearchRecipes(searchQuery)
					setSearchQuery("")
					setHasSearched(true)
				}}>Search</button>
			</Col>
			</Row>
			{recipes.length > 0 ?
					recipes.map(recipe => 
					<RecipeCard
						key={recipe.uuid}
						recipe={recipe}
						labels={createLabels(recipe, ingredients)}
						link={generateLink(recipe)}
					/>
				)
				:
				<div className="mp-subheading-container">
					{ isLoading ?
						<LottieLoading />
						:
					<span className="mp-subheading">
						{hasSearched ? "No results found! Try something else like pasta, rice, chicken, etc..." : ""}
					</span>
					}
				</div>
			}
			</div>
		</div>
	)
}


let mapStateToProps = (state) => {
	return ({
		recipes: state.search.recipes,
		ingredients: state.ingredients
	})
}

export default connect(mapStateToProps, { fetchSearchRecipes })(SearchResults);

import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import { LinkContainer } from "react-router-bootstrap";

import { recipeSearch } from "../concerns/recipeSearch";

import { connect } from 'react-redux';
import { addRecipeResults } from "../actions/search";

import { v4 as uuid } from 'uuid';

import { compose } from 'redux'
import { withRouter } from "react-router-dom";

class NavbarContainer extends Component {

	state = {
		searchTerm: "",
		redirect: ""
	}

	handleOnChange = (event) => {
		event.preventDefault();
		this.setState({searchTerm: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let query = {
			term: this.state.searchTerm,
			from: 0,
			to: 5
		}
		recipeSearch(query)
		.then(res => {
			let recipes = res.hits.map(hit => Object.assign({}, hit, {id: uuid()}))
			this.props.addRecipeResults(recipes)
			// console.log(JSON.stringify(res.hits))
		})
		this.setState({searchTerm: ""});
		this.props.history.push("/Search")
	}

	render() {
		return (
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<LinkContainer to="/">
					<NavLink><Navbar.Brand>
						<NavItem>Home</NavItem>
					</Navbar.Brand></NavLink>
				</LinkContainer>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
					<LinkContainer to="/MyCookbook">
						<NavLink><NavItem>My Cookbook</NavItem></NavLink>
					</LinkContainer>
					<LinkContainer to="/MyFridge">
						<NavLink><NavItem>My Fridge</NavItem></NavLink>
					</LinkContainer>
					</Nav>
					<Form inline onSubmit={this.handleSubmit}>
					<Form.Group controlId="recipeSearchForm">
						<FormControl onChange={this.handleOnChange} type="text" placeholder="Find Recipes ..." className="mr-sm-3"/>
					</Form.Group>
					<Form.Group controlId="recipeSearchFormSubmitButton">
						<Button variant="outline-success">Search</Button>
					</Form.Group>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
export default compose(withRouter, connect(null, { addRecipeResults }))(NavbarContainer);
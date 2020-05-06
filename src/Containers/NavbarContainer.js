import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
// import Button from "react-bootstrap/Button"
// import Form from "react-bootstrap/Form"
// import FormControl from "react-bootstrap/FormControl"
import { LinkContainer } from "react-router-bootstrap";

import { connect } from 'react-redux';
import { addRecipeResults } from "../Actions/search";

import { compose } from 'redux'
import { withRouter } from "react-router-dom";

const NavbarContainer = () => {

	return (
		<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
			<LinkContainer exact to="/">
				<NavLink active={false}>
					{/* <Navbar.Brand> */}
					<NavItem>Home</NavItem>
					{/* </Navbar.Brand> */}
				</NavLink>
			</LinkContainer>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<LinkContainer exact  to="/MyCookbook">
						<NavLink active={false}><NavItem>My Cookbook</NavItem></NavLink>
					</LinkContainer>
					<LinkContainer exact to="/MyFridge">
						<NavLink active={false}><NavItem>My Fridge</NavItem></NavLink>
					</LinkContainer>
					<LinkContainer exact to="/MyShoppingList">
						<NavLink active={false}><NavItem>My Shopping List</NavItem></NavLink>
					</LinkContainer>
				</Nav>
				<Nav className="ml-auto">
					<LinkContainer exact to="/Login">
						<NavLink active={false}><NavItem>Login</NavItem></NavLink>
					</LinkContainer>
					<LinkContainer exact to="/SignUp">
						<NavLink active={false}><NavItem>Sign Up</NavItem></NavLink>
					</LinkContainer>
				</Nav>

				{/* <Form inline onSubmit={this.handleSubmit}>
				<Form.Group controlId="recipeSearchForm">
					<FormControl onChange={this.handleOnChange} value={this.state.searchTerm} type="text" placeholder="Find Recipes ..." className="mr-sm-3"/>
				</Form.Group>
				<Form.Group controlId="recipeSearchFormSubmitButton">
					<Button type="submit" variant="outline-success">Search</Button>
				</Form.Group>
				</Form> */}
			</Navbar.Collapse>
		</Navbar>
	)
}

const mapStateToProps = state => {
	return (
		{
			user: state.user
		}
	)
}
export default compose(
	withRouter,
	connect(mapStateToProps, { addRecipeResults })
)(NavbarContainer);

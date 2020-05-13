import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
import NavDropdown from "react-bootstrap/NavDropdown"
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";

import { logoutUser } from "../Actions/user";
import { clearIngredients } from "../Actions/ingredients";

// import Button from "react-bootstrap/Button"
// import Form from "react-bootstrap/Form"
// import FormControl from "react-bootstrap/FormControl"

// import { addRecipeResults } from "../Actions/search";


const NavbarContainer = ({ user, logoutUser, clearIngredients }) => {
	let history = useHistory();
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			{user
			?
			<LinkContainer exact to="/">
				<NavLink active={false}><NavItem>My Meal Planner</NavItem></NavLink>
			</LinkContainer>
			:
			<LinkContainer exact to="/">
				<NavLink active={false}><NavItem>Home</NavItem></NavLink>
			</LinkContainer>
			}
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				{user
				?
				<Nav className="mr-auto">
					<LinkContainer exact to="/MyCookbook">
						<NavLink active={false}><NavItem>My Cookbook</NavItem></NavLink>
					</LinkContainer>
					<LinkContainer exact to="/MyFridge">
						<NavLink active={false}><NavItem>My Fridge</NavItem></NavLink>
					</LinkContainer>
					<LinkContainer exact to="/MyShoppingList">
						<NavLink active={false}><NavItem>My Shopping List</NavItem></NavLink>
					</LinkContainer>
					<LinkContainer exact to="/Search">
						<NavLink active={false}><NavItem>Search Recipes</NavItem></NavLink>
					</LinkContainer>
				</Nav>
				:
				<Nav className="mr-auto">
					<LinkContainer exact to="/About">
						<NavLink active={false}><NavItem>About</NavItem></NavLink>
					</LinkContainer>
					<LinkContainer exact to="/Search">
						<NavLink active={false}><NavItem>Search Recipes</NavItem></NavLink>
					</LinkContainer>
				</Nav>
				}
				<Nav className="ml-auto">
					{user
					?
					<NavDropdown drop="left" title={user.username ? user.username : "me"} id="basic-nav-dropdown">
						<LinkContainer exact to="/MyProfile">
							<NavDropdown.Item href="/MyProfile">My Profile</NavDropdown.Item>
						</LinkContainer>
						<LinkContainer exact to="/About">
							<NavDropdown.Item href="/About">About App</NavDropdown.Item>
						</LinkContainer>
						<NavDropdown.Item href="#" onClick={() => {logoutUser();clearIngredients();history.push("/")}}>Log Out</NavDropdown.Item>
					</NavDropdown>
					:
					<Fragment>
						<LinkContainer exact to="/Login">
							<NavLink active={false}><NavItem>Login</NavItem></NavLink>
						</LinkContainer>
						<LinkContainer exact to="/SignUp">
							<NavLink active={false}><NavItem>Sign Up</NavItem></NavLink>
						</LinkContainer>
					</Fragment>
				}
				</Nav>
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
export default connect(mapStateToProps, { logoutUser, clearIngredients })(NavbarContainer);

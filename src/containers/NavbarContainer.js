import React from 'react'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
import { LinkContainer } from "react-router-bootstrap";

const NavbarCon = () => {
	return (
		<Navbar bg="light" variant="light" fixed>
			<Nav fluid="true" collapseOnSelect="true">
				<LinkContainer to="/">
					<NavLink><Navbar.Brand>
					<NavItem>Home</NavItem>
					</Navbar.Brand></NavLink>
				</LinkContainer>
				<Navbar.Collapse>
				<LinkContainer to="/recipes">
					<NavLink><NavItem>My Recipes</NavItem></NavLink>
				</LinkContainer>
				<LinkContainer to="/MyFridge">
					<NavLink><NavItem>My Fridge</NavItem></NavLink>
				</LinkContainer>
				</Navbar.Collapse>
			</Nav>
		</Navbar>
	)
}

export default NavbarCon;
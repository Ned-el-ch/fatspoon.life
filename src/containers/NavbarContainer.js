import React from 'react'
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import { LinkContainer } from "react-router-bootstrap";

const NavbarCon = () => {
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
				<Form inline>
					<FormControl type="text" placeholder="Find Recipes ..." className="mr-sm-3"/>
					<Button variant="outline-success">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>

	)
}

export default NavbarCon;
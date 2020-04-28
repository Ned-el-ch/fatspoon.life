import React from 'react'
import PageHeader from '../components/PageHeader'
import AnimatedSelect from '../components/AnimatedSelect'
import { connect } from 'react-redux'

const Fridge = () => {
	return (
		<div className="fridge-container">
			<PageHeader title="My Fridge"/>
			{/*
			CHECK IF THE USER HAS ANY INGREDIENTS IN THEIR FRIDGE, IF NOT RENDER
			"LOOKS LIKE YOU DON'T HAVE INGREDIENTS YET, WHAT WOULD YOU LIKE TO ADD?"
			*/}
			<AnimatedSelect />
			<button onClick={}>Add to fridge</button>
		</div>
	)
}

const mapStateToProps = state => {
	return null;
}
export default connect(mapStateToProps, {})(Fridge);
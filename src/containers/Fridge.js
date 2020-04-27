import React from 'react'
import PageHeader from '../components/PageHeader'
import AnimatedSelect from '../components/AnimatedSelect'

const Fridge = () => {
	return (
		<div className="fridge-container">
			<PageHeader title="My Fridge"/>
			{/*
			CHECK IF THE USER HAS ANY INGREDIENTS IN THEIR FRIDGE, IF NOT RENDER
			"LOOKS LIKE YOU DON'T HAVE INGREDIENTS YET, WHAT WOULD YOU LIKE TO ADD?"
			*/}
			<AnimatedSelect />
		</div>
	)
}

export default Fridge;
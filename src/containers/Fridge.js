import React from 'react'
import PageHeader from '../components/PageHeader'
import AnimatedSelect from '../components/AnimatedSelect'

const Fridge = () => {
	return (
		<div className="fridge-container">
			<PageHeader title="My Fridge"/>
			<AnimatedSelect />
		</div>
	)
}

export default Fridge;
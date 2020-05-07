import React from 'react'
import PageHeader from '../Components/PageHeader.js';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className="meal-planner-container">
			<PageHeader title="Welcome to Fatspoon!"/>

			<Link to="/MyCookbook">Add some recipes first!</Link>
		</div>
	)
}

export default HomePage
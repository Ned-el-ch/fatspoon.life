import React, { Component } from 'react'
import { PageHeader } from '../components/PageHeader'

export default class Fridge extends Component {
	render() {
		return (
			<div className="fridge-container">
				<PageHeader title="My Fridge"/>
			</div>
		)
	}
}

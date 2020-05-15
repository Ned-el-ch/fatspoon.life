import React from 'react'
import PageHeader from '../Components/PageHeader'
import LottieDino from '../Components/LottieDino'

const DefaultPage = () => {
	return (
		<div className="content ap-container">
			<PageHeader title={"This page is in another castle"}/>
			<div className="content--inner">
				<LottieDino/>
			</div>
		</div>
	)
}

export default DefaultPage
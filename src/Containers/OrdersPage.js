import React, { useState } from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PageHeader from '../Components/PageHeader';
import LottieLoading from '../Components/LottieLoading';
import { formatWeek } from '../Concerns/generateExtra';

import { getOrdersFetch } from "../Actions/userOrders";
import OrderCard from '../Components/OrderCard';
// import { compose } from 'redux';
// import { withRouter } from 'react-router';

const initialState = {
	start: moment(),
	beginWeek: moment().startOf('isoWeek'),
	endWeek: moment().endOf('isoWeek')
}

const OrdersPage = ({ orders, getOrdersFetch }) => {

	const [startingWeek] = useState(initialState.start)
	const [beginningOfCurrentWeek, setBeginningOfCurrentWeek] = useState(initialState.beginWeek)
	const [endOfCurrentWeek, setEndOfCurrentWeek] = useState(initialState.endWeek)
	const [isLoading, setIsLoading] = useState(false)

	return (
		<div className="content meal-planner-container">
			<PageHeader title="Weekly Orders"/>
			<div className="content--inner">
				<div className="mp-week-of-container">
					<span className="rp-subheading">{formatWeek(beginningOfCurrentWeek.format(), endOfCurrentWeek.format())}</span>
				</div>
				<div className="mp-week-button-container">
						<button onClick={() => {
							setIsLoading(true)
							let nwb = beginningOfCurrentWeek.clone().subtract(1, 'week')
							let nwe = endOfCurrentWeek.clone().subtract(1, 'week')
							setBeginningOfCurrentWeek(nwb)
							setEndOfCurrentWeek(nwe)
							getOrdersFetch(nwb.format().split("+")[0], nwe.format().split("+")[0]).then(setIsLoading)
						}}
						className="mp-week-button previous">Previous Week</button>
						<button onClick={() => {
							setIsLoading(true)
							let nwb = startingWeek.clone().startOf('isoWeek')
							let nwe = startingWeek.clone().endOf('isoWeek')
							setBeginningOfCurrentWeek(nwb)
							setEndOfCurrentWeek(nwe)
							getOrdersFetch(nwb.format().split("+")[0], nwe.format().split("+")[0]).then(setIsLoading)
						}}
						className="mp-week-button current">Current Week</button>
						<button onClick={() => {
							setIsLoading(true)
							let nwb = beginningOfCurrentWeek.clone().add(1, 'week')
							let nwe = endOfCurrentWeek.clone().add(1, 'week')
							setBeginningOfCurrentWeek(nwb)
							setEndOfCurrentWeek(nwe)
							getOrdersFetch(nwb.format().split("+")[0], nwe.format().split("+")[0]).then(setIsLoading)
						}}
						className="mp-week-button next">Next Week</button>
					</div>
					{orders.length > 0 ? 
						orders.map(order => {
							return (
								<OrderCard/>
							)
						})
						:
						isLoading ? <LottieLoading/> : <div>no orders for this week</div>
					}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
			orders: state.orders,
			userIngredients: state.userIngredients
		}
	)
}

export default connect(mapStateToProps, { getOrdersFetch })(OrdersPage);

// export default compose(
// 	withRouter,
// 	connect(mapStateToProps)
// )(MealPlannerContainer);
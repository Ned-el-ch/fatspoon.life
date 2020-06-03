import React, { useState } from 'react'
import PageHeader from '../Components/PageHeader.js';
import MealPlanner from '../Components/MealPlanner.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment'

// import { compose } from 'redux';
// import { withRouter } from 'react-router';

const initialState = {
	start: moment(),
	beginWeek: moment().startOf('isoWeek'),
	endWeek: moment().endOf('isoWeek')
}

const OrdersPage = ({ orders }) => {

  const [startingWeek] = useState(initialState.start)
	const [beginningOfCurrentWeek, setBeginningOfCurrentWeek] = useState(initialState.beginWeek)
	const [endOfCurrentWeek, setEndOfCurrentWeek] = useState(initialState.endWeek)

	return (
		<div className="content meal-planner-container">
			<PageHeader title="Weekly Orders"/>
			<div className="content--inner">
        {orders.length > 0
				?
				<div>
					<MealPlanner />
				</div>
				:
				<div>
					<Link to="/Recipes">Add some recipes first!</Link>
				</div>
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
      orders: state.user.orders
		}
	)
}

export default connect(mapStateToProps, {  } )(OrdersPage);

// export default compose(
// 	withRouter,
// 	connect(mapStateToProps)
// )(MealPlannerContainer);
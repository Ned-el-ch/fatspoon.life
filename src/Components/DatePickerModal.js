import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export const DatePickerModal = (props) => {
	const [startDate, setStartDate] = useState(Date.now());
	return (
		<Modal
			{...props}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Choose a date!
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* <h4>Centered Modal</h4> */}
				<DatePicker
					selected={startDate}
					onChange={date => setStartDate(date)}
					// locale="en-GB"
					minDate={() => Date.now()}
					placeholderText="Choose a day"
				/>
			</Modal.Body>
			<Modal.Footer>
				<button onClick={props.onHide}>Close</button>
				<button onClick={() => props.onSave(startDate)}>Add to meal planner</button>
			</Modal.Footer>
		</Modal>
	)
}

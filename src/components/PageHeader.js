import React from 'react'
import Row from 'react-bootstrap/Row';

const PageHeader = ({title}) => {
	return (
		<div className="page-header">
			<hr />
				<Row className="align-self-start justify-content-center">
					<div className="page-header-text">{title}</div>
				</Row>
			<hr />
		</div>
	)
}

export default PageHeader;
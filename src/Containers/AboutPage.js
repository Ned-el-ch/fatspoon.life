import React from 'react'
import PageHeader from '../Components/PageHeader'

const AboutPage = () => {
	return (
		<div className="ap-container">
			<PageHeader title={"Made by Niki Nedelchev"}/>
			<span className="ap-contact">Find me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Ned_el_ch">Twitter</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ned-el-ch">GitHub</a>, and <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ned-el-ch/">LinkedIn</a></span>
			<span className="ap-description">This is an SPA I built to practice using React, Redux, SCSS, and Ruby on Rails (as an API). Check out the <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ned-el-ch/fatspoon.life">frontend repo</a> or the <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ned-el-ch/fatspoon.life-backend">backend repo</a> if you want to know more.</span>
			<span className="ap-packages">List of main things I used for the frontend</span>
			<ul className="ap-ul">
				<li className="ap-li">
					React-Redux
				</li>
				<li className="ap-li">
					Redux-Thunk
				</li>
				<li className="ap-li">
					Bootstrap & React-Bootstrap
				</li>
				<li className="ap-li">
					React-Router
				</li>
				<li className="ap-li">
					React-Router-Dom
				</li>
				<li className="ap-li">
					React-Router-Bootstrap
				</li>
				<li className="ap-li">
					React-Select
				</li>
				<li className="ap-li">
					SASS/SCSS for custom styling
				</li>
				<li className="ap-li">
					Custom UUID function
				</li>
				<li className="ap-li">
					Chroma-js for styling react-select
				</li>
			</ul>
		</div>
	)
}

export default AboutPage
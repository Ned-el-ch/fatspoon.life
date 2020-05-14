import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../Data/star.json'

const defaultOptions = {
	loop: false,
	autoplay: false, 
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const Star = ({toggleFavorite, isActive}) => {

	const [active, setActive] = useState(isActive)
	return (
		<div className="lottie lottie-star" onClick={() => {toggleFavorite(active); setActive(!active)}}>
		<Lottie options={defaultOptions}
			height={110}
			width={110}
			isStopped={active}
			isPaused={active}
			speed={active ? -1 : 1}
		/>
		</div>
	)
}

export default Star
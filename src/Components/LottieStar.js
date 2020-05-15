import React from 'react'
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

const LottieStar = ({toggleFavorite, isStarred}) => {
	return (
		<div className="lottie lottie-star" onClick={toggleFavorite}>
		<Lottie options={defaultOptions}
			height={110}
			width={110}
			isStopped={!isStarred}
			isPaused={false}
			speed={isStarred ? 1 : -1}
		/>
		</div>
	)
}

export default LottieStar
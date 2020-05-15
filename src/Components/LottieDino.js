import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../Data/dino.json'

const defaultOptions = {
	loop: true,
	autoplay: true, 
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const LottieDino = () => {
	return (
		<div className="lottie lottie-loading">
		<Lottie options={defaultOptions}
			height={250}
			width={250}
			isStopped={false}
			isPaused={false}
			isClickToPauseDisabled={true}
			speed={1}
		/>
		</div>
	)
}

export default LottieDino
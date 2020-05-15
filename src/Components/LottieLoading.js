import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../Data/loading.json'

const defaultOptions = {
	loop: true,
	autoplay: true, 
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const LottieLoading = () => {
	return (
		<div className="lottie lottie-loading">
		<Lottie options={defaultOptions}
			height={150}
			width={150}
			isStopped={false}
			isPaused={false}
			speed={3}
		/>
		</div>
	)
}

export default LottieLoading
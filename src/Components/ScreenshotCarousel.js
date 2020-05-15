import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import MyCookbook from '../Screenshots/MyCookbook.png'
import MyFridge from '../Screenshots/MyFridge.png'
import MyShoppingList2 from '../Screenshots/MyShoppingList2.png'
import MyMealPlanner from '../Screenshots/MyMealPlanner.png'
import RecipePage from '../Screenshots/RecipePage.png'

export const ScreenshotCarousel = () => {
	return (
		<div className="screenshot-carousel-container">
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={MyCookbook} alt="First slide"/>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={MyFridge} alt="First slide"/>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={MyMealPlanner} alt="First slide"/>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={MyShoppingList2} alt="First slide"/>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={RecipePage} alt="First slide"/>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

import React, { useState } from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getIngredientsForSelect } from "../concerns/getIngredientsForSelect";
import { connect } from 'react-redux';
import { addIngredients } from '../actions/ingredients';

const colouredOptions = getIngredientsForSelect();
const animatedComponents = makeAnimated();

const colourStyles = {
	control: styles => ({ ...styles, backgroundColor: '#062035', closeOnSelect: false}),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		const color = chroma(data.color);
		return {
		 ...styles,
		 backgroundColor: isDisabled
			? null
			: isSelected
			? data.color
			: isFocused
			? color.alpha(0.1).css()
			: null,
		 color: isDisabled
			? '#ccc'
			: isSelected
			? chroma.contrast(color, 'white') > 2
				? 'white'
				: 'black'
			: data.color,
		 cursor: isDisabled ? 'not-allowed' : 'default',
 
		 ':active': {
			...styles[':active'],
			backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
		 },
		};
	},
	multiValue: (styles, { data }) => {
		const color = chroma(data.color);
		return {
		 ...styles,
		 backgroundColor: color.alpha(0.1).css(),
		};
	},
	multiValueLabel: (styles, { data }) => ({
		...styles,
		color: data.color,
	}),
	multiValueRemove: (styles, { data }) => ({
		...styles,
		color: data.color,
		':hover': {
		 backgroundColor: data.color,
		 color: 'white',
		},
	}),
	menu: (styles, { data }) => ({
		...styles,
		background: '#062035',
	}),
};

const colors = {
		"primary": "#2684FF",
		"primary75": "#4C9AFF",
		"primary50": "#B2D4FF",
		"primary25": "#DEEBFF",
		"danger": "#DE350B",
		"dangerLight": "#FFBDAD",
		"neutral0": "hsl(0, 0%, 100%)",
		"neutral5": "hsl(0, 0%, 95%)",
		"neutral10": "hsl(0, 0%, 90%)",
		"neutral20": "hsl(0, 0%, 80%)",
		"neutral30": "hsl(0, 0%, 70%)",
		"neutral40": "hsl(0, 0%, 60%)",
		"neutral50": "hsl(0, 0%, 50%)",
		"neutral60": "hsl(0, 0%, 40%)",
		"neutral70": "hsl(0, 0%, 30%)",
		"neutral80": "#ffffff",
		"neutral90": "hsl(0, 0%, 10%)"
}

const theme = (theme) => ({
	...theme,
	borderRadius: "10px",
	colors: {
	...colors
	},
})

const initialState = {options: []}

const AnimatedSelect = ({addIngredients}) => {
	const [state, setState] = useState(initialState);
	console.log(state);
	return (
		<div className="select-container">
			<Select
			isMulti
				closeMenuOnSelect={false}
				components={animatedComponents}
				defaultValue={[colouredOptions[1], colouredOptions[28], colouredOptions[57], colouredOptions[172]]}
				options={colouredOptions}
				styles={colourStyles}
				theme={theme}
				pageSize={5}
				onChange={options => setState({options})}
				placeholder="Search or select what ingredients you have"
				noResultsText="Looks like I forgot to add this ingredient"
			/>
		<button onClick={() => addIngredients(state.options)}>Add To My Fridge!</button>
		</div>
	);
}

export default connect(null, { addIngredients })(AnimatedSelect);
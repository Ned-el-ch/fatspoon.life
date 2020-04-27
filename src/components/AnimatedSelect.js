import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getIngredientsForSelect } from "../concerns/getIngredientsForSelect";

const colouredOptions = getIngredientsForSelect();
const animatedComponents = makeAnimated();

const colourStyles = {
	control: styles => ({ ...styles, backgroundColor: '#062035' }),
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

const AnimatedSelect = () => {
	return (
		<Select
			closeMenuOnSelect={false}
			components={animatedComponents}
			defaultValue={[colouredOptions[1], colouredOptions[28], colouredOptions[57], colouredOptions[172]]}
			isMulti
			options={colouredOptions}
			styles={colourStyles}
		/>
	);
}

export default AnimatedSelect;
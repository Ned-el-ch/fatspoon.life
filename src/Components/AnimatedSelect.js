import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addIngredients } from '../Actions/ingredients';
import chroma from 'chroma-js';
import Select, { createFilter, components } from 'react-select';
import { getIngredientsForSelect } from "../Concerns/getIngredientsForSelect";

const AnimatedSelect = (props) => {
	const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);
	const [availableOptions, setAvailableOptions] = useState(optionsToRender(props.ingredients));
	return (
		<>
			<Select
				isMulti={true}
				closeMenuOnSelect={false}
				options={availableOptions.toRender}
				// defaultValue={[availableOptions.toRender[1], availableOptions.toRender[28]]}
				filterOption={createFilter({ignoreAccents: false})}
				components={{Option: CustomOption}}
				styles={colourStyles}
				onChange={toAdd => setSelectedOptions({toAdd})}
				value={selectedOptions.toAdd}
				theme={theme}
				placeholder="Add some new ingredients!"
				noResultsText="Looks like I forgot to add this ingredient"
			/>
			<button disabled={!selectedOptions.toAdd} onClick={() => {
				props.addIngredients(selectedOptions.toAdd);
				setAvailableOptions({toRender: removeSelectedOptions(availableOptions.toRender, selectedOptions.toAdd)})
				setSelectedOptions({toAdd: null});
			}}>Add To My Fridge!</button>
		</>
	)
}

const CustomOption = (props) => {
	const {innerProps, isFocused, ...otherProps} = props;
	const {onMouseMove, onMouseOver, ...otherInnerProps} = innerProps;
	const newProps = {innerProps: {...otherInnerProps}, ...otherProps};
	return (
		<components.Option {...newProps} className="react-select-option">{props.children}
		</components.Option>
	);
}

const removeSelectedOptions = (availableOptions, selectedOptions) => {
	let options = []
	for (const availOption of availableOptions) {
		let optionIsSelected = false;
		for (const selOption of selectedOptions) {
			if (availOption.value === selOption.value) {
				optionIsSelected = true;
			}
		}
		if (!optionIsSelected) {
			options.push(availOption);
		}
	}
	return options;
}
const initialSelectedOptions = {toAdd: null}
const optionsToRender = (ownIngredients) => {
	// REMOVE INGREDIENTS YOU ALREADY HAVE IN YOUR FRIDGE
	// ADD THEM BACK TO THE POOL IF YOU REMOVE THEM FROM YOUR FRIDGE
	return {toRender: getIngredientsForSelect()}
}

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
		"primary": "#ff6347",
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

const mapStateToProps = state => {
	return(
		{
			ingredients: state.ingredients
		}
	)
}

export default connect(mapStateToProps, { addIngredients })(AnimatedSelect);

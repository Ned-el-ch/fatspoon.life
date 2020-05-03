import React, { useState } from 'react';
import Select, { createFilter, components } from 'react-select';

const initialOptionsToRender = (items) => {
	return {
		toRender: items
	}
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

const IngredientSelect = ({ingredients, defaultOptionIndex}) => {
	const initialSelectedOption = {toAdd: null};
	const [selectedOption, setSelectedOption] = useState(initialSelectedOption);
	const [availableOptions, setAvailableOptions] = useState(initialOptionsToRender(ingredients));
	return (
		<Select
			isMulti={false}
			closeMenuOnSelect={true}
			options={availableOptions.toRender}
			defaultValue={[availableOptions.toRender[defaultOptionIndex]]}
			filterOption={createFilter({ignoreAccents: false})}
			components={{Option: CustomOption}}
			onChange={toAdd => setSelectedOption({toAdd})}
			value={selectedOption.toAdd}
			placeholder="Add a new ingredient!"
			noResultsText="Looks like I forgot to add this ingredient"
		/>
	)
}

export default IngredientSelect;
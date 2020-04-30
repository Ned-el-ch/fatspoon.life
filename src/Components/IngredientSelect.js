import React, { useState } from 'react';
import chroma from 'chroma-js';
import Select, { createFilter, components } from 'react-select';
import { getIngredientsForSelect } from "../Concerns/getIngredientsForSelect";

const CustomOption = (props) => {
	const {innerProps, isFocused, ...otherProps} = props;
	const {onMouseMove, onMouseOver, ...otherInnerProps} = innerProps;
	const newProps = {innerProps: {...otherInnerProps}, ...otherProps};
	return (
		<components.Option {...newProps} className="react-select-option">{props.children}
		</components.Option>
	);
}

const IngredientSelect = () => {
	const initialSelectedOptions = {toAdd: null};
	const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);
	const [availableOptions, setAvailableOptions] = useState(optionsToRender(getIngredientsForSelect()));
	return (
		<Select
			isMulti={false}
			closeMenuOnSelect={false}
			options={availableOptions.toRender}
			// defaultValue={[availableOptions.toRender[1], availableOptions.toRender[28]]}
			filterOption={createFilter({ignoreAccents: false})}
			components={{Option: CustomOption}}
			onChange={toAdd => setSelectedOptions({toAdd})}
			value={selectedOptions.toAdd}
			placeholder="Add some new ingredients!"
			noResultsText="Looks like I forgot to add this ingredient"
		/>
	)
}

export default IngredientSelect;
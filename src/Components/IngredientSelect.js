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
	"neutral80": "hsl(0, 0%, 20%)",
	"neutral90": "hsl(0, 0%, 10%)"
}

const theme = (theme) => ({
...theme,
borderRadius: "0.25rem",
colors: {
...colors
},
})

const IngredientSelect = ({ingredients, defaultOptionIndex}) => {
	const initialSelectedOption = {toAdd: null};
	const [selectedOption, setSelectedOption] = useState(initialSelectedOption);
	const [availableOptions, setAvailableOptions] = useState(initialOptionsToRender(ingredients));
	return (
		<Select
			isMulti={false}
			closeMenuOnSelect={true}
			options={availableOptions.toRender}
			filterOption={createFilter({ignoreAccents: false})}
			components={{Option: CustomOption}}
			onChange={toAdd => setSelectedOption({toAdd})}
			value={selectedOption.toAdd || availableOptions.toRender[defaultOptionIndex]}
			// defaultValue={}
			theme={theme}
			placeholder="Add a new ingredient!"
			noResultsText="Looks like I forgot to add this ingredient"
		/>
	)
}

export default IngredientSelect;
import React from 'react';
import { render } from '@testing-library/react';
import App from '../Containers/App';

test("App exists", () => {
	const { getByText } = render(<App />);
	const linkElement = getByText("test");
	expect(linkElement).toBeInTheDocument();
});
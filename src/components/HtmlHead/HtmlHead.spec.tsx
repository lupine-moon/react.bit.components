import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import HtmlHead from './HtmlHead';

Enzyme.configure({
	adapter: new Adapter()
});

describe('HtmlHead component', () => {
	it('renders', () => {
		const wrapper = Enzyme.shallow(
			<div>
				<HtmlHead>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<title>Hello</title>
					<meta name="Description" content="Hello" />
				</HtmlHead>
			</div>
		);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('HtmlHead').exists()).toBe(true);
		expect(wrapper.find('title').html()).toMatch(/Hello/);
	});

	it('renders snapshot correctly', () => {
		const wrapper = Enzyme.shallow(
			<HtmlHead>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<title>Hello</title>
				<meta name="Description" content="Hello" />
			</HtmlHead>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should mount component', () => {
		const wrapper = Enzyme.mount(
			<div>
				<HtmlHead>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<title>Hello</title>
					<meta name="Description" content="Hello" />
				</HtmlHead>
			</div>
		);

		expect(wrapper.children(HtmlHead).length).toEqual(1);
	});
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from '@components/Button';
import HtmlHead from '@components/HtmlHead';

export class Main extends React.Component {
	public render() {
		return (
			<section>
				<HtmlHead>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<title>Bit Components</title>
				</HtmlHead>
				<Button color="#000000">Normal Button</Button>
				<Button color="#000000" primary={true}>
					Primary Button
				</Button>
			</section>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root') as HTMLElement);

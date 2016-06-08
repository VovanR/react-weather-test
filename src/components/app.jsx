import React from 'react';

import styles from './app.css';
import Item from './item/item.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={styles.app}>
				<Item/>
			</div>
		);
	}
}
App.propTypes = {
};
App.defaultProps = {
};

export default App;

import React from 'react';

import styles from './App.css';
import Item from './Item/Item.jsx';

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

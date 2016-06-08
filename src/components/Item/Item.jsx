import React from 'react';

import styles from './Item.css';

class Item extends React.Component {
	render() {
		return (
			<div className={styles.root}>
				<p className={styles.text}>
					Foo
				</p>
			</div>
		);
	}
}
Item.propTypes = {
};
Item.defaultProps = {
};

export default Item;

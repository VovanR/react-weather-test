import React from 'react';

import styles from './wind-direction.css';

class WindDirection extends React.Component {
	render() {
		return (
			<span
				className={styles.root}
				style={{
					transform: `rotate(${this.props.windDegree}deg)`
				}}
				/>
		);
	}
}
WindDirection.propTypes = {
	windDegree: React.PropTypes.string.isRequired
};

export default WindDirection;

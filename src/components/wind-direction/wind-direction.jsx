import React from 'react';

import styles from './wind-direction.css';

class WindDirection extends React.Component {
	render() {
		const {windDegree, windDirection} = this.props;

		return (
			<span className={styles.root}>
				<span
					className={styles.degree}
					style={{
						transform: `rotate(${windDegree}deg)`
					}}
					/>

				<span className={styles.direction}>
					{windDirection}
				</span>
			</span>
		);
	}
}
WindDirection.propTypes = {
	windDegree: React.PropTypes.number.isRequired,
	windDirection: React.PropTypes.string.isRequired
};

export default WindDirection;

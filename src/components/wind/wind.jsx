import React from 'react';
import Param from '../param/param.jsx';
import styles from './wind.css';

class Wind extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {windDegree, windDirection, windSpeed} = this.props;

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

				<Param
					value={windSpeed}
					units={'m/s'}
					/>
			</span>
		);
	}
}
Wind.propTypes = {
	windDegree: React.PropTypes.number.isRequired,
	windDirection: React.PropTypes.string.isRequired,
	windSpeed: React.PropTypes.number.isRequired
};
Wind.defaultProps = {
};

export default Wind;

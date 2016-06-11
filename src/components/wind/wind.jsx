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
				<Param
					className={styles.speed}
					value={windSpeed}
					units={'m/s'}
					/>

				<span className={styles.wind}>
					<span
						className={styles.degree}
						style={{
							transform: `rotate(${windDegree}deg)`
						}}
						/>

					<span className="wind__direction">
						{windDirection}
					</span>
				</span>
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

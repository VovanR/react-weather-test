import React from 'react';

import WindDirection from '../wind-direction/wind-direction.jsx';
import Param from '../param/param.jsx';
import styles from './item.css';

class Item extends React.Component {
	render() {
		const {hour, iconUrl, temp, windDegree, windSpeed} = this.props;

		return (
			<div className={styles.root}>
				<span className={styles.time}>
					{hour}
				</span>

				<span className={styles.block}>
					<img
						className={styles.icon}
						src={iconUrl}
						alt=""
						/>

					<Param
						className={styles.param}
						value={temp}
						units={'℃'}
						/>
				</span>

				<span className={styles.block}>
					<WindDirection {...{windDegree}}/>

					<Param
						className={styles.param}
						value={windSpeed}
						units={'m/s'}
						/>
				</span>
			</div>
		);
	}
}
Item.propTypes = {
	hour: React.PropTypes.string.isRequired,
	iconUrl: React.PropTypes.string.isRequired,
	temp: React.PropTypes.string.isRequired,
	windDegree: React.PropTypes.string.isRequired,
	windSpeed: React.PropTypes.string.isRequired
};
Item.defaultProps = {
};

export default Item;

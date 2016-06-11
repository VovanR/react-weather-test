import React from 'react';

import Wind from '../wind/wind.jsx';
import Param from '../param/param.jsx';
import styles from './item.css';

class Item extends React.Component {
	render() {
		const {hour, iconUrl, temp, windDegree, windDirection, windSpeed} = this.props;

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
						value={temp > 0 ? `+${temp}` : temp}
						units={'℃'}
						/>
				</span>

				<span className={styles.block}>
					<Wind {...{windDegree, windDirection, windSpeed}}/>
				</span>
			</div>
		);
	}
}
Item.propTypes = {
	hour: React.PropTypes.number.isRequired,
	iconUrl: React.PropTypes.string.isRequired,
	temp: React.PropTypes.number.isRequired,
	windDegree: React.PropTypes.number.isRequired,
	windDirection: React.PropTypes.string.isRequired,
	windSpeed: React.PropTypes.number.isRequired
};
Item.defaultProps = {
};

export default Item;

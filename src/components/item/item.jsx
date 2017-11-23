/* eslint react/forbid-component-props: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import Wind from '../wind/wind.jsx'
import Param from '../param/param.jsx'
import styles from './item.css'

class Item extends React.Component {
	render() {
		const {
			hour,
			iconUrl,
			temp,
			windDegree,
			windDirection,
			windSpeed
		} = this.props
		const formattedTemp = temp > 0 ? `+${temp}` : temp

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
						value={formattedTemp}
						units="℃"
					/>
				</span>

				<span className={styles.block}>
					<Wind
						windDegree={windDegree}
						windDirection={windDirection}
						windSpeed={windSpeed}
					/>
				</span>
			</div>
		)
	}
}
Item.propTypes = {
	hour: PropTypes.number.isRequired,
	iconUrl: PropTypes.string.isRequired,
	temp: PropTypes.number.isRequired,
	windDegree: PropTypes.number.isRequired,
	windDirection: PropTypes.string.isRequired,
	windSpeed: PropTypes.number.isRequired
}

export default Item

/* eslint-disable react/forbid-component-props */

import React from 'react'
import PropTypes from 'prop-types'
import Param from '../param/param.jsx'
import styles from './wind.css'

class Wind extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const {
			windDegree,
			windDirection,
			windSpeed
		} = this.props

		const degreeStyle = {
			transform: `rotate(${windDegree}deg)`
		}

		return (
			<span className={styles.root}>
				<Param
					className={styles.speed}
					value={windSpeed}
					units="m/s"
				/>

				<span className={styles.wind}>
					<span
						className={styles.degree}
						style={degreeStyle}
					/>

					<span className="wind__direction">
						{windDirection}
					</span>
				</span>
			</span>
		)
	}
}
Wind.propTypes = {
	windDegree: PropTypes.number.isRequired,
	windDirection: PropTypes.string.isRequired,
	windSpeed: PropTypes.number.isRequired
}

export default Wind

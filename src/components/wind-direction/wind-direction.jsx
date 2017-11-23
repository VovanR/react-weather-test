import React from 'react'
import PropTypes from 'prop-types'
import styles from './wind-direction.css'

class WindDirection extends React.Component {
	render() {
		const {
			windDegree,
			windDirection
		} = this.props

		const degreeStyle = {
			transform: `rotate(${windDegree}deg)`
		}

		return (
			<span className={styles.root}>
				<span
					className={styles.degree}
					style={degreeStyle}
				/>

				<span className={styles.direction}>
					{windDirection}
				</span>
			</span>
		)
	}
}
WindDirection.propTypes = {
	windDegree: PropTypes.number.isRequired,
	windDirection: PropTypes.string.isRequired
}

export default WindDirection

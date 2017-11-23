import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// eslint-disable-next-line import/no-unassigned-import
import './param.css'

class Param extends React.Component {
	render() {
		const {
			value,
			units,
			className
		} = this.props

		return (
			<span className={classNames('param', className)}>
				<span className="param__value">
					{value}
				</span>

				{units && (
					<span className="param__units">
						{units}
					</span>
				)}
			</span>
		)
	}
}
Param.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	units: PropTypes.string,
	className: PropTypes.string
}
Param.defaultProps = {
	units: null,
	className: null
}

export default Param

import React from 'react';

import classNames from 'classnames';
import './param.css';

class Param extends React.Component {
	render() {
		const {value, units, className} = this.props;

		return (
			<span className={classNames('param', className)}>
				<span className="param__value">
					{value}
				</span>

				{units ? (
					<span className="param__units">
						{units}
					</span>
				) : null}
			</span>
		);
	}
}
Param.propTypes = {
	value: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	units: React.PropTypes.string,
	className: React.PropTypes.string
};
Param.defaultProps = {
};

export default Param;

/* global fetch, Request */

import React from 'react'
import styles from './app.css'
import Loading from './loading/loading.jsx'
import Item from './item/item.jsx'
import ApiCredits from './api-credits/api-credits.jsx'

class App extends React.Component {
	constructor(params) {
		super(params)

		this.state = {
			data: [],
			isLoading: true
		}
	}

	componentDidMount() {
		this.requestForecast()
	}

	requestForecast() {
		const url = 'http://api.wunderground.com/api/'
		const params = [
			'291bda72a5d7ba60',
			'hourly',
			'q',
			'Russia',
			'Saint_Petersburg'
		]
		const paramsString = params.join('/')
		const request = new Request(`${url}${paramsString}.json`)

		fetch(request)
			.then(response => response.json())
			.then(processData)
			.then(data => {
				this.setState({
					data,
					isLoading: false
				})
			})
			.catch(err => console.log(err.message))
	}

	render() {
		const {
			data,
			isLoading
		} = this.state

		if (isLoading) {
			return <Loading/>
		}

		return (
			<div className={styles.app}>
				{data.map(item => (
					<Item
						key={item.date}
						{...item}
					/>
				))}

				<ApiCredits/>
			</div>
		)
	}
}

/**
 * @param {Object} data forecast server response
 * @returns {Array}
 */
function processData(data) {
	return data.hourly_forecast.reduce((a, b) => {
		a.push({
			date: b.FCTTIME.pretty,
			hour: parseInt(b.FCTTIME.hour, 10),
			iconUrl: b.icon_url,
			temp: parseInt(b.temp.metric, 10),
			windDegree: parseInt(b.wdir.degrees, 10),
			windDirection: b.wdir.dir,
			windSpeed: kmphToMph(b.wspd.metric)
		})

		return a
	}, [])
}

/**
 * @param {String} kmph - kilometers per hour
 * @returns {Number} mph - meters per hour
 */
function kmphToMph(kmph) {
	return Math.round(parseInt(kmph, 10) * 1000 / 3600)
}

export default App

/* global fetch, Request */

import React from 'react';

import styles from './app.css';
import Loading from './loading/loading.jsx';
import Item from './item/item.jsx';
import ApiCredits from './api-credits/api-credits.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			isLoading: true
		};
	}

	componentDidMount() {
		this.requestForecast();
	}

	requestForecast() {
		const url = 'http://api.wunderground.com/api/';
		const params = [
			'291bda72a5d7ba60',
			'hourly',
			'q',
			'Russia',
			'Saint_Petersburg'
		];
		const paramsString = params.join('/');
		const request = new Request(`${url}${paramsString}.json`);

		fetch(request)
			.then(response => response.json())
			.then(processData)
			.then(data => this.setState({data}))
			.catch(error => console.log(error.message))
			.then(() => {
				this.setState({isLoading: false});
			});
	}

	render() {
		const {data, isLoading} = this.state;

		if (isLoading) {
			return <Loading/>;
		}

		return (
			<div className={styles.app}>
				{data.map((item, index) => {
					return (
						<Item
							key={index}
							{...item}
							/>
					);
				})}
				<ApiCredits/>
			</div>
		);
	}
}

function processData(data) {
	return data.hourly_forecast.reduce((a, b) => {
		a.push({
			hour: parseInt(b.FCTTIME.hour, 10),
			iconUrl: b.icon_url,
			temp: parseInt(b.temp.metric, 10),
			windDegree: parseInt(b.wdir.degrees, 10),
			windDirection: b.wdir.dir,
			windSpeed: kmphToMph(b.wspd.metric)
		});

		return a;
	}, []);
}

function kmphToMph(kmph) {
	return Math.round(parseInt(kmph, 10) * 1000 / 3600);
}

export default App;

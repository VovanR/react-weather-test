/* global fetch, Request */

import React from 'react';

import styles from './app.css';
import Loading from './loading/loading.jsx';
import Item from './item/item.jsx';

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
			</div>
		);
	}
}

function processData(data) {
	return data.hourly_forecast.reduce((a, b) => {
		a.push({
			hour: b.FCTTIME.hour,
			iconUrl: b.icon_url,
			temp: b.temp.metric,
			windDegree: b.wdir.degrees,
			windSpeed: kmphToMph(b.wspd.metric)
		});

		return a;
	}, []);
}

function kmphToMph(kmph) {
	return (parseInt(kmph, 10) * 1000 / 3600).toFixed(1);
}

export default App;

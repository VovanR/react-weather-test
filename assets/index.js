/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _app = __webpack_require__(3);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app')); /* global document */

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _app = __webpack_require__(4);

	var _app2 = _interopRequireDefault(_app);

	var _loading = __webpack_require__(5);

	var _loading2 = _interopRequireDefault(_loading);

	var _item = __webpack_require__(6);

	var _item2 = _interopRequireDefault(_item);

	var _apiCredits = __webpack_require__(13);

	var _apiCredits2 = _interopRequireDefault(_apiCredits);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global fetch, Request */

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App() {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

			_this.state = {
				data: [],
				isLoading: true
			};
			return _this;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.requestForecast();
			}
		}, {
			key: 'requestForecast',
			value: function requestForecast() {
				var _this2 = this;

				var url = 'http://api.wunderground.com/api/';
				var params = ['291bda72a5d7ba60', 'hourly', 'q', 'Russia', 'Saint_Petersburg'];
				var paramsString = params.join('/');
				var request = new Request('' + url + paramsString + '.json');

				fetch(request).then(function (response) {
					return response.json();
				}).then(processData).then(function (data) {
					return _this2.setState({ data: data });
				}).catch(function (error) {
					return console.log(error.message);
				}).then(function () {
					_this2.setState({ isLoading: false });
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _state = this.state;
				var data = _state.data;
				var isLoading = _state.isLoading;


				if (isLoading) {
					return _react2.default.createElement(_loading2.default, null);
				}

				return _react2.default.createElement(
					'div',
					{ className: _app2.default.app },
					data.map(function (item, index) {
						return _react2.default.createElement(_item2.default, _extends({
							key: index
						}, item));
					}),
					_react2.default.createElement(_apiCredits2.default, null)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	function processData(data) {
		return data.hourly_forecast.reduce(function (a, b) {
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

	exports.default = App;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"app":"app__app___bQFt4"};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Loading = function Loading() {
		return _react2.default.createElement(
			"div",
			{ className: "loading" },
			_react2.default.createElement(
				"span",
				{ className: "loading__text loading__text_elipsis" },
				"loading"
			)
		);
	};

		exports.default = Loading;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _wind = __webpack_require__(7);

	var _wind2 = _interopRequireDefault(_wind);

	var _param = __webpack_require__(8);

	var _param2 = _interopRequireDefault(_param);

	var _item = __webpack_require__(12);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_React$Component) {
		_inherits(Item, _React$Component);

		function Item() {
			_classCallCheck(this, Item);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Item).apply(this, arguments));
		}

		_createClass(Item, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var hour = _props.hour;
				var iconUrl = _props.iconUrl;
				var temp = _props.temp;
				var windDegree = _props.windDegree;
				var windDirection = _props.windDirection;
				var windSpeed = _props.windSpeed;


				return _react2.default.createElement(
					'div',
					{ className: _item2.default.root },
					_react2.default.createElement(
						'span',
						{ className: _item2.default.time },
						hour
					),
					_react2.default.createElement(
						'span',
						{ className: _item2.default.block },
						_react2.default.createElement('img', {
							className: _item2.default.icon,
							src: iconUrl,
							alt: ''
						}),
						_react2.default.createElement(_param2.default, {
							className: _item2.default.param,
							value: temp > 0 ? '+' + temp : temp,
							units: '℃'
						})
					),
					_react2.default.createElement(
						'span',
						{ className: _item2.default.block },
						_react2.default.createElement(_wind2.default, { windDegree: windDegree, windDirection: windDirection, windSpeed: windSpeed })
					)
				);
			}
		}]);

		return Item;
	}(_react2.default.Component);

	Item.propTypes = {
		hour: _react2.default.PropTypes.number.isRequired,
		iconUrl: _react2.default.PropTypes.string.isRequired,
		temp: _react2.default.PropTypes.number.isRequired,
		windDegree: _react2.default.PropTypes.number.isRequired,
		windDirection: _react2.default.PropTypes.string.isRequired,
		windSpeed: _react2.default.PropTypes.number.isRequired
	};
	Item.defaultProps = {};

		exports.default = Item;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _param = __webpack_require__(8);

	var _param2 = _interopRequireDefault(_param);

	var _wind = __webpack_require__(11);

	var _wind2 = _interopRequireDefault(_wind);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Wind = function (_React$Component) {
		_inherits(Wind, _React$Component);

		function Wind(props) {
			_classCallCheck(this, Wind);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Wind).call(this, props));

			_this.state = {};
			return _this;
		}

		_createClass(Wind, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var windDegree = _props.windDegree;
				var windDirection = _props.windDirection;
				var windSpeed = _props.windSpeed;


				return _react2.default.createElement(
					'span',
					{ className: _wind2.default.root },
					_react2.default.createElement(_param2.default, {
						className: _wind2.default.speed,
						value: windSpeed,
						units: 'm/s'
					}),
					_react2.default.createElement(
						'span',
						{ className: _wind2.default.wind },
						_react2.default.createElement('span', {
							className: _wind2.default.degree,
							style: {
								transform: 'rotate(' + windDegree + 'deg)'
							}
						}),
						_react2.default.createElement(
							'span',
							{ className: 'wind__direction' },
							windDirection
						)
					)
				);
			}
		}]);

		return Wind;
	}(_react2.default.Component);

	Wind.propTypes = {
		windDegree: _react2.default.PropTypes.number.isRequired,
		windDirection: _react2.default.PropTypes.string.isRequired,
		windSpeed: _react2.default.PropTypes.number.isRequired
	};
	Wind.defaultProps = {};

		exports.default = Wind;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(9);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Param = function (_React$Component) {
		_inherits(Param, _React$Component);

		function Param() {
			_classCallCheck(this, Param);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Param).apply(this, arguments));
		}

		_createClass(Param, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var value = _props.value;
				var units = _props.units;
				var className = _props.className;


				return _react2.default.createElement(
					'span',
					{ className: (0, _classnames2.default)('param', className) },
					_react2.default.createElement(
						'span',
						{ className: 'param__value' },
						value
					),
					units ? _react2.default.createElement(
						'span',
						{ className: 'param__units' },
						units
					) : null
				);
			}
		}]);

		return Param;
	}(_react2.default.Component);

	Param.propTypes = {
		value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
		units: _react2.default.PropTypes.string,
		className: _react2.default.PropTypes.string
	};
	Param.defaultProps = {};

		exports.default = Param;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"wind__root___3gEwc","speed":"wind__speed___NMmWw","wind":"wind__wind___2x2am","degree":"wind__degree___2MDsC"};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"item__root___KDDct","time":"item__time___2Og9j","block":"item__block___JlgME","icon":"item__icon___ly08x","wind":"item__wind___1XFLn","param":"item__param___1bkj9"};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _apiCredits = __webpack_require__(14);

	var _apiCredits2 = _interopRequireDefault(_apiCredits);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ApiCredits = function ApiCredits() {
		return _react2.default.createElement(
			'span',
			{ className: _apiCredits2.default.root },
			_react2.default.createElement(
				'span',
				{ className: _apiCredits2.default.text },
				'weather API by'
			),
			_react2.default.createElement('span', { className: _apiCredits2.default.logo })
		);
	};

		exports.default = ApiCredits;

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"api-credits__root___2r1al","text":"api-credits__text___bqgHI","logo":"api-credits__logo___3yEhS"};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map
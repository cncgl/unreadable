webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(167);


/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(178)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (false) {
	  module.exports = require('./production');
	} else {
	  module.exports = __webpack_require__(267);
	}

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleJs = __webpack_require__(339);
	
	var _styleJs2 = _interopRequireDefault(_styleJs);
	
	var _errorStackParser = __webpack_require__(340);
	
	var _errorStackParser2 = _interopRequireDefault(_errorStackParser);
	
	var _objectAssign = __webpack_require__(342);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var RedBox = (function (_Component) {
	  _inherits(RedBox, _Component);
	
	  function RedBox() {
	    _classCallCheck(this, RedBox);
	
	    _Component.apply(this, arguments);
	  }
	
	  RedBox.prototype.render = function render() {
	    var error = this.props.error;
	
	    var _assign = _objectAssign2['default']({}, _styleJs2['default'], this.props.style);
	
	    var redbox = _assign.redbox;
	    var message = _assign.message;
	    var stack = _assign.stack;
	    var frame = _assign.frame;
	    var file = _assign.file;
	    var linkToFile = _assign.linkToFile;
	
	    var frames = _errorStackParser2['default'].parse(error).map(function (f, index) {
	      var link = f.fileName + ':' + f.lineNumber + ':' + f.columnNumber;
	      return _react2['default'].createElement(
	        'div',
	        { style: frame, key: index },
	        _react2['default'].createElement(
	          'div',
	          null,
	          f.functionName
	        ),
	        _react2['default'].createElement(
	          'div',
	          { style: file },
	          _react2['default'].createElement(
	            'a',
	            { href: link, style: linkToFile },
	            link
	          )
	        )
	      );
	    });
	    return _react2['default'].createElement(
	      'div',
	      { style: redbox },
	      _react2['default'].createElement(
	        'div',
	        { style: message },
	        error.name,
	        ': ',
	        error.message
	      ),
	      _react2['default'].createElement(
	        'div',
	        { style: stack },
	        frames
	      )
	    );
	  };
	
	  _createClass(RedBox, null, [{
	    key: 'propTypes',
	    value: {
	      error: _react.PropTypes.instanceOf(Error).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'displayName',
	    value: 'RedBox',
	    enumerable: true
	  }]);
	
	  return RedBox;
	})(_react.Component);
	
	exports['default'] = RedBox;
	module.exports = exports['default'];

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.createConstants = createConstants;
	exports.createReducer = createReducer;
	exports.createDevToolsWindow = createDevToolsWindow;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(69);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reduxDevtoolsLibReact = __webpack_require__(95);
	
	function createConstants() {
	  for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
	    constants[_key] = arguments[_key];
	  }
	
	  return constants.reduce(function (acc, constant) {
	    acc[constant] = constant;
	    return acc;
	  }, {});
	}
	
	function createReducer(initialState, reducerMap) {
	  return function (state, action) {
	    if (state === undefined) state = initialState;
	
	    var reducer = reducerMap[action.type];
	
	    return reducer ? reducer(state, action.payload) : state;
	  };
	}
	
	function createDevToolsWindow(store) {
	  var win = window.open(null, 'redux-devtools', // give it a name so it reuses the same window
	  'menubar=no,location=no,resizable=yes,scrollbars=no,status=no');
	
	  // reload in case it's reusing the same window with the old content
	  win.location.reload();
	
	  // wait a little bit for it to reload, then render
	  setTimeout(function () {
	    // Wait for the reload to prevent:
	    // "Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element."
	    win.document.write('<div id="react-devtools-root"></div>');
	
	    _reactDom2['default'].render(_react2['default'].createElement(
	      _reduxDevtoolsLibReact.DebugPanel,
	      { top: true, right: true, bottom: true, left: true, key: 'debugPanel' },
	      _react2['default'].createElement(_reduxDevtoolsLibReact.DevTools, { store: store, monitor: _reduxDevtoolsLibReact.LogMonitor })
	    ), win.document.getElementById('react-devtools-root'));
	  }, 10);
	}

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(74);
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(94);
	
	var _get = __webpack_require__(61)['default'];
	
	var _inherits = __webpack_require__(9)['default'];
	
	var _createClass = __webpack_require__(44)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(70);
	
	var _reactRouter = __webpack_require__(72);
	
	var _routes = __webpack_require__(171);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _utils = __webpack_require__(97);
	
	var _reduxDevtoolsLibReact = __webpack_require__(95);
	
	var _components = {
	  _$Root: {
	    displayName: 'Root'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/home/shigeru/test/ur/node_modules/eslint-loader/index.js!/home/shigeru/test/ur/src/containers/Root.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var Root = (function (_React$Component) {
	  _inherits(Root, _React$Component);
	
	  _createClass(Root, null, [{
	    key: 'propTypes',
	    value: {
	      store: _react2['default'].PropTypes.object.isRequired,
	      history: _react2['default'].PropTypes.object.isRequired,
	      debug: _react2['default'].PropTypes.bool,
	      debugExternal: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }]);
	
	  function Root() {
	    _classCallCheck(this, _Root);
	
	    _get(Object.getPrototypeOf(_Root.prototype), 'constructor', this).call(this);
	  }
	
	  _createClass(Root, [{
	    key: 'renderDevTools',
	    value: function renderDevTools() {
	      if (!this.props.debug) {
	        return null;
	      }
	
	      if (this.props.debugExternal) {
	        (0, _utils.createDevToolsWindow)(this.props.store);
	        return null;
	      }
	
	      return _react2['default'].createElement(
	        _reduxDevtoolsLibReact.DebugPanel,
	        { top: true, right: true, bottom: true, key: 'debugPanel' },
	        _react2['default'].createElement(_reduxDevtoolsLibReact.DevTools, { store: this.props.store, monitor: _reduxDevtoolsLibReact.LogMonitor })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        this.renderDevTools(),
	        _react2['default'].createElement(
	          _reactRedux.Provider,
	          { store: this.props.store },
	          _react2['default'].createElement(
	            _reactRouter.Router,
	            { history: this.props.history },
	            _routes2['default']
	          )
	        )
	      );
	    }
	  }]);
	
	  var _Root = Root;
	  Root = _wrapComponent('_$Root')(Root) || Root;
	  return Root;
	})(_react2['default'].Component);
	
	exports['default'] = Root;
	module.exports = exports['default'];

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(69);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _containersRoot = __webpack_require__(166);
	
	var _containersRoot2 = _interopRequireDefault(_containersRoot);
	
	var _stores = __webpack_require__(172);
	
	var _stores2 = _interopRequireDefault(_stores);
	
	var _historyLibCreateBrowserHistory = __webpack_require__(111);
	
	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);
	
	var target = document.getElementById('root');
	var store = (0, _stores2['default'])(window.__INITIAL_STATE__, (true));
	
	var node = _react2['default'].createElement(_containersRoot2['default'], { store: store,
	      history: (0, _historyLibCreateBrowserHistory2['default'])(),
	      debug: (true),
	      debugExternal: (false) });
	
	_reactDom2['default'].render(node, target);

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(74);
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(94);
	
	var _get = __webpack_require__(61)['default'];
	
	var _inherits = __webpack_require__(9)['default'];
	
	var _createClass = __webpack_require__(44)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(418);
	
	var _components = {
	  _$CoreLayout: {
	    displayName: 'CoreLayout'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/home/shigeru/test/ur/node_modules/eslint-loader/index.js!/home/shigeru/test/ur/src/layouts/CoreLayout.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var CoreLayout = (function (_React$Component) {
	  _inherits(CoreLayout, _React$Component);
	
	  _createClass(CoreLayout, null, [{
	    key: 'propTypes',
	    value: {
	      children: _react2['default'].PropTypes.element
	    },
	    enumerable: true
	  }]);
	
	  function CoreLayout() {
	    _classCallCheck(this, _CoreLayout);
	
	    _get(Object.getPrototypeOf(_CoreLayout.prototype), 'constructor', this).call(this);
	  }
	
	  _createClass(CoreLayout, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'page-container' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'view-container' },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  var _CoreLayout = CoreLayout;
	  CoreLayout = _wrapComponent('_$CoreLayout')(CoreLayout) || CoreLayout;
	  return CoreLayout;
	})(_react2['default'].Component);
	
	exports['default'] = CoreLayout;
	module.exports = exports['default'];

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(182)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utils = __webpack_require__(97);
	
	// normally this would be imported from /constants, but in trying to keep
	// this starter kit as small as possible we'll just define it here.
	var COUNTER_INCREMENT = 'COUNTER_INCREMENT';
	
	var initialState = 0;
	exports['default'] = (0, _utils.createReducer)(initialState, _defineProperty({}, COUNTER_INCREMENT, function (state) {
	  return state + 1;
	}));
	module.exports = exports['default'];

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _redux = __webpack_require__(34);
	
	var _counter = __webpack_require__(169);
	
	var _counter2 = _interopRequireDefault(_counter);
	
	exports['default'] = (0, _redux.combineReducers)({
	  counter: _counter2['default']
	});
	module.exports = exports['default'];

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _reactRouter = __webpack_require__(72);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _layoutsCoreLayout = __webpack_require__(168);
	
	var _layoutsCoreLayout2 = _interopRequireDefault(_layoutsCoreLayout);
	
	var _viewsHomeView = __webpack_require__(173);
	
	var _viewsHomeView2 = _interopRequireDefault(_viewsHomeView);
	
	exports['default'] = _react2['default'].createElement(
	  _reactRouter.Route,
	  { component: _layoutsCoreLayout2['default'] },
	  _react2['default'].createElement(_reactRouter.Route, { name: 'home', path: '/', component: _viewsHomeView2['default'] })
	);
	module.exports = exports['default'];

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;
	
	var _redux = __webpack_require__(34);
	
	var _reducers = __webpack_require__(170);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reduxDevtools = __webpack_require__(159);
	
	var _reduxThunk = __webpack_require__(412);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function configureStore(initialState) {
	  var debug = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	  var createStoreWithMiddleware = undefined;
	
	  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2['default']);
	
	  if (debug) {
	    createStoreWithMiddleware = (0, _redux.compose)(middleware, (0, _reduxDevtools.devTools)());
	  } else {
	    createStoreWithMiddleware = (0, _redux.compose)(middleware);
	  }
	
	  var store = createStoreWithMiddleware(_redux.createStore)(_reducers2['default'], initialState);
	  if (false) {
	    module.hot.accept('../reducers', function () {
	      var nextRootReducer = require('../reducers/index');
	
	      store.replaceReducer(nextRootReducer);
	    });
	  }
	  return store;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactTransformCatchErrors2 = __webpack_require__(74);
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);
	
	var _react = __webpack_require__(1);
	
	var _redboxReact = __webpack_require__(94);
	
	var _get = __webpack_require__(61)['default'];
	
	var _inherits = __webpack_require__(9)['default'];
	
	var _createClass = __webpack_require__(44)['default'];
	
	var _classCallCheck = __webpack_require__(8)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(34);
	
	var _reactRedux = __webpack_require__(70);
	
	// Normally you'd import your action creators, but I don't want to create
	// a file that you're just going to delete anyways!
	var _components = {
	  _$HomeView: {
	    displayName: 'HomeView'
	  }
	};
	
	var _reactComponentWrapper = (0, _reactTransformCatchErrors3['default'])({
	  filename: '/home/shigeru/test/ur/node_modules/eslint-loader/index.js!/home/shigeru/test/ur/src/views/HomeView.js',
	  components: _components,
	  locals: [],
	  imports: [_react, _redboxReact]
	});
	
	function _wrapComponent(uniqueId) {
	  return function (ReactClass) {
	    return _reactComponentWrapper(ReactClass, uniqueId);
	  };
	}
	
	var actionCreators = {
	  increment: function increment() {
	    return { type: 'COUNTER_INCREMENT' };
	  }
	};
	
	// We define mapStateToProps and mapDispatchToProps where we'd normally use
	// the @connect decorator so the data requirements are clear upfront, but then
	// export the decorated component after the main class definition so
	// the component can be tested w/ and w/o being connected.
	// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    counter: state.counter
	  };
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actionCreators, dispatch)
	  };
	};
	
	var HomeView = (function (_React$Component) {
	  _inherits(HomeView, _React$Component);
	
	  _createClass(HomeView, null, [{
	    key: 'propTypes',
	    value: {
	      actions: _react2['default'].PropTypes.object,
	      counter: _react2['default'].PropTypes.number
	    },
	    enumerable: true
	  }]);
	
	  function HomeView() {
	    _classCallCheck(this, _HomeView);
	
	    _get(Object.getPrototypeOf(_HomeView.prototype), 'constructor', this).call(this);
	  }
	
	  _createClass(HomeView, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'container text-center' },
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'Welcome to the React Redux Starter Kit'
	        ),
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'Sample Counter: ',
	          this.props.counter
	        ),
	        _react2['default'].createElement(
	          'button',
	          { className: 'btn btn-default',
	            onClick: this.props.actions.increment },
	          'Increment'
	        )
	      );
	    }
	  }]);
	
	  var _HomeView = HomeView;
	  HomeView = _wrapComponent('_$HomeView')(HomeView) || HomeView;
	  return HomeView;
	})(_react2['default'].Component);
	
	exports.HomeView = HomeView;
	exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomeView);

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(189), __esModule: true };

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(98)["default"];
	
	exports["default"] = function (obj, key, value) {
	  if (key in obj) {
	    _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(20);
	__webpack_require__(215);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(106);
	
	__webpack_require__(103)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(219)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"], input[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n", ""]);
	
	// exports


/***/ },

/***/ 219:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 267:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	exports['default'] = catchErrors;
	
	function catchErrors(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	
	  var _imports = _slicedToArray(imports, 2);
	
	  var React = _imports[0];
	  var ErrorReporter = _imports[1];
	
	  if (!React || !React.Component) {
	    throw new Error('imports[0] for react-transform-catch-errors does not look like React.');
	  }
	  if (typeof ErrorReporter !== 'function') {
	    throw new Error('imports[1] for react-transform-catch-errors does not look like a React component.');
	  }
	
	  return function wrapToCatchErrors(ReactClass, componentId) {
	    var originalRender = ReactClass.prototype.render;
	    ReactClass.prototype.render = function tryRender() {
	      try {
	        return originalRender.apply(this, arguments);
	      } catch (err) {
	        if (console.reportErrorsAsExceptions) {
	          // Stop react-native from triggering its own error handler
	          console.reportErrorsAsExceptions = false;
	          console.error(err);
	          // Reactivate it so other errors are still handled
	          console.reportErrorsAsExceptions = true;
	        } else {
	          console.error(err);
	        }
	        return React.createElement(ErrorReporter, {
	          error: err,
	          filename: filename
	        });
	      }
	    };
	    return ReactClass;
	  };
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 339:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = {
	  redbox: {
	    boxSizing: 'border-box',
	    fontFamily: 'sans-serif',
	    position: 'fixed',
	    padding: 10,
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	    width: '100%',
	    background: 'rgb(204, 0, 0)',
	    color: 'white',
	    zIndex: 9999,
	    textAlign: 'left',
	    fontSize: '16px',
	    lineHeight: 1.2
	  },
	  message: {
	    fontWeight: 'bold'
	  },
	  stack: {
	    fontFamily: 'monospace',
	    marginTop: '2em'
	  },
	  frame: {
	    marginTop: '1em'
	  },
	  file: {
	    fontSize: '0.8em',
	    color: 'rgba(255, 255, 255, 0.7)'
	  },
	  linkToFile: {
	    textDecoration: 'none',
	    color: 'rgba(255, 255, 255, 0.7)'
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(341)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('stackframe'));
	    } else {
	        root.ErrorStackParser = factory(root.StackFrame);
	    }
	}(this, function ErrorStackParser(StackFrame) {
	    'use strict';
	
	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
	    var CHROME_IE_STACK_REGEXP = /\s+at .*(\S+\:\d+|\(native\))/;
	
	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         * @param error {Error}
	         * @return Array[StackFrame]
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack && error.stack.match(FIREFOX_SAFARI_STACK_REGEXP)) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },
	
	        /**
	         * Separate line and column numbers from a URL-like string.
	         * @param urlLike String
	         * @return Array[String]
	         */
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }
	
	            var locationParts = urlLike.replace(/[\(\)\s]/g, '').split(':');
	            var lastNumber = locationParts.pop();
	            var possibleNumber = locationParts[locationParts.length - 1];
	            if (!isNaN(parseFloat(possibleNumber)) && isFinite(possibleNumber)) {
	                var lineNumber = locationParts.pop();
	                return [locationParts.join(':'), lineNumber, lastNumber];
	            } else {
	                return [locationParts.join(':'), lastNumber, undefined];
	            }
	        },
	
	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            return error.stack.split('\n').filter(function (line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this).map(function (line) {
	                var tokens = line.replace(/^\s+/, '').split(/\s+/).slice(1);
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = (!tokens[0] || tokens[0] === 'Anonymous') ? undefined : tokens[0];
	                return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            return error.stack.split('\n').filter(function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP);
	            }, this).map(function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.shift() || undefined;
	                return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
	                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },
	
	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];
	
	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];
	
	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            return error.stack.split('\n').filter(function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
	                    !line.match(/^Error created at/);
	            }, this).map(function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = (tokens.shift() || '');
	                var functionName = functionCall
	                        .replace(/<anonymous function(: (\w+))?>/, '$2')
	                        .replace(/\([^\)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^\)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
	                }
	                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ? undefined : argsRaw.split(',');
	                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        }
	    };
	}));
	


/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.StackFrame = factory();
	    }
	}(this, function () {
	    'use strict';
	    function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	    }
	
	    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
	        if (functionName !== undefined) {
	            this.setFunctionName(functionName);
	        }
	        if (args !== undefined) {
	            this.setArgs(args);
	        }
	        if (fileName !== undefined) {
	            this.setFileName(fileName);
	        }
	        if (lineNumber !== undefined) {
	            this.setLineNumber(lineNumber);
	        }
	        if (columnNumber !== undefined) {
	            this.setColumnNumber(columnNumber);
	        }
	        if (source !== undefined) {
	            this.setSource(source);
	        }
	    }
	
	    StackFrame.prototype = {
	        getFunctionName: function () {
	            return this.functionName;
	        },
	        setFunctionName: function (v) {
	            this.functionName = String(v);
	        },
	
	        getArgs: function () {
	            return this.args;
	        },
	        setArgs: function (v) {
	            if (Object.prototype.toString.call(v) !== '[object Array]') {
	                throw new TypeError('Args must be an Array');
	            }
	            this.args = v;
	        },
	
	        // NOTE: Property name may be misleading as it includes the path,
	        // but it somewhat mirrors V8's JavaScriptStackTraceApi
	        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
	        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
	        getFileName: function () {
	            return this.fileName;
	        },
	        setFileName: function (v) {
	            this.fileName = String(v);
	        },
	
	        getLineNumber: function () {
	            return this.lineNumber;
	        },
	        setLineNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Line Number must be a Number');
	            }
	            this.lineNumber = Number(v);
	        },
	
	        getColumnNumber: function () {
	            return this.columnNumber;
	        },
	        setColumnNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Column Number must be a Number');
	            }
	            this.columnNumber = Number(v);
	        },
	
	        getSource: function () {
	            return this.source;
	        },
	        setSource: function (v) {
	            this.source = String(v);
	        },
	
	        toString: function() {
	            var functionName = this.getFunctionName() || '{anonymous}';
	            var args = '(' + (this.getArgs() || []).join(',') + ')';
	            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
	            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
	            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
	            return functionName + args + fileName + lineNumber + columnNumber;
	        }
	    };
	
	    return StackFrame;
	}));


/***/ },

/***/ 342:
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },

/***/ 412:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = thunkMiddleware;
	
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(218);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(417)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js?includePaths[]=/home/shigeru/test/ur/src/styles!./core.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js?includePaths[]=/home/shigeru/test/ur/src/styles!./core.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=app.d7cabb0e123f4e58c6ba.js.map
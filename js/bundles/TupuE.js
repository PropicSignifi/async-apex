var pageComponent =
webpackJsonppageComponent([12],{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

var _indexSoy = __webpack_require__(271);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TupuE = function (_Component) {
  _inherits(TupuE, _Component);

  function TupuE() {
    _classCallCheck(this, TupuE);

    return _possibleConstructorReturn(this, (TupuE.__proto__ || Object.getPrototypeOf(TupuE)).apply(this, arguments));
  }

  return TupuE;
}(_metalComponent2.default);

;

_metalSoy2.default.register(TupuE, _indexSoy2.default);

exports.default = TupuE;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.TupuE = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace TupuE.
   * @public
   */

  goog.module('TupuE.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param468 = function param468() {
      ie_open('h6');
      var dyn35 = opt_data.page.description;
      if (typeof dyn35 == 'function') dyn35();else if (dyn35 != null) itext(dyn35);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is Async.Executor?');
      ie_close('h2');
      ie_open('p');
      itext('Async.Executor is an object that wraps a piece of code to be executed asynchronously in Async.');
      ie_close('p');
      ie_open('p');
      itext('Fundamentally, Async.Executor is a Func object that has ');
      ie_open('code');
      itext('resolve');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('reject');
      ie_close('code');
      itext(' methods.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('How to Create an Async.Executor?');
      ie_close('h2');
      $templateAlias2({ code: 'public class HelloWorldExecutor extends Async.Executor {\n    public HelloWorldExecutor() {\n        super(0);\n    }\n\n    public override Object exec() {\n        this.resolve(\'HelloWorld\');\n    }\n}\n\nAsync promise = new Async(new HelloWorldExecutor());', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Simplified Async.Executor');
      ie_close('h2');
      ie_open('p');
      itext('Most of the time we can use a Func as a simplified Async.Executor.');
      ie_close('p');
      $templateAlias2({ code: 'public class HelloWorldFunc extends Func {\n    public HelloWorldFunc() {\n        super(0);\n    }\n\n    public override Object exec() {\n        return \'HelloWorld\';\n    }\n}\n\nAsync promise = new Async(new HelloWorldFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param468 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'TupuE.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var TupuE = function (_Component) {
  _inherits(TupuE, _Component);

  function TupuE() {
    _classCallCheck(this, TupuE);

    return _possibleConstructorReturn(this, (TupuE.__proto__ || Object.getPrototypeOf(TupuE)).apply(this, arguments));
  }

  return TupuE;
}(_metalComponent2.default);

_metalSoy2.default.register(TupuE, templates);
exports.TupuE = TupuE;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);
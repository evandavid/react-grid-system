'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _ClearFix = require('../../utilities/ClearFix');

var _ClearFix2 = _interopRequireDefault(_ClearFix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$PureComponent) {
  _inherits(Row, _React$PureComponent);

  function Row() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Row.__proto__ || Object.getPrototypeOf(Row)).call.apply(_ref, [this].concat(args))), _this), _this.getChildContext = function () {
      return {
        gutterWidth: _this.props.nogutter ? 0 : _this.context.gutterWidth
      };
    }, _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          style = _this$props.style,
          align = _this$props.align,
          debug = _this$props.debug,
          nogutter = _this$props.nogutter,
          otherProps = _objectWithoutProperties(_this$props, ['children', 'style', 'align', 'debug', 'nogutter']);

      var theStyle = (0, _style2.default)({
        gutterWidth: nogutter ? 0 : _this.context.gutterWidth,
        align: align,
        debug: debug,
        moreStyle: style
      });
      return _react2.default.createElement(
        'div',
        _extends({ style: theStyle }, otherProps),
        children,
        _react2.default.createElement(_ClearFix2.default, { xs: true, sm: true, md: true, lg: true, xl: true })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Row;
}(_react2.default.PureComponent);

Row.propTypes = {
  /**
   * Content of the element
   */
  children: _propTypes2.default.node.isRequired,
  /**
  * Column alignment
  */
  align: _propTypes2.default.oneOf(['normal', 'start', 'center', 'end']),
  /**
  * No gutter for this row
  */
  nogutter: _propTypes2.default.bool,
  /**
  * Optional styling
  */
  style: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),
  /**
    * Set to apply some debug styling
    */
  debug: _propTypes2.default.bool
};
Row.defaultProps = {
  align: 'normal',
  nogutter: false,
  style: {},
  debug: false
};
Row.contextTypes = {
  gutterWidth: _propTypes2.default.number
};
Row.childContextTypes = {
  gutterWidth: _propTypes2.default.number
};
exports.default = Row;
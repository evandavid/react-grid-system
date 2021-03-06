'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

var hasWidth = function hasWidth(widths) {
  return Object.keys(widths).reduce(function (acc, cur) {
    return acc || widths[cur];
  }, false);
};

var getWidth = function getWidth(width) {
  if (typeof width !== 'number') return undefined;
  var colWidth = (0, _utils.normalizeColumnWidth)(width);
  return 100 / 12 * colWidth + '%';
};

exports.default = function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? {} : _ref$width,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? {} : _ref$offset,
      _ref$pull = _ref.pull,
      pull = _ref$pull === undefined ? {} : _ref$pull,
      _ref$push = _ref.push,
      push = _ref$push === undefined ? {} : _ref$push,
      debug = _ref.debug,
      screenClass = _ref.screenClass,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : _utils.defaultGutterWidth;

  var styles = _extends({
    boxSizing: 'border-box',
    minHeight: '1px',
    position: 'relative',
    paddingLeft: theGutterWidth / 2 + 'px',
    paddingRight: theGutterWidth / 2 + 'px',
    width: '100%',
    overflow: 'hidden'
  }, moreStyle);

  if (debug) {
    styles.outline = '1px solid silver';
    styles.background = 'rgba(0,0,0,.05)';
  }

  styles.flexBasis = '100%';
  styles.flexGrow = 0;
  styles.flexShrink = 0;
  styles.maxWidth = '100%';
  styles.marginLeft = '0%';
  styles.right = 'auto';
  styles.left = 'auto';

  _utils.screenClasses.forEach(function (size, index) {
    if (_utils.screenClasses.indexOf(screenClass) >= index) {
      styles.flexBasis = getWidth(width[size]) || styles.flexBasis;
      styles.maxWidth = getWidth(width[size]) || styles.maxWidth;
      styles.marginLeft = getWidth(offset[size]) || styles.marginLeft;
      styles.right = getWidth(pull[size]) || styles.right;
      styles.left = getWidth(push[size]) || styles.left;
    }
  });

  if (!hasWidth(width)) {
    styles.flexBasis = 0;
    styles.flexGrow = 1;
  }

  return styles;
};
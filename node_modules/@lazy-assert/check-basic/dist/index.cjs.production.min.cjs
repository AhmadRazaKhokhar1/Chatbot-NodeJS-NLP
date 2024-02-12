"use strict";

function isNum(i) {
  return "number" == typeof i && i === +i;
}

function isInt(i) {
  return i === Math.floor(i);
}

function isFloat(i) {
  return isNum(i) && !isInt(i);
}

function isFiniteNum(i) {
  return isNum(i) && isFinite(i);
}

function isUnSafeNumString(i) {
  return "string" == typeof i && "" !== (i = i.trim()) && isFinite(+i);
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.isFiniteFloat = function isFiniteFloat(i) {
  return isFiniteNum(i) && isFloat(i);
}, exports.isFiniteInt = function isFiniteInt(i) {
  return isFiniteNum(i) && isInt(i);
}, exports.isFiniteNum = isFiniteNum, exports.isFloat = isFloat, exports.isInfinity = function isInfinity(i) {
  return Infinity === i || -Infinity === i;
}, exports.isInt = isInt, exports.isNaN = function isNaN(i) {
  return Number.isNaN(i);
}, exports.isNegative = function isNegative(i) {
  return isNum(i) && (i < 0 || -Infinity === i);
}, exports.isNum = isNum, exports.isPositive = function isPositive(i) {
  return isNum(i) && (i > 0 || Infinity === i);
}, exports.isUnSafeNumLike = function isUnSafeNumLike(i) {
  return isFiniteNum(i) || isUnSafeNumString(i);
}, exports.isUnSafeNumString = isUnSafeNumString, exports.isZero = function isZero(i) {
  return 0 === i || -0 === i;
};
//# sourceMappingURL=index.cjs.production.min.cjs.map

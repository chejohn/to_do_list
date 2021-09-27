/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");



"use strict";

const MakeListItem = (dueDate, taskName, taskDetails, projectName) => {
    
    let _dueDate = dueDate;
    let _taskName = taskName;
    let _taskDetails = taskDetails;
    let _projectName = projectName.trim();
    let _uniqueID = GlobalVars.uniqueID++;
    let _previousProjectName;

    const getDueDate = () => _dueDate;

    const getTaskName = () => _taskName;

    const getTaskDetails = () => _taskDetails;

    const getProjectName = () => _projectName;

    const getID = () => _uniqueID;

    const editDueDate = (newDueDate) => _dueDate = newDueDate;

    const editTaskName = (newTaskName) => _taskName = newTaskName;

    const editTaskDetails = (newTaskDetails) => _taskDetails = newTaskDetails;

    const editProjectName = (newProjectName) => {
        _previousProjectName = _projectName;
        _projectName = newProjectName.trim();
    }

    const getLastProjectName = () => {
        return _previousProjectName;
    }

    return {getDueDate, getTaskName, getProjectName, 
        getTaskDetails,editDueDate, 
        editTaskDetails, editTaskName, editProjectName, getID, getLastProjectName};
}

const retrieveListObject = (guiComponent) => {
    const listIndex = guiComponent.getAttribute('data-id');
    const listObject = SectionContainers.homeContainer[listIndex];
    return listObject;
}

const displayHomeList = () => {
    for (const list of GlobalVars.mainContentGUI.children) {
        if (list.className === 'addTask-container') break;
        list.style.display = 'flex';
    }
}

const displayTodayList = () => {
    for (const list of GlobalVars.mainContentGUI.children) {
        if (list.className === 'addTask-container') break;
        const listObject = retrieveListObject(list);
        const dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(listObject.getDueDate());
        if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(dueDate)) {
            list.style.display = 'none';
        }
        else {
            list.style.display = 'flex';
        }
    }
}

const displayWeekList = () => {
    for (const list of GlobalVars.mainContentGUI.children) {
        if (list.className === 'addTask-container') break;
        const listObject = retrieveListObject(list);
        const dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(listObject.getDueDate());
        if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dueDate)) {
            list.style.display = 'none';
        }
        else {
            list.style.display = 'flex';
        }
    }
}

const displayProjectList = (e) => {
    if (e.target.className !== 'projects' && e.target.className !== 'chore-count'
    && e.target.className !== 'chore-name') return;

    if (e.target.className === 'projects') {
        var projectNameGUI = e.target.children[1].textContent;
    }
    else if (e.target.className === 'chore-count') {
        projectNameGUI = e.target.nextElementSibling.textContent;
    }

    else if (e.target.className === 'chore-name') {
        projectNameGUI = e.target.textContent;
    }

    for (const list of GlobalVars.mainContentGUI.children) {
        if (list.className === 'addTask-container') break;
        const listObject = retrieveListObject(list);
        const projectName = listObject.getProjectName();
        
        if (projectName !== projectNameGUI) {
            list.style.display = 'none';
        }
        else {
            list.style.display = 'flex';
        }
    }
}

const switchTabs = (e) => {
    const tabText = e.target.textContent;
    if (tabText === 'Home') {
        displayHomeList();
    }
    else if (tabText === 'Today') {
        displayTodayList();
    }
    else if (tabText === 'Week') {
        displayWeekList();
    }
    else {
        displayProjectList(e);
    }
}

const manageListAPI = (e) => {
    const formContainer = e.target.parentNode.parentNode;
    if (e.target.className === 'addTask-container' || 
    e.target.id === 'addTask-text' || e.target.id === 'addTask-bttn' || e.target.id === 'edit') {
        showForm(e);
    }
    else if (e.target.id === 'cancelIcon') {
        cancelForm(e);
    }
    else if (e.target.id === 'checkmarkIcon') {
        let listObject;
        if (formContainer.className === 'addTask-form') {
            listObject = createListObject(e);

        }
        else if (formContainer.className === 'editTask-form') {
            listObject = editListObject(e);
        }
        const listGUI = createListGUI(e, listObject);
        appendListGUI(e, listGUI);
        updateSectionContainers(e, listObject);
        updateProjectTabsGUI(e, listObject);
    }
    else if (e.target.className === 'checkbox') {
        strikeOutList(e);
    }
    else if (e.target.id === 'trash') {
        const listGUI = e.target.parentNode.parentNode;
        const listIndex = listGUI.getAttribute('data-id');
        const listObject = SectionContainers.homeContainer[listIndex];
        updateSectionContainers(e, listObject);
        updateProjectTabsGUI(e, listObject);
        deleteListGUI(listGUI);
        changeGUIDataIDs(e);
    }
}

const changeGUIDataIDs = (e) => {
    GlobalVars.listCounter--;
    let counter = 0;
    for (const listGUI of GlobalVars.mainContentGUI.children) {
        listGUI.setAttribute('data-id', `${counter}`);
        counter++;
    }
}

const deleteListGUI = (listGUI) => {
    listGUI.remove();
}

const appendListGUI = (e, listGUI) => {
    const formContainer = e.target.parentNode.parentNode;
    if (formContainer.className === 'addTask-form') {
        GlobalVars.mainContentGUI.appendChild(GlobalVars.addTaskGUI);
        GlobalVars.mainContentGUI.insertBefore(listGUI, GlobalVars.addTaskGUI);
    }
    else if (formContainer.className === 'editTask-form') {
        const nextSibling = formContainer.nextSibling;
        GlobalVars.mainContentGUI.insertBefore(listGUI, nextSibling);
    }
    formContainer.remove();
}

const editListObject = (e) => {
    const formContainer = e.target.parentNode.parentNode;

    const listIndex = formContainer.getAttribute('data-id');
    const listObject = SectionContainers.homeContainer[listIndex];
    const formInfo = accessFormFields(e);

    const taskTitle = formInfo.taskTitle;
    const taskDetails = formInfo.taskDetails;
    const taskProjectName = formInfo.taskProjectName;
    const taskDueDate = formInfo.taskDate;

    listObject.editDueDate(taskDueDate);
    listObject.editTaskName(taskTitle);
    listObject.editTaskDetails(taskDetails);
    listObject.editProjectName(taskProjectName);
    
    return listObject;
}

const strikeOutList = (e) => {
    const listGUI = e.target.parentNode.parentNode;
    listGUI.classList.toggle('checked-list-item');
}

const showForm = (e) => {
    const formGUICopy = GlobalVars.formGUI.cloneNode(true);
    
    if (e.target.className === 'addTask-container' || 
    e.target.id === 'addTask-text' || e.target.id === 'addTask-bttn') {
        formGUICopy.className = 'addTask-form'
        GlobalVars.addTaskGUI.remove();
        GlobalVars.mainContentGUI.appendChild(formGUICopy);
    }
    else if (e.target.id === 'edit') {
        formGUICopy.className = 'editTask-form';

        const listGUI = e.target.parentNode.parentNode;
        const listObjectIndex = listGUI.getAttribute('data-id');
        const listObject = SectionContainers.homeContainer[listObjectIndex];

        const nextSiblingGUI = listGUI.nextSibling;
        listGUI.remove();
        prepareEditFormGUI(formGUICopy, listObject, listGUI);
        GlobalVars.mainContentGUI.insertBefore(formGUICopy, nextSiblingGUI);
    }
}

const prepareEditFormGUI = (formGUI, listObject, listGUI) => {
    const formTitle = formGUI.children[0].children[0];
    const formDetails = formGUI.children[0].children[1];
    const formDate = formGUI.children[0].children[2].children[0];
    const formProjectName = formGUI.children[0].children[2].children[1];

    formTitle.value = listObject.getTaskName();
    formDetails.value = listObject.getTaskDetails();
    formDate.value = listObject.getDueDate();
    formProjectName.value = listObject.getProjectName();

    const listIndex = listGUI.getAttribute('data-id')
    formGUI.setAttribute('data-id', listIndex);
}

const cancelForm = (e) => {
    const formContainer = e.target.parentNode.parentNode;
    if (formContainer.className === 'addTask-form') {
        GlobalVars.mainContentGUI.appendChild(GlobalVars.addTaskGUI);
    }
    else if (formContainer.className === 'editTask-form') {
        const nextSiblingNode = formContainer.nextSibling;
        const listIndex = formContainer.getAttribute('data-id');
        const listObject = SectionContainers.homeContainer[listIndex];
        const listGUI = createListGUI(e, listObject);
        GlobalVars.mainContentGUI.insertBefore(listGUI, nextSiblingNode);
    }
    formContainer.remove();
}

const createListObject = (e) => {
    const formInfo = accessFormFields(e);
    const taskTitle = formInfo.taskTitle;
    const taskDetails = formInfo.taskDetails;
    const taskDate = formInfo.taskDate;
    const taskProjectName = formInfo.taskProjectName;
    const listObject = MakeListItem(taskDate, taskTitle, taskDetails, taskProjectName);
    return listObject;
}

const accessFormFields = (e) => {
    const formGUI = e.target.parentNode.parentNode.children[0];
    const taskTitle = formGUI.children[0].value;
    const taskDetails = formGUI.children[1].value;
    const taskDate = formGUI.children[2].children[0].value;
    const taskProjectName = formGUI.children[2].children[1].value;

    return {taskTitle, taskDetails, taskDate, taskProjectName};
}

const updateSectionContainers = (e, listObject) => {
    const formContainer = e.target.parentNode.parentNode;
    const dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(listObject.getDueDate());
    const projectName = listObject.getProjectName();
    const uniqueID = listObject.getID();

    if (formContainer.className === 'addTask-form') {
        SectionContainers.homeContainer.push(listObject);
        
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(dueDate)) {
            SectionContainers.todayContainer.push(listObject);
        }
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dueDate)) {
            SectionContainers.weekContainer.push(listObject);
        }
    
        if (projectName !== '') {
            if (!SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
                SectionContainers.projectsContainer[projectName] = [listObject];
            }
            else {
                SectionContainers.projectsContainer[projectName].push(listObject);
            }
        }
    }

    else if (formContainer.className === 'editTask-form') {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(dueDate)) {
            let notInContainer = true;
            for (const list of SectionContainers.todayContainer) {
                if (list.getID() === uniqueID) {
                    notInContainer = false;
                    break;
                }
            }
            if (notInContainer) {
                SectionContainers.todayContainer.push(listObject);
            }
        }
        else if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(dueDate)) {
            let counter = 0;
            for (const list of SectionContainers.todayContainer) {
                if (list.getID() === uniqueID) {
                    SectionContainers.todayContainer.splice(counter, 1);
                    break;
                }
                counter++;
            }
        }

        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dueDate)) {
            let notInContainer = true;
            for (const list of SectionContainers.weekContainer) {
                if (list.getID() === uniqueID) {
                    notInContainer = false;
                    break;
                }
            }
            if (notInContainer) {
                SectionContainers.weekContainer.push(listObject);
            }
        }
        else if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dueDate)) {
            let counter = 0;
            for (const list of SectionContainers.weekContainer) {
                if (list.getID() === uniqueID) {
                    SectionContainers.weekContainer.splice(counter, 1);
                    break;
                }
                counter++;
            }
        }

        const lastProjectName = listObject.getLastProjectName();
        if (lastProjectName === '' && projectName !== '') {
            if (SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
                SectionContainers.projectsContainer[projectName].push(listObject);
            }
            else {
                SectionContainers.projectsContainer[projectName] = [listObject];
            }
        }
        else if (lastProjectName !== '') {
            if (lastProjectName === projectName) return;
            // lastProjectName !== projectName
            else {
                const oldContainer = SectionContainers.projectsContainer[lastProjectName];
                let counter = 0;
                for (const list of oldContainer) {
                    if (list.getID() === uniqueID) {
                        oldContainer.splice(counter, 1);
                        if (oldContainer.length < 1) {
                            delete SectionContainers.projectsContainer[lastProjectName];
                        }
                        break;
                    }
                    counter++;
                }
                if (SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
                    SectionContainers.projectsContainer[projectName].push(listObject);
                }
                // key does not exist in dictionary
                else if (projectName !== '') {
                    SectionContainers.projectsContainer[projectName] = [listObject];
                }
            }
        }
    }
    // else if the trash bttn is pressed
    else {
        const listGUI = e.target.parentNode.parentNode;
        const listIndex = listGUI.getAttribute('data-id');
        SectionContainers.homeContainer.splice(listIndex, 1);
        
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(dueDate)) {
            let counter = 0;
            for (const list of SectionContainers.todayContainer) {
                if (list.getID() === uniqueID) {
                    SectionContainers.todayContainer.splice(counter, 1);
                    break;
                }
                counter++
            }
        }

        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dueDate)) {
            let counter = 0;
            for (const list of SectionContainers.weekContainer) {
                if (list.getID() === uniqueID) {
                    SectionContainers.weekContainer.splice(counter, 1);
                    break;
                }
                counter++;
            }
        }

        if (SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
            let counter = 0;
            for (const list of SectionContainers.projectsContainer[projectName]) {
                if (list.getID() === uniqueID) {
                    SectionContainers.projectsContainer[projectName].splice(counter, 1);
                    if (SectionContainers.projectsContainer[projectName].length < 1) {
                        delete SectionContainers.projectsContainer[projectName];
                    }
                    break;
                }
                counter++;
            }
        }
    }
}

const createListGUI = (e, listObject) => {
    const formContainer = e.target.parentNode.parentNode;

    const listGUICopy = GlobalVars.listGUI.cloneNode(true);

    const taskTitle = listGUICopy.children[0].children[1];
    const taskDueDate = listGUICopy.children[1].children[0];
    taskTitle.textContent = listObject.getTaskName();
    taskDueDate.textContent = listObject.getDueDate();

    if (formContainer.className === 'addTask-form') {
        listGUICopy.setAttribute('data-id', `${GlobalVars.listCounter}`);
        GlobalVars.listCounter++;
    }
    else if (formContainer.className === 'editTask-form') {
        const listIndex = formContainer.getAttribute('data-id');
        listGUICopy.setAttribute('data-id', listIndex);
    }
    return listGUICopy;
}

const updateProjectTabsGUI = (e, listObject) => {
    const formContainer = e.target.parentNode.parentNode;
    const projectName = listObject.getProjectName();

    if (formContainer.className === 'addTask-form') {
        if (projectName === '') return;

        if (SectionContainers.projectsContainer[projectName].length > 1) {
            // iterate through tabs and increment project count
            for (const tabGUI of GlobalVars.projectContainerGUI.children) {
                if (tabGUI.children[1].textContent === projectName) {
                    updateProjectCountGUI(tabGUI, projectName);
                    return;
                }
            }
        }
        else {
            createTabGUI(projectName);
        }
    }
    else if (formContainer.className === 'editTask-form') {
        const lastProjectName = listObject.getLastProjectName();

        if (lastProjectName !== '' && lastProjectName !== projectName) {
            for (const tab of GlobalVars.projectContainerGUI.children) {
                if (tab.children[1].textContent === lastProjectName) {
                    if (!SectionContainers.projectsContainer.hasOwnProperty(lastProjectName)) {
                        tab.remove();
                    }
                    else {
                        updateProjectCountGUI(tab, lastProjectName);
                    }
                    break;
                }
            }
        }
        if (lastProjectName === '' && projectName !== '' || (projectName !== '')) {
            for (const tab of GlobalVars.projectContainerGUI.children) {
                if (tab.children[1].textContent === projectName) {
                    updateProjectCountGUI(tab, projectName);
                    return;
                }
            }
            // if (tab does not exist)
            createTabGUI(projectName);
        }
    }
    // delete bttn is pressed
    else {
        if (projectName !== '') {
            for (const tab of GlobalVars.projectContainerGUI.children) {
                if (tab.children[1].textContent === projectName) {
                    if (!SectionContainers.projectsContainer.hasOwnProperty(projectName)) {
                        tab.remove();
                    }
                    else {
                        tab.children[0].textContent = SectionContainers.projectsContainer[projectName].length;
                    }
                    break;
                }
            }
        }
    }
}

const createTabGUI = (projectName) => {
            const projectTabGUICopy = GlobalVars.projectTabGUI.cloneNode(true);
            const projectCountGUI = projectTabGUICopy.children[0];
            const projectNameGUI = projectTabGUICopy.children[1];
            projectCountGUI.textContent = '1';
            projectNameGUI.textContent = projectName;
            GlobalVars.projectContainerGUI.appendChild(projectTabGUICopy);
}

const updateProjectCountGUI = (tabGUI, projectName) => {
    const projectCount = SectionContainers.projectsContainer[projectName].length;
    tabGUI.children[0].textContent = projectCount;
}

const SectionContainers = (function() {
    const homeContainer = [];
    const todayContainer = [];
    const weekContainer = [];
    const projectsContainer = {};

    return {homeContainer, todayContainer, weekContainer, projectsContainer}
})();

const GlobalVars = (function() {
    let uniqueID = -1;
    let listCounter = 0;

    const addTaskGUI = document.querySelector('.addTask-container');
    
    const formGUI = document.querySelector('#list-form-container');
    formGUI.remove();

    const listGUI = document.querySelector('.list-item');
    listGUI.remove();

    const projectContainerGUI = document.querySelector('#project-container');
    const projectTabGUI = document.querySelector('.projects');
    projectTabGUI.remove();

    const mainContentGUI = document.querySelector('#main-content');
    mainContentGUI.addEventListener('click', manageListAPI);

    const tabContainer = document.querySelector('#tab-container');
    tabContainer.addEventListener('click', switchTabs);

    return {addTaskGUI, formGUI, mainContentGUI, 
        listGUI, projectTabGUI, projectContainerGUI, 
        listCounter, uniqueID};
})();








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFRO0FBQ2hDLGFBQWEsb0RBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixvREFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQU87QUFDbkI7QUFDQTtBQUNBLFlBQVksb0RBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxvREFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG9EQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG9EQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyx1QkFBdUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMDtcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDA7XG52YXIgREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA9IDI7XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHByZXZpb3VzIGBwYXJzZWAgaW1wbGVtZW50YXRpb24gd2FzIHJlbmFtZWQgdG8gYHBhcnNlSVNPYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBwYXJzZSgnMjAxNi0wMS0wMScpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIHBhcnNlSVNPKCcyMDE2LTAxLTAxJylcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyB2YWxpZGF0ZXMgc2VwYXJhdGUgZGF0ZSBhbmQgdGltZSB2YWx1ZXMgaW4gSVNPLTg2MDEgc3RyaW5nc1xuICogICBhbmQgcmV0dXJucyBgSW52YWxpZCBEYXRlYCBpZiB0aGUgZGF0ZSBpcyBpbnZhbGlkLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBwYXJzZUlTTygnMjAxOC0xMy0zMicpXG4gKiAgIC8vPT4gSW52YWxpZCBEYXRlXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgZG9lc24ndCBmYWxsIGJhY2sgdG8gYG5ldyBEYXRlYCBjb25zdHJ1Y3RvclxuICogICBpZiBpdCBmYWlscyB0byBwYXJzZSBhIHN0cmluZyBhcmd1bWVudC4gSW5zdGVhZCwgaXQgcmV0dXJucyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoaXNOYU4oZGF0ZSkgfHwgIWRhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSB8fCB0aW1lID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gbnVsbDtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdICYmIHBhcnNlSW50KGNhcHR1cmVzWzFdKTtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSAmJiBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG51bGw7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQge2lzVG9kYXksIHBhcnNlSVNPLCBpc1RoaXNXZWVrfSBmcm9tICdkYXRlLWZucyc7XG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBNYWtlTGlzdEl0ZW0gPSAoZHVlRGF0ZSwgdGFza05hbWUsIHRhc2tEZXRhaWxzLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIFxuICAgIGxldCBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbGV0IF90YXNrTmFtZSA9IHRhc2tOYW1lO1xuICAgIGxldCBfdGFza0RldGFpbHMgPSB0YXNrRGV0YWlscztcbiAgICBsZXQgX3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWUudHJpbSgpO1xuICAgIGxldCBfdW5pcXVlSUQgPSBHbG9iYWxWYXJzLnVuaXF1ZUlEKys7XG4gICAgbGV0IF9wcmV2aW91c1Byb2plY3ROYW1lO1xuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IF9kdWVEYXRlO1xuXG4gICAgY29uc3QgZ2V0VGFza05hbWUgPSAoKSA9PiBfdGFza05hbWU7XG5cbiAgICBjb25zdCBnZXRUYXNrRGV0YWlscyA9ICgpID0+IF90YXNrRGV0YWlscztcblxuICAgIGNvbnN0IGdldFByb2plY3ROYW1lID0gKCkgPT4gX3Byb2plY3ROYW1lO1xuXG4gICAgY29uc3QgZ2V0SUQgPSAoKSA9PiBfdW5pcXVlSUQ7XG5cbiAgICBjb25zdCBlZGl0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiBfZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG5cbiAgICBjb25zdCBlZGl0VGFza05hbWUgPSAobmV3VGFza05hbWUpID0+IF90YXNrTmFtZSA9IG5ld1Rhc2tOYW1lO1xuXG4gICAgY29uc3QgZWRpdFRhc2tEZXRhaWxzID0gKG5ld1Rhc2tEZXRhaWxzKSA9PiBfdGFza0RldGFpbHMgPSBuZXdUYXNrRGV0YWlscztcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBfcHJldmlvdXNQcm9qZWN0TmFtZSA9IF9wcm9qZWN0TmFtZTtcbiAgICAgICAgX3Byb2plY3ROYW1lID0gbmV3UHJvamVjdE5hbWUudHJpbSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExhc3RQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9wcmV2aW91c1Byb2plY3ROYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0RHVlRGF0ZSwgZ2V0VGFza05hbWUsIGdldFByb2plY3ROYW1lLCBcbiAgICAgICAgZ2V0VGFza0RldGFpbHMsZWRpdER1ZURhdGUsIFxuICAgICAgICBlZGl0VGFza0RldGFpbHMsIGVkaXRUYXNrTmFtZSwgZWRpdFByb2plY3ROYW1lLCBnZXRJRCwgZ2V0TGFzdFByb2plY3ROYW1lfTtcbn1cblxuY29uc3QgcmV0cmlldmVMaXN0T2JqZWN0ID0gKGd1aUNvbXBvbmVudCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJbmRleCA9IGd1aUNvbXBvbmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBjb25zdCBsaXN0T2JqZWN0ID0gU2VjdGlvbkNvbnRhaW5lcnMuaG9tZUNvbnRhaW5lcltsaXN0SW5kZXhdO1xuICAgIHJldHVybiBsaXN0T2JqZWN0O1xufVxuXG5jb25zdCBkaXNwbGF5SG9tZUxpc3QgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0IG9mIEdsb2JhbFZhcnMubWFpbkNvbnRlbnRHVUkuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGxpc3QuY2xhc3NOYW1lID09PSAnYWRkVGFzay1jb250YWluZXInKSBicmVhaztcbiAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbn1cblxuY29uc3QgZGlzcGxheVRvZGF5TGlzdCA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgR2xvYmFsVmFycy5tYWluQ29udGVudEdVSS5jaGlsZHJlbikge1xuICAgICAgICBpZiAobGlzdC5jbGFzc05hbWUgPT09ICdhZGRUYXNrLWNvbnRhaW5lcicpIGJyZWFrO1xuICAgICAgICBjb25zdCBsaXN0T2JqZWN0ID0gcmV0cmlldmVMaXN0T2JqZWN0KGxpc3QpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gcGFyc2VJU08obGlzdE9iamVjdC5nZXREdWVEYXRlKCkpO1xuICAgICAgICBpZiAoIWlzVG9kYXkoZHVlRGF0ZSkpIHtcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZGlzcGxheVdlZWtMaXN0ID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdCBvZiBHbG9iYWxWYXJzLm1haW5Db250ZW50R1VJLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChsaXN0LmNsYXNzTmFtZSA9PT0gJ2FkZFRhc2stY29udGFpbmVyJykgYnJlYWs7XG4gICAgICAgIGNvbnN0IGxpc3RPYmplY3QgPSByZXRyaWV2ZUxpc3RPYmplY3QobGlzdCk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBwYXJzZUlTTyhsaXN0T2JqZWN0LmdldER1ZURhdGUoKSk7XG4gICAgICAgIGlmICghaXNUaGlzV2VlayhkdWVEYXRlKSkge1xuICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBkaXNwbGF5UHJvamVjdExpc3QgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgIT09ICdwcm9qZWN0cycgJiYgZS50YXJnZXQuY2xhc3NOYW1lICE9PSAnY2hvcmUtY291bnQnXG4gICAgJiYgZS50YXJnZXQuY2xhc3NOYW1lICE9PSAnY2hvcmUtbmFtZScpIHJldHVybjtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwcm9qZWN0cycpIHtcbiAgICAgICAgdmFyIHByb2plY3ROYW1lR1VJID0gZS50YXJnZXQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nob3JlLWNvdW50Jykge1xuICAgICAgICBwcm9qZWN0TmFtZUdVSSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdjaG9yZS1uYW1lJykge1xuICAgICAgICBwcm9qZWN0TmFtZUdVSSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgbGlzdCBvZiBHbG9iYWxWYXJzLm1haW5Db250ZW50R1VJLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChsaXN0LmNsYXNzTmFtZSA9PT0gJ2FkZFRhc2stY29udGFpbmVyJykgYnJlYWs7XG4gICAgICAgIGNvbnN0IGxpc3RPYmplY3QgPSByZXRyaWV2ZUxpc3RPYmplY3QobGlzdCk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gbGlzdE9iamVjdC5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHByb2plY3ROYW1lICE9PSBwcm9qZWN0TmFtZUdVSSkge1xuICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBzd2l0Y2hUYWJzID0gKGUpID0+IHtcbiAgICBjb25zdCB0YWJUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgaWYgKHRhYlRleHQgPT09ICdIb21lJykge1xuICAgICAgICBkaXNwbGF5SG9tZUxpc3QoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGFiVGV4dCA9PT0gJ1RvZGF5Jykge1xuICAgICAgICBkaXNwbGF5VG9kYXlMaXN0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhYlRleHQgPT09ICdXZWVrJykge1xuICAgICAgICBkaXNwbGF5V2Vla0xpc3QoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0TGlzdChlKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hbmFnZUxpc3RBUEkgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FkZFRhc2stY29udGFpbmVyJyB8fCBcbiAgICBlLnRhcmdldC5pZCA9PT0gJ2FkZFRhc2stdGV4dCcgfHwgZS50YXJnZXQuaWQgPT09ICdhZGRUYXNrLWJ0dG4nIHx8IGUudGFyZ2V0LmlkID09PSAnZWRpdCcpIHtcbiAgICAgICAgc2hvd0Zvcm0oZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSAnY2FuY2VsSWNvbicpIHtcbiAgICAgICAgY2FuY2VsRm9ybShlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdjaGVja21hcmtJY29uJykge1xuICAgICAgICBsZXQgbGlzdE9iamVjdDtcbiAgICAgICAgaWYgKGZvcm1Db250YWluZXIuY2xhc3NOYW1lID09PSAnYWRkVGFzay1mb3JtJykge1xuICAgICAgICAgICAgbGlzdE9iamVjdCA9IGNyZWF0ZUxpc3RPYmplY3QoZSk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2VkaXRUYXNrLWZvcm0nKSB7XG4gICAgICAgICAgICBsaXN0T2JqZWN0ID0gZWRpdExpc3RPYmplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdEdVSSA9IGNyZWF0ZUxpc3RHVUkoZSwgbGlzdE9iamVjdCk7XG4gICAgICAgIGFwcGVuZExpc3RHVUkoZSwgbGlzdEdVSSk7XG4gICAgICAgIHVwZGF0ZVNlY3Rpb25Db250YWluZXJzKGUsIGxpc3RPYmplY3QpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0VGFic0dVSShlLCBsaXN0T2JqZWN0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHN0cmlrZU91dExpc3QoZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSAndHJhc2gnKSB7XG4gICAgICAgIGNvbnN0IGxpc3RHVUkgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGxpc3RJbmRleCA9IGxpc3RHVUkuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGNvbnN0IGxpc3RPYmplY3QgPSBTZWN0aW9uQ29udGFpbmVycy5ob21lQ29udGFpbmVyW2xpc3RJbmRleF07XG4gICAgICAgIHVwZGF0ZVNlY3Rpb25Db250YWluZXJzKGUsIGxpc3RPYmplY3QpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0VGFic0dVSShlLCBsaXN0T2JqZWN0KTtcbiAgICAgICAgZGVsZXRlTGlzdEdVSShsaXN0R1VJKTtcbiAgICAgICAgY2hhbmdlR1VJRGF0YUlEcyhlKTtcbiAgICB9XG59XG5cbmNvbnN0IGNoYW5nZUdVSURhdGFJRHMgPSAoZSkgPT4ge1xuICAgIEdsb2JhbFZhcnMubGlzdENvdW50ZXItLTtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yIChjb25zdCBsaXN0R1VJIG9mIEdsb2JhbFZhcnMubWFpbkNvbnRlbnRHVUkuY2hpbGRyZW4pIHtcbiAgICAgICAgbGlzdEdVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgJHtjb3VudGVyfWApO1xuICAgICAgICBjb3VudGVyKys7XG4gICAgfVxufVxuXG5jb25zdCBkZWxldGVMaXN0R1VJID0gKGxpc3RHVUkpID0+IHtcbiAgICBsaXN0R1VJLnJlbW92ZSgpO1xufVxuXG5jb25zdCBhcHBlbmRMaXN0R1VJID0gKGUsIGxpc3RHVUkpID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2FkZFRhc2stZm9ybScpIHtcbiAgICAgICAgR2xvYmFsVmFycy5tYWluQ29udGVudEdVSS5hcHBlbmRDaGlsZChHbG9iYWxWYXJzLmFkZFRhc2tHVUkpO1xuICAgICAgICBHbG9iYWxWYXJzLm1haW5Db250ZW50R1VJLmluc2VydEJlZm9yZShsaXN0R1VJLCBHbG9iYWxWYXJzLmFkZFRhc2tHVUkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2VkaXRUYXNrLWZvcm0nKSB7XG4gICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gZm9ybUNvbnRhaW5lci5uZXh0U2libGluZztcbiAgICAgICAgR2xvYmFsVmFycy5tYWluQ29udGVudEdVSS5pbnNlcnRCZWZvcmUobGlzdEdVSSwgbmV4dFNpYmxpbmcpO1xuICAgIH1cbiAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xufVxuXG5jb25zdCBlZGl0TGlzdE9iamVjdCA9IChlKSA9PiB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblxuICAgIGNvbnN0IGxpc3RJbmRleCA9IGZvcm1Db250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgY29uc3QgbGlzdE9iamVjdCA9IFNlY3Rpb25Db250YWluZXJzLmhvbWVDb250YWluZXJbbGlzdEluZGV4XTtcbiAgICBjb25zdCBmb3JtSW5mbyA9IGFjY2Vzc0Zvcm1GaWVsZHMoZSk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBmb3JtSW5mby50YXNrVGl0bGU7XG4gICAgY29uc3QgdGFza0RldGFpbHMgPSBmb3JtSW5mby50YXNrRGV0YWlscztcbiAgICBjb25zdCB0YXNrUHJvamVjdE5hbWUgPSBmb3JtSW5mby50YXNrUHJvamVjdE5hbWU7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBmb3JtSW5mby50YXNrRGF0ZTtcblxuICAgIGxpc3RPYmplY3QuZWRpdER1ZURhdGUodGFza0R1ZURhdGUpO1xuICAgIGxpc3RPYmplY3QuZWRpdFRhc2tOYW1lKHRhc2tUaXRsZSk7XG4gICAgbGlzdE9iamVjdC5lZGl0VGFza0RldGFpbHModGFza0RldGFpbHMpO1xuICAgIGxpc3RPYmplY3QuZWRpdFByb2plY3ROYW1lKHRhc2tQcm9qZWN0TmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIGxpc3RPYmplY3Q7XG59XG5cbmNvbnN0IHN0cmlrZU91dExpc3QgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGxpc3RHVUkgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgbGlzdEdVSS5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkLWxpc3QtaXRlbScpO1xufVxuXG5jb25zdCBzaG93Rm9ybSA9IChlKSA9PiB7XG4gICAgY29uc3QgZm9ybUdVSUNvcHkgPSBHbG9iYWxWYXJzLmZvcm1HVUkuY2xvbmVOb2RlKHRydWUpO1xuICAgIFxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdhZGRUYXNrLWNvbnRhaW5lcicgfHwgXG4gICAgZS50YXJnZXQuaWQgPT09ICdhZGRUYXNrLXRleHQnIHx8IGUudGFyZ2V0LmlkID09PSAnYWRkVGFzay1idHRuJykge1xuICAgICAgICBmb3JtR1VJQ29weS5jbGFzc05hbWUgPSAnYWRkVGFzay1mb3JtJ1xuICAgICAgICBHbG9iYWxWYXJzLmFkZFRhc2tHVUkucmVtb3ZlKCk7XG4gICAgICAgIEdsb2JhbFZhcnMubWFpbkNvbnRlbnRHVUkuYXBwZW5kQ2hpbGQoZm9ybUdVSUNvcHkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgIGZvcm1HVUlDb3B5LmNsYXNzTmFtZSA9ICdlZGl0VGFzay1mb3JtJztcblxuICAgICAgICBjb25zdCBsaXN0R1VJID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBsaXN0T2JqZWN0SW5kZXggPSBsaXN0R1VJLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBjb25zdCBsaXN0T2JqZWN0ID0gU2VjdGlvbkNvbnRhaW5lcnMuaG9tZUNvbnRhaW5lcltsaXN0T2JqZWN0SW5kZXhdO1xuXG4gICAgICAgIGNvbnN0IG5leHRTaWJsaW5nR1VJID0gbGlzdEdVSS5uZXh0U2libGluZztcbiAgICAgICAgbGlzdEdVSS5yZW1vdmUoKTtcbiAgICAgICAgcHJlcGFyZUVkaXRGb3JtR1VJKGZvcm1HVUlDb3B5LCBsaXN0T2JqZWN0LCBsaXN0R1VJKTtcbiAgICAgICAgR2xvYmFsVmFycy5tYWluQ29udGVudEdVSS5pbnNlcnRCZWZvcmUoZm9ybUdVSUNvcHksIG5leHRTaWJsaW5nR1VJKTtcbiAgICB9XG59XG5cbmNvbnN0IHByZXBhcmVFZGl0Rm9ybUdVSSA9IChmb3JtR1VJLCBsaXN0T2JqZWN0LCBsaXN0R1VJKSA9PiB7XG4gICAgY29uc3QgZm9ybVRpdGxlID0gZm9ybUdVSS5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcbiAgICBjb25zdCBmb3JtRGV0YWlscyA9IGZvcm1HVUkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG4gICAgY29uc3QgZm9ybURhdGUgPSBmb3JtR1VJLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IGZvcm1Qcm9qZWN0TmFtZSA9IGZvcm1HVUkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV07XG5cbiAgICBmb3JtVGl0bGUudmFsdWUgPSBsaXN0T2JqZWN0LmdldFRhc2tOYW1lKCk7XG4gICAgZm9ybURldGFpbHMudmFsdWUgPSBsaXN0T2JqZWN0LmdldFRhc2tEZXRhaWxzKCk7XG4gICAgZm9ybURhdGUudmFsdWUgPSBsaXN0T2JqZWN0LmdldER1ZURhdGUoKTtcbiAgICBmb3JtUHJvamVjdE5hbWUudmFsdWUgPSBsaXN0T2JqZWN0LmdldFByb2plY3ROYW1lKCk7XG5cbiAgICBjb25zdCBsaXN0SW5kZXggPSBsaXN0R1VJLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG4gICAgZm9ybUdVSS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBsaXN0SW5kZXgpO1xufVxuXG5jb25zdCBjYW5jZWxGb3JtID0gKGUpID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2FkZFRhc2stZm9ybScpIHtcbiAgICAgICAgR2xvYmFsVmFycy5tYWluQ29udGVudEdVSS5hcHBlbmRDaGlsZChHbG9iYWxWYXJzLmFkZFRhc2tHVUkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2VkaXRUYXNrLWZvcm0nKSB7XG4gICAgICAgIGNvbnN0IG5leHRTaWJsaW5nTm9kZSA9IGZvcm1Db250YWluZXIubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IGxpc3RJbmRleCA9IGZvcm1Db250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGNvbnN0IGxpc3RPYmplY3QgPSBTZWN0aW9uQ29udGFpbmVycy5ob21lQ29udGFpbmVyW2xpc3RJbmRleF07XG4gICAgICAgIGNvbnN0IGxpc3RHVUkgPSBjcmVhdGVMaXN0R1VJKGUsIGxpc3RPYmplY3QpO1xuICAgICAgICBHbG9iYWxWYXJzLm1haW5Db250ZW50R1VJLmluc2VydEJlZm9yZShsaXN0R1VJLCBuZXh0U2libGluZ05vZGUpO1xuICAgIH1cbiAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xufVxuXG5jb25zdCBjcmVhdGVMaXN0T2JqZWN0ID0gKGUpID0+IHtcbiAgICBjb25zdCBmb3JtSW5mbyA9IGFjY2Vzc0Zvcm1GaWVsZHMoZSk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gZm9ybUluZm8udGFza1RpdGxlO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZm9ybUluZm8udGFza0RldGFpbHM7XG4gICAgY29uc3QgdGFza0RhdGUgPSBmb3JtSW5mby50YXNrRGF0ZTtcbiAgICBjb25zdCB0YXNrUHJvamVjdE5hbWUgPSBmb3JtSW5mby50YXNrUHJvamVjdE5hbWU7XG4gICAgY29uc3QgbGlzdE9iamVjdCA9IE1ha2VMaXN0SXRlbSh0YXNrRGF0ZSwgdGFza1RpdGxlLCB0YXNrRGV0YWlscywgdGFza1Byb2plY3ROYW1lKTtcbiAgICByZXR1cm4gbGlzdE9iamVjdDtcbn1cblxuY29uc3QgYWNjZXNzRm9ybUZpZWxkcyA9IChlKSA9PiB7XG4gICAgY29uc3QgZm9ybUdVSSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblswXTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBmb3JtR1VJLmNoaWxkcmVuWzBdLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZm9ybUdVSS5jaGlsZHJlblsxXS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGZvcm1HVUkuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0udmFsdWU7XG4gICAgY29uc3QgdGFza1Byb2plY3ROYW1lID0gZm9ybUdVSS5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS52YWx1ZTtcblxuICAgIHJldHVybiB7dGFza1RpdGxlLCB0YXNrRGV0YWlscywgdGFza0RhdGUsIHRhc2tQcm9qZWN0TmFtZX07XG59XG5cbmNvbnN0IHVwZGF0ZVNlY3Rpb25Db250YWluZXJzID0gKGUsIGxpc3RPYmplY3QpID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBwYXJzZUlTTyhsaXN0T2JqZWN0LmdldER1ZURhdGUoKSk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBsaXN0T2JqZWN0LmdldFByb2plY3ROYW1lKCk7XG4gICAgY29uc3QgdW5pcXVlSUQgPSBsaXN0T2JqZWN0LmdldElEKCk7XG5cbiAgICBpZiAoZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPT09ICdhZGRUYXNrLWZvcm0nKSB7XG4gICAgICAgIFNlY3Rpb25Db250YWluZXJzLmhvbWVDb250YWluZXIucHVzaChsaXN0T2JqZWN0KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc1RvZGF5KGR1ZURhdGUpKSB7XG4gICAgICAgICAgICBTZWN0aW9uQ29udGFpbmVycy50b2RheUNvbnRhaW5lci5wdXNoKGxpc3RPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1RoaXNXZWVrKGR1ZURhdGUpKSB7XG4gICAgICAgICAgICBTZWN0aW9uQ29udGFpbmVycy53ZWVrQ29udGFpbmVyLnB1c2gobGlzdE9iamVjdCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKHByb2plY3ROYW1lICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKCFTZWN0aW9uQ29udGFpbmVycy5wcm9qZWN0c0NvbnRhaW5lci5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBTZWN0aW9uQ29udGFpbmVycy5wcm9qZWN0c0NvbnRhaW5lcltwcm9qZWN0TmFtZV0gPSBbbGlzdE9iamVjdF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBTZWN0aW9uQ29udGFpbmVycy5wcm9qZWN0c0NvbnRhaW5lcltwcm9qZWN0TmFtZV0ucHVzaChsaXN0T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKGZvcm1Db250YWluZXIuY2xhc3NOYW1lID09PSAnZWRpdFRhc2stZm9ybScpIHtcbiAgICAgICAgaWYgKGlzVG9kYXkoZHVlRGF0ZSkpIHtcbiAgICAgICAgICAgIGxldCBub3RJbkNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgU2VjdGlvbkNvbnRhaW5lcnMudG9kYXlDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5nZXRJRCgpID09PSB1bmlxdWVJRCkge1xuICAgICAgICAgICAgICAgICAgICBub3RJbkNvbnRhaW5lciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90SW5Db250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBTZWN0aW9uQ29udGFpbmVycy50b2RheUNvbnRhaW5lci5wdXNoKGxpc3RPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc1RvZGF5KGR1ZURhdGUpKSB7XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgU2VjdGlvbkNvbnRhaW5lcnMudG9kYXlDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5nZXRJRCgpID09PSB1bmlxdWVJRCkge1xuICAgICAgICAgICAgICAgICAgICBTZWN0aW9uQ29udGFpbmVycy50b2RheUNvbnRhaW5lci5zcGxpY2UoY291bnRlciwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNUaGlzV2VlayhkdWVEYXRlKSkge1xuICAgICAgICAgICAgbGV0IG5vdEluQ29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlzdCBvZiBTZWN0aW9uQ29udGFpbmVycy53ZWVrQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QuZ2V0SUQoKSA9PT0gdW5pcXVlSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm90SW5Db250YWluZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdEluQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgU2VjdGlvbkNvbnRhaW5lcnMud2Vla0NvbnRhaW5lci5wdXNoKGxpc3RPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc1RoaXNXZWVrKGR1ZURhdGUpKSB7XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgU2VjdGlvbkNvbnRhaW5lcnMud2Vla0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0LmdldElEKCkgPT09IHVuaXF1ZUlEKSB7XG4gICAgICAgICAgICAgICAgICAgIFNlY3Rpb25Db250YWluZXJzLndlZWtDb250YWluZXIuc3BsaWNlKGNvdW50ZXIsIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGFzdFByb2plY3ROYW1lID0gbGlzdE9iamVjdC5nZXRMYXN0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgaWYgKGxhc3RQcm9qZWN0TmFtZSA9PT0gJycgJiYgcHJvamVjdE5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAoU2VjdGlvbkNvbnRhaW5lcnMucHJvamVjdHNDb250YWluZXIuaGFzT3duUHJvcGVydHkocHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgU2VjdGlvbkNvbnRhaW5lcnMucHJvamVjdHNDb250YWluZXJbcHJvamVjdE5hbWVdLnB1c2gobGlzdE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBTZWN0aW9uQ29udGFpbmVycy5wcm9qZWN0c0NvbnRhaW5lcltwcm9qZWN0TmFtZV0gPSBbbGlzdE9iamVjdF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGFzdFByb2plY3ROYW1lICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKGxhc3RQcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpIHJldHVybjtcbiAgICAgICAgICAgIC8vIGxhc3RQcm9qZWN0TmFtZSAhPT0gcHJvamVjdE5hbWVcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZENvbnRhaW5lciA9IFNlY3Rpb25Db250YWluZXJzLnByb2plY3RzQ29udGFpbmVyW2xhc3RQcm9qZWN0TmFtZV07XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGlzdCBvZiBvbGRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3QuZ2V0SUQoKSA9PT0gdW5pcXVlSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZENvbnRhaW5lci5zcGxpY2UoY291bnRlciwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkQ29udGFpbmVyLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgU2VjdGlvbkNvbnRhaW5lcnMucHJvamVjdHNDb250YWluZXJbbGFzdFByb2plY3ROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFNlY3Rpb25Db250YWluZXJzLnByb2plY3RzQ29udGFpbmVyLmhhc093blByb3BlcnR5KHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBTZWN0aW9uQ29udGFpbmVycy5wcm9qZWN0c0NvbnRhaW5lcltwcm9qZWN0TmFtZV0ucHVzaChsaXN0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8ga2V5IGRvZXMgbm90IGV4aXN0IGluIGRpY3Rpb25hcnlcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9qZWN0TmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgU2VjdGlvbkNvbnRhaW5lcnMucHJvamVjdHNDb250YWluZXJbcHJvamVjdE5hbWVdID0gW2xpc3RPYmplY3RdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBlbHNlIGlmIHRoZSB0cmFzaCBidHRuIGlzIHByZXNzZWRcbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbGlzdEdVSSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gbGlzdEdVSS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgU2VjdGlvbkNvbnRhaW5lcnMuaG9tZUNvbnRhaW5lci5zcGxpY2UobGlzdEluZGV4LCAxKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc1RvZGF5KGR1ZURhdGUpKSB7XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgU2VjdGlvbkNvbnRhaW5lcnMudG9kYXlDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5nZXRJRCgpID09PSB1bmlxdWVJRCkge1xuICAgICAgICAgICAgICAgICAgICBTZWN0aW9uQ29udGFpbmVycy50b2RheUNvbnRhaW5lci5zcGxpY2UoY291bnRlciwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RoaXNXZWVrKGR1ZURhdGUpKSB7XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgU2VjdGlvbkNvbnRhaW5lcnMud2Vla0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0LmdldElEKCkgPT09IHVuaXF1ZUlEKSB7XG4gICAgICAgICAgICAgICAgICAgIFNlY3Rpb25Db250YWluZXJzLndlZWtDb250YWluZXIuc3BsaWNlKGNvdW50ZXIsIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFNlY3Rpb25Db250YWluZXJzLnByb2plY3RzQ29udGFpbmVyLmhhc093blByb3BlcnR5KHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsaXN0IG9mIFNlY3Rpb25Db250YWluZXJzLnByb2plY3RzQ29udGFpbmVyW3Byb2plY3ROYW1lXSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0LmdldElEKCkgPT09IHVuaXF1ZUlEKSB7XG4gICAgICAgICAgICAgICAgICAgIFNlY3Rpb25Db250YWluZXJzLnByb2plY3RzQ29udGFpbmVyW3Byb2plY3ROYW1lXS5zcGxpY2UoY291bnRlciwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChTZWN0aW9uQ29udGFpbmVycy5wcm9qZWN0c0NvbnRhaW5lcltwcm9qZWN0TmFtZV0ubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIFNlY3Rpb25Db250YWluZXJzLnByb2plY3RzQ29udGFpbmVyW3Byb2plY3ROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVMaXN0R1VJID0gKGUsIGxpc3RPYmplY3QpID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgY29uc3QgbGlzdEdVSUNvcHkgPSBHbG9iYWxWYXJzLmxpc3RHVUkuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gbGlzdEdVSUNvcHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBsaXN0R1VJQ29weS5jaGlsZHJlblsxXS5jaGlsZHJlblswXTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBsaXN0T2JqZWN0LmdldFRhc2tOYW1lKCk7XG4gICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBsaXN0T2JqZWN0LmdldER1ZURhdGUoKTtcblxuICAgIGlmIChmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2FkZFRhc2stZm9ybScpIHtcbiAgICAgICAgbGlzdEdVSUNvcHkuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYCR7R2xvYmFsVmFycy5saXN0Q291bnRlcn1gKTtcbiAgICAgICAgR2xvYmFsVmFycy5saXN0Q291bnRlcisrO1xuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2VkaXRUYXNrLWZvcm0nKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJbmRleCA9IGZvcm1Db250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGxpc3RHVUlDb3B5LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGxpc3RJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0R1VJQ29weTtcbn1cblxuY29uc3QgdXBkYXRlUHJvamVjdFRhYnNHVUkgPSAoZSwgbGlzdE9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBsaXN0T2JqZWN0LmdldFByb2plY3ROYW1lKCk7XG5cbiAgICBpZiAoZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPT09ICdhZGRUYXNrLWZvcm0nKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHJldHVybjtcblxuICAgICAgICBpZiAoU2VjdGlvbkNvbnRhaW5lcnMucHJvamVjdHNDb250YWluZXJbcHJvamVjdE5hbWVdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCB0YWJzIGFuZCBpbmNyZW1lbnQgcHJvamVjdCBjb3VudFxuICAgICAgICAgICAgZm9yIChjb25zdCB0YWJHVUkgb2YgR2xvYmFsVmFycy5wcm9qZWN0Q29udGFpbmVyR1VJLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYkdVSS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdENvdW50R1VJKHRhYkdVSSwgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlVGFiR1VJKHByb2plY3ROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2VkaXRUYXNrLWZvcm0nKSB7XG4gICAgICAgIGNvbnN0IGxhc3RQcm9qZWN0TmFtZSA9IGxpc3RPYmplY3QuZ2V0TGFzdFByb2plY3ROYW1lKCk7XG5cbiAgICAgICAgaWYgKGxhc3RQcm9qZWN0TmFtZSAhPT0gJycgJiYgbGFzdFByb2plY3ROYW1lICE9PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0YWIgb2YgR2xvYmFsVmFycy5wcm9qZWN0Q29udGFpbmVyR1VJLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYi5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9PT0gbGFzdFByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghU2VjdGlvbkNvbnRhaW5lcnMucHJvamVjdHNDb250YWluZXIuaGFzT3duUHJvcGVydHkobGFzdFByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdENvdW50R1VJKHRhYiwgbGFzdFByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RQcm9qZWN0TmFtZSA9PT0gJycgJiYgcHJvamVjdE5hbWUgIT09ICcnIHx8IChwcm9qZWN0TmFtZSAhPT0gJycpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiBHbG9iYWxWYXJzLnByb2plY3RDb250YWluZXJHVUkuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAodGFiLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0Q291bnRHVUkodGFiLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodGFiIGRvZXMgbm90IGV4aXN0KVxuICAgICAgICAgICAgY3JlYXRlVGFiR1VJKHByb2plY3ROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBkZWxldGUgYnR0biBpcyBwcmVzc2VkXG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFiIG9mIEdsb2JhbFZhcnMucHJvamVjdENvbnRhaW5lckdVSS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmICh0YWIuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghU2VjdGlvbkNvbnRhaW5lcnMucHJvamVjdHNDb250YWluZXIuaGFzT3duUHJvcGVydHkocHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBTZWN0aW9uQ29udGFpbmVycy5wcm9qZWN0c0NvbnRhaW5lcltwcm9qZWN0TmFtZV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlVGFiR1VJID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGFiR1VJQ29weSA9IEdsb2JhbFZhcnMucHJvamVjdFRhYkdVSS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q291bnRHVUkgPSBwcm9qZWN0VGFiR1VJQ29weS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lR1VJID0gcHJvamVjdFRhYkdVSUNvcHkuY2hpbGRyZW5bMV07XG4gICAgICAgICAgICBwcm9qZWN0Q291bnRHVUkudGV4dENvbnRlbnQgPSAnMSc7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUdVSS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgICAgR2xvYmFsVmFycy5wcm9qZWN0Q29udGFpbmVyR1VJLmFwcGVuZENoaWxkKHByb2plY3RUYWJHVUlDb3B5KTtcbn1cblxuY29uc3QgdXBkYXRlUHJvamVjdENvdW50R1VJID0gKHRhYkdVSSwgcHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q291bnQgPSBTZWN0aW9uQ29udGFpbmVycy5wcm9qZWN0c0NvbnRhaW5lcltwcm9qZWN0TmFtZV0ubGVuZ3RoO1xuICAgIHRhYkdVSS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHByb2plY3RDb3VudDtcbn1cblxuY29uc3QgU2VjdGlvbkNvbnRhaW5lcnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IFtdO1xuICAgIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gW107XG4gICAgY29uc3Qgd2Vla0NvbnRhaW5lciA9IFtdO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0ge307XG5cbiAgICByZXR1cm4ge2hvbWVDb250YWluZXIsIHRvZGF5Q29udGFpbmVyLCB3ZWVrQ29udGFpbmVyLCBwcm9qZWN0c0NvbnRhaW5lcn1cbn0pKCk7XG5cbmNvbnN0IEdsb2JhbFZhcnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IHVuaXF1ZUlEID0gLTE7XG4gICAgbGV0IGxpc3RDb3VudGVyID0gMDtcblxuICAgIGNvbnN0IGFkZFRhc2tHVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFzay1jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBmb3JtR1VJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtZm9ybS1jb250YWluZXInKTtcbiAgICBmb3JtR1VJLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgbGlzdEdVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWl0ZW0nKTtcbiAgICBsaXN0R1VJLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lckdVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RUYWJHVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBwcm9qZWN0VGFiR1VJLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnRHVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnRHVUkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYW5hZ2VMaXN0QVBJKTtcblxuICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWItY29udGFpbmVyJyk7XG4gICAgdGFiQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVGFicyk7XG5cbiAgICByZXR1cm4ge2FkZFRhc2tHVUksIGZvcm1HVUksIG1haW5Db250ZW50R1VJLCBcbiAgICAgICAgbGlzdEdVSSwgcHJvamVjdFRhYkdVSSwgcHJvamVjdENvbnRhaW5lckdVSSwgXG4gICAgICAgIGxpc3RDb3VudGVyLCB1bmlxdWVJRH07XG59KSgpO1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
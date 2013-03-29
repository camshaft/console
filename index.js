/**
 * `console` fix for ie
 */

function noop () {}

module.exports = window.console || {
  log: noop,
  debug: noop,
  info: noop,
  warn: noop,
  error: noop,
  assert: noop,
  dir: noop,
  dirxml: noop,
  trace: noop,
  group: noop,
  groupEnd: noop,
  time: noop,
  timeEnd: noop,
  profile: noop,
  profileEnd: noop,
  count: noop
};

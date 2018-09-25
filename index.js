"use strict";

var createLogger = function createLogger(backgroundColor, color) {
  var logger = function logger(message) {
    var _console;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (logger.enabled === false) {
      return;
    }

    (_console = console).groupCollapsed.apply(_console, ["%c" + message, "background-color: " + backgroundColor + "; color: " + color + "; padding: 2px 4px;"].concat(args));
    console.log(new Error("stack").stack.split("\n").slice(2).join("\n"));
    console.groupEnd();
  };

  return logger;
};

var log = {
  blue: createLogger("#1E88E5", "#90CAF9"),
  brown: createLogger("#6D4C41", "#D7CCC8"),
  gray: createLogger("#212121", "#BDBDBD"),
  green: createLogger("#388E3C", "#A5D6A7"),
  red: createLogger("#E53935", "#EF9A9A"),
  orange: createLogger("#F4511E", "#FFAB91"),
  purple: createLogger("#8E24AA", "#E1BEE7"),
  yellow: createLogger("#FFD600", "#FFF59D")
};

module.exports = log;
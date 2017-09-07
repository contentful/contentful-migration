'use strict';

const getCallsites = require('callsites');
const path = require('path');

const getFileDirectory = function (absoluteFileName) {
  // Find where I currently am
  const parsedFilePath = path.parse(absoluteFileName);
  // Cross platform split path so we can check against the last part
  return parsedFilePath.dir;
};

const getFirstExternalCaller = function () {
  const thisDir = getFileDirectory(__filename);
  const callsites = getCallsites();

  const firstExternal = callsites.find((callsite) => {
    const isCallFromFile = callsite.getFileName() !== null;
    const isNotThisDir = isCallFromFile && getFileDirectory(callsite.getFileName()) !== thisDir;

    return !callsite.isNative() && isNotThisDir;
  });

  return firstExternal;
};

module.exports = getFirstExternalCaller;

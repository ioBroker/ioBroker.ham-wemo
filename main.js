'use strict';
const IOB_HB = require(require.resolve('iobroker.ham'));
const pack = require('./io-package.json');
IOB_HB(pack.common.name);
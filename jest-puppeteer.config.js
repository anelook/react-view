/*
Copyright (c) 2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    defaultViewport: {
      width: 763,
      height: 1000,
    },
  },
};

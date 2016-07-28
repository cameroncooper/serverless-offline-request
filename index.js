'use strict';

const path = require('path');
const SPath = path.dirname(require.resolve('serverless'));
const S = require(path.resolve(SPath, 'Serverless'));
const SUtils = require(path.resolve(SPath, 'utils'));
const SOffline = require('serverless-offline');
const serverless = new S({projectPath: SUtils.findProjectPath(process.cwd())});
const queue = [];
let offline = {inject: (params, cb) => queue.push({params, cb})};

serverless.init().then(() => {
  offline = new (SOffline(serverless));
  queue.splice(0).forEach((req) => offline.inject(req.params, req.cb));
});

module.exports = {
  get: (url, cb) => offline.inject({method: 'GET', url: url}, cb),
  post: (url, payload, cb) => offline.inject({method: 'POST', url: url, payload: payload}, cb)
};

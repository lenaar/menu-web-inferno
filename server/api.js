'use strict'

const log = require('kth-node-log')
const config = require('./configuration').server
const redis = require('kth-node-redis')
const connections = require('kth-node-api-call').Connections

const opts = {
  log: log,
  redis: redis,
  timeout: 10000000, // TODO: set this to a way smaller number when we actually have an API
  checkAPIs: true // performs api-key checks against the apis, if a "required" check fails, the app will exit. Required apis are specified in the config
}

module.exports = connections.setup(config.nodeApi, config.apiKey, opts)

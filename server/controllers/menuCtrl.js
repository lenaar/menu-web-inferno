'use strict'

const co = require('co')
const log = require('kth-node-log')
const InfernoServer = require('inferno-server')
const createElement = require('inferno-create-element')
const { RouterContext, match } = require('inferno-router')
const routeFactory = require('../../dist/js/server/app.js').default

module.exports = {
  getIndex: _getIndex
}

const paths = require('../server').getPaths()

function hydrateStores (renderProps) {
  // This assumes that all stores are specified in a root element called Provider 
  const props = renderProps.matched.props
  const outp = {}
  for (let key in props) {
    if (props[key].hasOwnProperty('$mobx')) {
      outp[key] = toJS(props[key], true)
    }
  }
  return outp
}

function _getIndex (req, res, next) {
  try {
    const routes = routeFactory(req.originalUrl)
    const renderProps = match(routes, req.originalUrl)
    if (renderProps.redirect) return res.redirect(renderProps.redirect)

    const html = InfernoServer.renderToString(createElement(RouterContext, renderProps))

    res.render('menu/index', {
      menuHTML: html,
      initialState: JSON.stringify({}),
      debug: 'debug' in req.query
    })
  } catch (err) {
    log.error('Error in getIndex', {error: err})
    next(err)
  }
}

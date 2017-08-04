const axios = require('axios')
const log = require('kth-node-log')
const config = require('../configuration').server

var authToken

function login () {
  if (authToken) {
    return Promise.resolve()
  } else {
    return axios.post(config.viaSearchURI + '/login/forms/session', {
      "IsPersistent": "true",
      "Credentials": 	[
        { "name": "windowsusername","value": config.viaSearchUser.username },
        { "name": "windowspassword","value": config.viaSearchUser.password },
        { "name": "windowsdomain","value": config.viaSearchUser.domain }
        ]
      })
      .then(resp => {
        authToken = resp.data.Data.AuthCookie
        return Promise.resolve()
      })
      .catch(err => {
        log.error('Error while trying to log in to ViaSearch')
        throw err
      })
  }
}

module.exports.search = function (query, refiners, startAt) {

  let refinerStr = ''
  if (typeof refiners === 'object') {
    const tmpAnd = []
    Object.keys(refiners).forEach((key) => {
      tmpAnd.push('vwr(' + key + '%3D' + refiners[key].join(',') + ')')
    })
    refinerStr = ' vw(' + tmpAnd.join(' AND ') + ')'
  }

  return login()
    .then(() => {
      return axios.get(config.viaSearchURI + '/search', {
        params: {
          q: query + encodeURI(refinerStr),
          s: startAt || 0
        },
        headers: { 'AuthToken': authToken }
      })
        .then(resp => {
          const nrofResults = resp.data.Data.NumFound
          const refiners = resp.data.Data.Refiners
          const hits = resp.data.Data.Hits

          /**
           * Transform result
           */
          const results = hits.map(item => { // We should deserialize properly here so we send typed objects as a result
            const visibleUrl = unescape(item.Link.Open.split('reference=')[1])
            
            const outp = {
              title: item.Name,
              description: item.Summary,
              url: item.ApiBaseUrl + item.Link.Open,
              visibleUrl: visibleUrl
            }

            if (visibleUrl.indexOf('kth.se/profile') > 0) {
              const userName = visibleUrl.split('/')[4]
              outp._type = 'Profile'
              outp.avatarUrl = 'https://www.kth.se/files/avatar/' + userName
            } else {
              outp._type = 'SearchResultItem'
            }

            return outp
          })
          /**
           * END Transform result
           */

          return {
            nrofResults: nrofResults,
            refiners: refiners,
            results: results
          }
        })
        .catch(err => {
          log.error('Error while fetching suggest data from ViaSearch')
          throw err
        })
    })
}

module.exports.suggest = function (query) {
  return login()
    .then(() => {
      return axios.get(config.viaSearchURI + '/search/suggestions', {
        params: { query: query },
        headers: { 'AuthToken': authToken }
      })
        .then(resp => {
          return resp.data.Data.map(item => { // unpack for the inferno-formlib autocomplete
            return {
              name: item,
              title: item
            }
          })
        })
        .catch(err => {
          log.error('Error while fetching suggest data from ViaSearch')
          throw err
        })
    })
}

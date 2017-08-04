const axios = require('axios')
const log = require('kth-node-log')
module.exports.search = function (query) {
  return axios.get('https://www.kth.se/search/suggest?q=' + query)
  .then(resp => {
    return resp.data.map(item => { // unpack for the inferno-formlib autocomplete
      return {
        name: item.match.value,
        title: item.match.value
      }
    })
  })
  .catch(err => {
    log.error('Error while fetching suggest data')
    throw err
  })
}

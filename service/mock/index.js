import MockAdapter from 'axios-mock-adapter'
import _ from 'lodash'

function fixture (name) {
  return _.cloneDeep(require(`./fixtures/${name}.json`))
}

export function mock (instance, options) {
  const _options = Object.assign({}, {
    ...options,
    delayResponse: 1500
  }, options)

  const mock = new MockAdapter(instance, _options)

  // app
  mock
    .onGet('/app')
    .reply(200, fixture('app'))

  mock
    .onGet('/app/master')
    .reply(200, fixture('app').master)

  mock
    .onGet('/app/carousel')
    .reply(200, fixture('app').carousel)


  // articles
  mock
    .onGet('/articles')
    .reply(200, fixture('articles'))

  mock
    .onGet(/\/articles\/.+/)
    .reply(200, fixture('articles/1'))
}
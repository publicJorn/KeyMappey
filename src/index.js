import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import createStore from './store'
import App from './App'

const rootNode = document.createElement('div')
rootNode.setAttribute('id', 'KeyMappey')
document.body.appendChild(rootNode)

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: arial;
  }
`

/**
 * Why Redux?
 * TBH, for a small project like this I'd prefer to use MobX.
 * To me MobX's main appeal is in it's short notation, using decorators and class properties.
 * However, these techniques are still so new that linting doesn't work nicely on them yet, giving false positives.
 * That's why, for now, we are using Redux.
 */
ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('KeyMappey')
)

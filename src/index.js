import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import myCustomApp from './reducers'
import App from './components/App'

//FIXME: Shouldn't require this after REACT V1 is released!
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(myCustomApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('my-component')
)
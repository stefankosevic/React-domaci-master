import { render } from '@testing-library/react'
import Search from './Search'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../store/reducer'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

describe('Search', () => {
  it('should render without errors', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Search />
      </Provider>,
    )
    expect(getByText('WEATHER APP')).toBeInTheDocument()
  })
})

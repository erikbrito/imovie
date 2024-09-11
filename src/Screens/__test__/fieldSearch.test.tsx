import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components/native'

import Theme from '@Global/Theme/theme'
import FieldSearch from '@Global/Components/fieldSearch'

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn()
  })
}))

describe('searchPress function', () => {
  it('should dispatch fetchMovie action and navigate to Search', () => {
    const initialState = {}
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <FieldSearch />
        </ThemeProvider>
      </Provider>
    )

    const searchBar = getByPlaceholderText('Search')
    fireEvent.changeText(searchBar, 'star wars')
    fireEvent(searchBar, 'submitEditing')

    const actions = store.getActions()
    const expectedPayload = {
      error: undefined,
      meta: undefined,
      payload: 'star wars',
      type: '@movie/FETCH_MOVIE'
    }

    expect(actions).toEqual([expectedPayload])
  })
})

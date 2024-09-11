import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components/native'
import Theme from '@Global/Theme/theme'

import Movies from '@Global/Components/Movies'

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn()
  })
}))

const initialState = {
  films: {
    action: [
      { id: 351465, poster_path: '/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg' },
      { id: 231456, poster_path: '/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg' }
    ],
    adventure: [
      { id: 72165, poster_path: '/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg' },
      { id: 16952, poster_path: '/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg' }
    ],
    animations: [
      { id: 99432, poster_path: '/ldfCF9RhR40mppkzmftxapaHeTo.jpg' },
      { id: 54682, poster_path: '/nesuSdJakNkf0zs7OfoasB6Clxf.jpg' }
    ],
    war: [
      { id: 51264, poster_path: '/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg' },
      { id: 44687, poster_path: '/adMcxfUonnm9RvPImGHy25wYUks.jpg' }
    ]
  }
}

describe('itemActions function', () => {
  it('should dispatch fetchVideo action and navigate with correct arguments', async () => {
    const mockStore = configureStore()
    const store = mockStore(initialState.films)

    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <Movies movies={initialState.films.action} session="Action" />
        </ThemeProvider>
      </Provider>
    )

    await waitFor(() => getByTestId('Action-button-0'))
    const actionButton = getByTestId('Action-button-0')

    fireEvent.press(actionButton)
    const actions = store.getActions()

    const expectedPayload = {
      error: undefined,
      meta: undefined,
      payload: 351465,
      type: '@video/FETCH_VIDEO'
    }
    expect(actions).toEqual([expectedPayload])
  })
})

describe('itemAdventure function', () => {
  it('should dispatch fetchVideo action and navigate with correct arguments', async () => {
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <Movies movies={initialState.films.adventure} session="Adventure" />
        </ThemeProvider>
      </Provider>
    )

    await waitFor(() => getByTestId('Adventure-button-0'))
    const adventureButton = getByTestId('Adventure-button-0')

    fireEvent.press(adventureButton)
    const adventure = store.getActions()

    const expectedPayload = {
      error: undefined,
      meta: undefined,
      payload: 72165,
      type: '@video/FETCH_VIDEO'
    }
    expect(adventure).toEqual([expectedPayload])
  })
})

describe('itemAnimations function', () => {
  it('should dispatch fetchVideo action and navigate with correct arguments', async () => {
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <Movies movies={initialState.films.animations} session="Animation" />
        </ThemeProvider>
      </Provider>
    )

    await waitFor(() => getByTestId('Animation-button-0'))
    const animationButton = getByTestId('Animation-button-0')

    fireEvent.press(animationButton)
    const animation = store.getActions()

    const expectedPayload = {
      error: undefined,
      meta: undefined,
      payload: 99432,
      type: '@video/FETCH_VIDEO'
    }
    expect(animation).toEqual([expectedPayload])
  })
})

describe('itemWar function', () => {
  it('should dispatch fetchVideo action and navigate with correct arguments', async () => {
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <Movies movies={initialState.films.war} session="War" />
        </ThemeProvider>
      </Provider>
    )

    await waitFor(() => getByTestId('War-button-0'))
    const warButton = getByTestId('War-button-0')

    fireEvent.press(warButton)
    const war = store.getActions()

    const expectedPayload = {
      error: undefined,
      meta: undefined,
      payload: 51264,
      type: '@video/FETCH_VIDEO'
    }
    expect(war).toEqual([expectedPayload])
  })
})

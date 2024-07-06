import { render, waitFor, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Home from 'src/Pages/home'

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}))

describe('itemActions function', () => {
  it('should dispatch fetchVideo action and navigate with correct arguments', async () => {
    const initialState = {
      films: {
        actions: [{"id": 351465, "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" }, {"id": 231456, "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"}],
        adventure: [{"id": 32165, "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" }, {"id": 16952, "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"}],
        animations: [{"id": 89432, "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg" }, {"id": 54682, "poster_path": "/nesuSdJakNkf0zs7OfoasB6Clxf.jpg"}],
        war: [{"id": 51264, "poster_path": "/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg" }, {"id": 24687, "poster_path": "/adMcxfUonnm9RvPImGHy25wYUks.jpg"}]
      },
      loadRequest: false
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByTestId } = render(
      <Provider store={store}>
        <Home actions={[]} adventure={[]} animations={[]} war={[]} poster_path={''} overview={''} loadRequest={function (): void {
          throw new Error('Function not implemented.')
        } } />
      </Provider>
    )

    await waitFor(() => getByTestId('action-button-0'))

    const actionButton = getByTestId('action-button-0')

    fireEvent.press(actionButton)

    const actions = store.getActions()

    const expectedPayload = {"error": undefined, "meta": undefined, "payload": 351465, "type": "@video/FETCH_VIDEO"}

    expect(actions).toEqual([expectedPayload])
  })
})

describe('itemAdventure function', () => {
  it('should dispatch fetchVideo action and navigate with correct arguments', async () => {
    const initialState = {
      films: {
        actions: [{"id": 351465, "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" }, {"id": 231456, "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"}],
        adventure: [{"id": 32165, "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" }, {"id": 16952, "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"}],
        animations: [{"id": 89432, "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg" }, {"id": 54682, "poster_path": "/nesuSdJakNkf0zs7OfoasB6Clxf.jpg"}],
        war: [{"id": 51264, "poster_path": "/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg" }, {"id": 24687, "poster_path": "/adMcxfUonnm9RvPImGHy25wYUks.jpg"}]
      },
      loadRequest: false
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByTestId } = render(
      <Provider store={store}>
        <Home actions={[]} adventure={[]} animations={[]} war={[]} poster_path={''} overview={''} loadRequest={function (): void {
          throw new Error('Function not implemented.')
        } } />
      </Provider>
    )

    await waitFor(() => getByTestId('adventure-button-0'))

    const adventureButton = getByTestId('adventure-button-0')

    fireEvent.press(adventureButton)

    const adventure = store.getActions()

    const expectedPayload = {"error": undefined, "meta": undefined, "payload": 32165, "type": "@video/FETCH_VIDEO"}

    expect(adventure).toEqual([expectedPayload])
  })
})

describe('itemAnimations function', () => {
  it('should dispatch fetchVideo action and navigate with correct arguments', async () => {
    const initialState = {
      films: {
        actions: [{"id": 351465, "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" }, {"id": 231456, "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"}],
        adventure: [{"id": 32165, "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" }, {"id": 16952, "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"}],
        animations: [{"id": 89432, "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg" }, {"id": 54682, "poster_path": "/nesuSdJakNkf0zs7OfoasB6Clxf.jpg"}],
        war: [{"id": 51264, "poster_path": "/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg" }, {"id": 24687, "poster_path": "/adMcxfUonnm9RvPImGHy25wYUks.jpg"}]
      },
      loadRequest: false
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByTestId } = render(
      <Provider store={store}>
        <Home actions={[]} adventure={[]} animations={[]} war={[]} poster_path={''} overview={''} loadRequest={function (): void {
          throw new Error('Function not implemented.')
        } } />
      </Provider>
    )

    await waitFor(() => getByTestId('animations-button-0'))

    const animationsButton = getByTestId('animations-button-0')

    fireEvent.press(animationsButton)

    const animations = store.getActions()

    const expectedPayload = {"error": undefined, "meta": undefined, "payload": 89432, "type": "@video/FETCH_VIDEO"}

    expect(animations).toEqual([expectedPayload])
  })
})

describe('itemAnimations function', () => {
  it('should dispatch fetchVideo action and navigate with correct arguments', async () => {
    const initialState = {
      films: {
        actions: [{"id": 351465, "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" }, {"id": 231456, "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"}],
        adventure: [{"id": 32165, "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg" }, {"id": 16952, "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg"}],
        animations: [{"id": 89432, "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg" }, {"id": 54682, "poster_path": "/nesuSdJakNkf0zs7OfoasB6Clxf.jpg"}],
        war: [{"id": 51264, "poster_path": "/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg" }, {"id": 24687, "poster_path": "/adMcxfUonnm9RvPImGHy25wYUks.jpg"}]
      },
      loadRequest: false
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByTestId } = render(
      <Provider store={store}>
        <Home actions={[]} adventure={[]} animations={[]} war={[]} poster_path={''} overview={''} loadRequest={function (): void {
          throw new Error('Function not implemented.')
        } } />
      </Provider>
    )

    await waitFor(() => getByTestId('war-button-0'))

    const warButton = getByTestId('war-button-0')

    fireEvent.press(warButton)

    const war = store.getActions()

    const expectedPayload = {"error": undefined, "meta": undefined, "payload": 51264, "type": "@video/FETCH_VIDEO"}

    expect(war).toEqual([expectedPayload])
  })
})

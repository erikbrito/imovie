import { render, fireEvent } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Search from 'src/Pages/search'

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}))

describe('itemPressed function', () => {
  it('should dispatch fetchVideo action and navigate with correct arguments', async () => {
    const initialState = {
      movie: {
        data: [
          {"id": 351465, "title": "title1", "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg", "overview": "overview1"}, 
          {"id": 231456, "title": "title2", "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg", "overview": "overview2"}
        ],
      },
      loadRequest: false
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByTestId } = render(
      <Provider store={store}>
        <Search movie={[]} />
      </Provider>
    )

    const movieButton = getByTestId('movie-button-0')

    fireEvent.press(movieButton)

    const actions = store.getActions()
    const expectedPayload = {"error": undefined, "meta": undefined, "payload": 351465, "type": "@video/FETCH_VIDEO"}

    expect(actions).toEqual([expectedPayload])
  })
})

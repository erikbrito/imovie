/* eslint-disable @typescript-eslint/no-var-requires */
import { render, waitFor } from '@testing-library/react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import About from 'src/Pages/about'

// This mock was placed because of an error coming from the webview
jest.mock('react-native-webview', () => {
  const React = require('react')
  const { View } = require('react-native')

  const WebView = (props: JSX.IntrinsicAttributes) => <View {...props} />

  return {
    WebView,
    default: WebView,
    __esModule: true,
  }
})

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: {
      movie: {
        "id": 951,
        "results": [
          {"name": "No Official"},
          {"name": "Official Trailer"},
          {"name": "Official Teaser"}
        ]
      }
    },
  }),
}))

describe('genero function', () => {
  it('should correctly join genre names', async () => {
    const initialState = {
      video: {
        details: {
          "genres": [
            {"id": 1, "name": "Comedy"},
          ],
          "id": 951,
          "overview": "These naive and driven children are going to go through the most confusion in this noisy film, with this cop taken out of the way so that no one can make a mistake!",
          "poster_path": "/q5Pk0utXHTqOgvRtlRxu8AMqGLC.jpg",
          "release_date": "2024-01-26",
          "runtime": 111,
          "title": "Kindergarten Cop",
          "vote_average": 555,
        },
        data: [
          {"name": "No Official"},
          {"name": "Official Trailer"},
          {"name": "Official Teaser"}
        ]
      },
    }

    const mockStore = configureStore()
    const store = mockStore(initialState)

    const { getByText } = render(
      <Provider store={store}>
        <PaperProvider>
          <About video={[]} id={0} movie={{ id: 0 }} title={''} overview={''} details={undefined} />
        </PaperProvider>
      </Provider>
    )

    jest.useFakeTimers()
    
    await waitFor(() => getByText('Comedy'))

    expect(getByText('Comedy')).toBeTruthy()
  })
})

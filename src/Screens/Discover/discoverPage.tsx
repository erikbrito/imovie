import React from 'react'
import { ScrollView, TouchableHighlight } from 'react-native'
import {
  useNavigation,
  NavigationProp,
  ParamListBase
} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { AplicationState } from 'src/redux/Store'
import { fetchVideo } from '@Redux/about/Actions'
import { Movie } from '@Redux/discover/Types'
import FieldSearch from '@Globals/components/FieldSearch'
import { Container } from '@Globals/Styles'
import {
  ListImages,
  ResultContainer,
  Result,
  Poster,
  Info,
  Title,
  Overview
} from './DiscoverPage.styles'

interface Params {
  movie: Movie[]
}

const Search: React.FC<Params> = () => {
  const movie = useSelector((state: AplicationState) => state.movie.data)

  const useAppNavigation: () => NavigationProp<ParamListBase> = useNavigation
  const navigation = useAppNavigation()

  const dispatch = useDispatch()
  const itemPressed = (index: string) => {
    dispatch(fetchVideo(movie[index].id))
    navigation.navigate('About', { movie: movie[index] })
  }

  return (
    <Container>
      <FieldSearch />

      <ScrollView>
        <ListImages>
          <ResultContainer>
            {Object.keys(movie).map((index: string) => {
              return (
                <TouchableHighlight
                  testID={`movie-button-${index}`}
                  onPress={() => itemPressed(index)}
                  underlayColor="#433f64"
                  key={index}
                >
                  <Result key={index}>
                    <Poster
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${movie[index].poster_path}`
                      }}
                    />

                    <Info>
                      <Title>{movie[index].title}</Title>
                      <Overview numberOfLines={6} ellipsizeMode="tail">
                        {movie[index].overview}
                      </Overview>
                    </Info>
                  </Result>
                </TouchableHighlight>
              )
            })}
          </ResultContainer>
        </ListImages>
      </ScrollView>
    </Container>
  )
}

export default Search

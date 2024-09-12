import React from 'react'
import { ScrollView, TouchableHighlight } from 'react-native'
import { Genres } from '@Redux/home/Types'
import { useDispatch } from 'react-redux'
import { fetchVideo } from '@Redux/about/Actions'
import { View, Title, InternalView, Poster } from './Styled.styles'
import { useAppNavigation } from '@Utils/UseAppNavigation'

interface StateProps {
  movies: Genres[]
  session: string
}

const Movies
: React.FC<StateProps> = ({ movies, session }) => {
  const navigation = useAppNavigation<'Movie'>()

  const dispatch = useDispatch()

  const goToAbout = (index: number) => {
    dispatch(fetchVideo(movies[index]?.id))
    navigation.navigate('About', { movie: movies[index] })
  }

  return (
    <>
      <Title>{session}</Title>

      <View type={session}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <InternalView>
            {Object.keys(movies).map((index: string) => (
              <TouchableHighlight
                testID={`${session}-button-${index}`}
                onPress={() => goToAbout(parseInt(index))}
                underlayColor="#ee7126"
                key={index}
              >
                <View key={index}>
                  <Poster
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${movies[index].poster_path}`
                    }}
                  />
                </View>
              </TouchableHighlight>
            ))}
          </InternalView>
        </ScrollView>
      </View>
    </>
  )
}

export default Movies


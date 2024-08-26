import { ScrollView, TouchableHighlight } from 'react-native'
import { Genres } from '@Redux/Home/types'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { fetchVideo } from '@Redux/About/actions'
import { View, Title, InternalView, Poster } from '@Global/Components/styled.styles'

interface StateProps {
  movies: Genres[]
  session: string
} 

const listMovies: React.FC<StateProps> = ({movies, session}) => {
  const useAppNavigation: () => NavigationProp<ParamListBase> = useNavigation
  const navigation = useAppNavigation()

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
            {Object.keys(movies).map((index: string) => {
              return (
                <TouchableHighlight testID={`${session}-button-${index}`} onPress={() => goToAbout(parseInt(index))} underlayColor="#ee7126" key={index}>

                  <View key={index}>
                    <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${movies[index].poster_path}` }} />

                  </View>

                </TouchableHighlight>
              )
            })}
          </InternalView>

        </ScrollView>
      </View>
    </>
  )
}

export default listMovies
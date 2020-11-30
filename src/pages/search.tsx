import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { AplicationState } from '../Redux/store'
import { fetchMovie } from '../Redux/Search/actions'
import { fetchVideo } from '../Redux/Info/actions'
import { Movie } from '../Redux/Search/types'
import { Searchbar } from 'react-native-paper';

interface Params {
  movie: Movie[],
  id: number,
  title: string,
  backdrop_path: string,
  overview: string
}

const Trending: React.FC = () => {
  const route = useRoute()
  const routeParams = route.params as Params

  const queryMovie = routeParams.movie

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovie(queryMovie))
  }, []);

  const movie = useSelector((state: AplicationState) => state.movie.data)

  const navigation = useNavigation();

  const itemPressed = (index: any) => {
    dispatch(fetchVideo(movie[index].id))
    navigation.navigate('About')
  }

const [searchQuery, setSearchQuery] = React.useState('');

const onChangeSearch = (query: any) => setSearchQuery(query);

const searchPress = () => {
  dispatch(fetchMovie(searchQuery))
}

return (
  <View style={styles.container}>

    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={searchPress}
      style={styles.searchbar}
    />

    <ScrollView>
      <View style={styles.containerImages}>

        <View style={{ flexDirection: 'column', margin: 2, justifyContent: "space-between" }}>
          {Object.keys(movie).map((index: any) => {
            return (
              <TouchableHighlight onPress={() => itemPressed(index)} underlayColor="lightgray" key={index}>

                <View key={index} style={styles.containerMovie}>
                  <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie[index].poster_path}` }} style={styles.images} />

                  <View style={{ marginRight: 260 }}>
                    <Text style={styles.title}>{movie[index].title}</Text>
                    <Text numberOfLines={6} ellipsizeMode="tail" style={styles.overview}>{movie[index].overview}</Text>
                  </View>

                </View>

              </TouchableHighlight>
            )
          })}
        </View>

      </View>
    </ScrollView>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchbar: {
    margin: 4,
  },
  containerImages: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerMovie: {
    margin: 5,
    flex: 1,
    flexDirection: 'row'
  },
  images: {
    width: 120,
    height: 180,
    margin: 5,
    justifyContent: "space-between"
  },
  title: {
    fontWeight: 'bold'
  },
  overview: {
    flexWrap: 'wrap',
    paddingTop: 7,
  },
})

export default Trending

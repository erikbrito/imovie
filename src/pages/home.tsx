import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Actions, Animations, War } from '../Redux/Home/types'
import { AplicationState } from '../Redux/store'
import { loadRequest } from '../Redux/Home/actions'
import { fetchVideo } from '../Redux/Info/actions'
import { Searchbar } from 'react-native-paper';

interface StateProps {
  actions: Actions[];
  animations: Animations[];
  war: War[];
  poster_path: string;
  overview: string;
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

const Home: React.FC<Props> = () => {
  useEffect(() => {
    loadRequest()
  }, []);

  const [searchQuery, setSearchQuery] = React.useState('');

  const searchPress = () => {
    navigation.navigate('Search',
      { movie: searchQuery }
    )
  }

  const onChangeSearch = (query: any) => setSearchQuery(query);

  const actions = useSelector((state: AplicationState) => state.films.actions)
  const animations = useSelector((state: AplicationState) => state.films.animations)
  const war = useSelector((state: AplicationState) => state.films.war)

  const navigation = useNavigation();

  const dispatch = useDispatch()

  const itemActions = (index: any) => {
    dispatch(fetchVideo(actions[index].id))
    navigation.navigate('About', {movie: actions[index]})
  }

  const itemAnimations = (index: any) => {
    dispatch(fetchVideo(animations[index].id))
    navigation.navigate('About', {movie: animations[index]})
  }
  
  const itemWar = (index: any) => {
    dispatch(fetchVideo(war[index].id))
    navigation.navigate('About', {movie: war[index]})
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
        <Text style={styles.title}>Action:</Text>

        <View>
          <ScrollView horizontal={true}>

            <View style={{ flexDirection: 'row', margin: 2, justifyContent: "space-between" }}>
              {Object.keys(actions).map((index: any) => {
                return (
                  <TouchableHighlight onPress={() => itemActions(index)} underlayColor="lightgray" key={index}>

                    <View key={index}>
                      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${actions[index].poster_path}` }} style={styles.images} />

                    </View>

                  </TouchableHighlight>
                )
              })}
            </View>

          </ScrollView>
        </View>

        <Text style={styles.title}>Animation:</Text>

        <View>

          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row' }}>
              {Object.keys(animations).map((index: any) => {
                return (
                  <TouchableHighlight onPress={() => itemAnimations(index)} underlayColor="lightgray" key={index}>

                    <View key={index}>
                      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${animations[index].poster_path}` }} style={styles.images} />

                    </View>

                  </TouchableHighlight>
                )
              })}
            </View>
          </ScrollView>

        </View>

        <Text style={styles.title}>War:</Text>

        <View>

          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row' }}>
              {Object.keys(war).map((index: any) => {
                return (
                  <TouchableHighlight onPress={() => itemWar(index)} underlayColor="lightgray" key={index}>

                    <View key={index}>
                      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${war[index].poster_path}` }} style={styles.images} />

                    </View>

                  </TouchableHighlight>
                )
              })}
            </View>
          </ScrollView>

        </View>
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar: {
    margin: 4,
  },
  containerMovie: {
    margin: 5,
    flexDirection: 'row'
  },
  images: {
    width: 120,
    height: 180,
    margin: 5,
    justifyContent: "space-between"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5, 
    marginLeft: 10,
    color: '#6200ee'
  },
  overview: {
    flexWrap: 'wrap',
    paddingTop: 7,
  },
})

export default Home
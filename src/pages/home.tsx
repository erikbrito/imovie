import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Genres } from '../Redux/Home/types'
import { AplicationState } from '../Redux/store'
import { loadRequest } from '../Redux/Home/actions'
import { fetchVideo } from '../Redux/Info/actions'
import FieldSearch from './fieldSearch'

interface StateProps {
  actions: Genres[]
  adventure: Genres[]
  animations: Genres[]
  war: Genres[]
  poster_path: string
  overview: string
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

const Home: React.FC<Props> = () => {
  useEffect(() => {
    loadRequest()
  }, [])

  const actions = useSelector((state: AplicationState) => state.films.actions)
  const adventure = useSelector((state: AplicationState) => state.films.adventure)
  const animations = useSelector((state: AplicationState) => state.films.animations)
  const war = useSelector((state: AplicationState) => state.films.war)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<any>()

  const dispatch = useDispatch()

  const itemActions = (index: number) => {
    dispatch(fetchVideo(actions[index].id))
    navigation.navigate('About', { movie: actions[index] })
  }
  
  const itemAdventure = (index: number) => {
    dispatch(fetchVideo(adventure[index].id))
    navigation.navigate('About', { movie: adventure[index] })
  }

  const itemAnimations = (index: number) => {
    dispatch(fetchVideo(animations[index].id))
    navigation.navigate('About', { movie: animations[index] })
  }

  const itemWar = (index: number) => {
    dispatch(fetchVideo(war[index].id))
    navigation.navigate('About', { movie: war[index] })
  }

  if ((Object.keys(actions).length !== 20) && (Object.keys(animations).length !== 20) && (Object.keys(war).length !== 20)) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.title}>Loading...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>

        <FieldSearch />

        <ScrollView>
          
          <Text style={styles.title}>Action:</Text>

          <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

              <View style={{ flexDirection: 'row', margin: 2, justifyContent: "space-between" }}>
                {Object.keys(actions).map((index: string) => {
                  return (
                    <TouchableHighlight onPress={() => itemActions(parseInt(index))} underlayColor="#433f64" key={index}>

                      <View key={index}>
                        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${actions[index].poster_path}` }} style={styles.images} />

                      </View>

                    </TouchableHighlight>
                  )
                })}
              </View>

            </ScrollView>
          </View>
          
          <Text style={styles.title}>Adventure:</Text>

          <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

              <View style={{ flexDirection: 'row', margin: 2, justifyContent: "space-between" }}>
                {Object.keys(adventure).map((index: string) => {

                  return (
                    <TouchableHighlight onPress={() => itemAdventure(parseInt(index))} underlayColor="#433f64" key={index}>

                      <View key={index}>
                        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${adventure[index].poster_path}` }} style={styles.images} />

                      </View>

                    </TouchableHighlight>
                  )
                })}
              </View>

            </ScrollView>
          </View>

          <Text style={styles.title}>Animation:</Text>

          <View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

              <View style={{ flexDirection: 'row' }}>
                {Object.keys(animations).map((index: string) => {
                  return (
                    <TouchableHighlight onPress={() => itemAnimations(parseInt(index))} underlayColor="#433f64" key={index}>

                      <View key={index}>
                        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${animations[index].poster_path}` }} style={styles.images} />

                      </View>

                    </TouchableHighlight>
                  )
                })}
              </View>
            </ScrollView>

          </View>

          <Text style={styles.title}>War:</Text>

          <View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

              <View style={{ flexDirection: 'row' }}>
                {Object.keys(war).map((index: string) => {
                  return (
                    <TouchableHighlight onPress={() => itemWar(parseInt(index))} underlayColor="#433f64" key={index}>

                      <View key={index}>
                        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${war[index].poster_path}` }} style={styles.images} />

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 5,
    marginLeft: 10,
    color: '#fff'
  },
  overview: {
    flexWrap: 'wrap',
    paddingTop: 7,
  },
})

export default Home

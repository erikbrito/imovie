import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { AplicationState } from '@redux/store'
import { Genres } from '@redux/Home/types'
import { loadRequest } from '@redux/Home/actions'
import { fetchVideo } from '@redux/About/actions'
import FieldSearch from './fieldSearch'
import * as SplashScreen from 'expo-splash-screen'

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
    setTimeout(() => {
      SplashScreen.hideAsync()
      loadRequest()
    }, 5000)
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

  if ((Object.keys(actions).length === 0) && (Object.keys(animations).length === 0) && (Object.keys(war).length === 0)) {
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
                    <TouchableHighlight testID={`action-button-${index}`} onPress={() => itemActions(parseInt(index))} underlayColor="#3d3b3b" key={index}>

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
                    <TouchableHighlight testID={`adventure-button-${index}`} onPress={() => itemAdventure(parseInt(index))} underlayColor="#3d3b3b" key={index}>

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
                    <TouchableHighlight testID={`animations-button-${index}`} onPress={() => itemAnimations(parseInt(index))} underlayColor="#3d3b3b" key={index}>

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
                    <TouchableHighlight testID={`war-button-${index}`} onPress={() => itemWar(parseInt(index))} underlayColor="#3d3b3b" key={index}>

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

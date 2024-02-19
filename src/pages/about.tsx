import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Platform, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import { AplicationState } from '@redux/store'
import { Video, Details } from '@redux/about/types'
import { WebView } from 'react-native-webview'
import { Button, Card, Portal, Dialog } from 'react-native-paper'
import { useRoute } from '@react-navigation/native'

interface Params {
  video: Video[]
  id: number
  movie: {id: number}
  title: string
  overview: string
}

interface Infor {
  details: Details,
}

type Props = Params & Infor

const About: React.FC<Props> = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const route = useRoute()
  const routeParams = route.params as Params

  const video = useSelector((state: AplicationState) => state.video.data)
  const details = useSelector((state: AplicationState) => state.video.details)
  const { id, genres, poster_path, title, release_date, vote_average, runtime, overview } = details

  const genero = () => {
    const gen = genres.map((genres: { name: string }) => genres.name)
    return gen.join(', ')
  }

  if (routeParams.movie.id !== id) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, color: '#fff'}}>Loading...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>

        <ScrollView>

          <View style={{ flex: 1 }}>

            <View style={styles.containerMovie}>
              <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }} style={styles.images} />

              <Card style={{ flex: 1, margin: 1, backgroundColor: '#4b4771' }}>
                <View style={styles.containerInfo}>

                  <Text numberOfLines={4} style={styles.title}>{title}</Text>

                  <Text style={styles.date}>{release_date.slice(0, 4)}</Text>

                  <View style={{ flexDirection: 'row', justifyContent: "flex-start", marginLeft: 5, marginTop: 5 }}>
                    <Text style={styles.text}>Votes: </Text>
                    <Text style={styles.text}> {vote_average.toString().slice(0, 3)}/10</Text>
                  </View>

                </View>

                <View style={{ flex: 1, justifyContent: "flex-end", margin: 8 }}>
                  <Button icon='heart' onPress={() => { setModalVisible(!modalVisible) }} mode='elevated' style={{ position: "relative", bottom: 5 }}>
                    Favorite
                  </Button>
                </View>

              </Card>

            </View>

            <Portal>
              <Dialog style={{ backgroundColor: '#fff' }} visible={modalVisible} onDismiss={ () => {setModalVisible(!modalVisible)} }>
                <Dialog.Icon icon="alert" />
                <Dialog.Title style={{ textAlign: 'center' }}>You clicked to favorite!!</Dialog.Title>
                <Dialog.Content>
                  <Button onPress={ () => {setModalVisible(!modalVisible)} }>Exit</Button>
                </Dialog.Content>
              </Dialog>
            </Portal>


            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10, marginTop: 15 }}>
              <Text style={{ fontWeight: 'bold', color: '#fff' }}>Genres: </Text>

              <Text numberOfLines={2} style={styles.text}>{genero()}</Text>
            </View>

            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10, marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold', color: '#fff' }}>Runtime:</Text>

              <Text style={styles.text}> {runtime} minutes</Text>
            </View>

            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text numberOfLines={10} ellipsizeMode="tail" style={styles.overview}>{overview}</Text>
            </View>


            {
              Object.keys(video).map((index: string) => {
                if (video[index].name.includes('Official Trailer')) {
                  return (
                    <View key={index} style={{ margin: 10, marginTop: 30 }}>
  
                      <View>
                        <Text style={styles.videoText}>Trailer</Text>
  
                        <WebView
                          allowsFullscreenVideo
                          mediaPlaybackRequiresUserAction
                          style={styles.WebViewContainer}
                          source={{ uri: `https://www.youtube.com/embed/${video[index].key}` }}
                        />
  
                      </View>
  
                    </View>
                  )
                }
              })
            }

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
    flex: 1,
    flexDirection: 'row'
  },
  images: {
    width: 150,
    height: 210,
    margin: 2,
    justifyContent: "space-between"
  },
  containerInfo: {
    margin: 0
  },
  text: {
    fontWeight: 'normal',
    color: '#fff'
  },
  title: {
    fontWeight: 'bold',
    textAlign: "left",
    fontSize: 25,
    marginTop: 5,
    marginLeft: 5,
    color: '#fff'
  },
  date: {
    marginLeft: 5,
    marginTop: 2,
    color: '#fff'
  },
  videoText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  overview: {
    flexWrap: 'wrap',
    paddingTop: 7,
    flexDirection: 'row',
    color: '#fff'
  },
  WebViewContainer: {
    marginTop: (Platform.OS == 'android') ? 20 : 0,
    width: 395,
    height: 250
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
})

export default About

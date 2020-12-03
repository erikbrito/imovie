import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Platform, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import { AplicationState } from '../Redux/store'
import { Video, Information } from '../Redux/Info/types'
import { WebView } from 'react-native-webview';
import { Button, Card, TouchableRipple } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

interface Params {
  video: Video[],
  id: number,
  movie: any,
  title: string,
  backdrop_path: string,
  overview: string
}

interface Infor {
  information: Information,
}

type Props = Params & Infor

const Info: React.FC<Props> = () => {

  const route = useRoute()
  const routeParams = route.params as Params

  const video = useSelector((state: AplicationState) => state.video.data)
  const information = useSelector((state: AplicationState) => state.video.information)

  const genero = () => {
    const gen = information.genres.map((genres: any) => genres.name)
    return gen.join(', ')
  }

  if ((routeParams.movie.id !== information.id)) {
    return (
      <View style={{ flex:1, justifyContent: "center",alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text>Loading...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>

        <ScrollView>

          <View style={{ flex: 1 }}>

            <View style={styles.containerMovie}>
              <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${information.poster_path}` }} style={styles.images} />

              <Card style={{ flex: 1, margin: 1 }}>
                <View style={styles.text}>

                  <Text numberOfLines={4} style={styles.title}>{information.title}</Text>

                  <Text style={styles.date}>{information.release_date.slice(0, 4)}</Text>

                  <View style={{ flexDirection: 'row', justifyContent: "flex-start", marginLeft: 5, marginTop: 5 }}>
                    <Text style={{ fontWeight: 'normal' }}>Votes: </Text>
                    <Text style={{ fontWeight: 'normal' }}> {information.vote_average}/10</Text>
                  </View>

                </View>

                <View style={{ flex: 1, justifyContent: "flex-end", margin: 8 }}>
                    <Button icon='heart' mode='contained' style={{ position: "relative", bottom: 5 }}>
                      Favorite
                    </Button>
                </View>

              </Card>

            </View>

            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10, marginTop: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>Genres: </Text>

              <Text numberOfLines={2}>{genero()}</Text>
            </View>

            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10, marginTop: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>Runtime:</Text>

              <Text> {information.runtime} minutes</Text>
            </View>

            <View style={{ flexDirection: 'column', margin: 10 }}>
              <Text numberOfLines={10} ellipsizeMode="tail" style={styles.overview}>{information.overview}</Text>
            </View>


            {
              Object.keys(video).slice(0, 1).map((index: any) => {
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
  text: {
    margin: 0
  },
  title: {
    fontWeight: 'bold',
    textAlign: "left",
    fontSize: 25,
    marginTop: 5,
    marginLeft: 5
  },
  date: {
    marginLeft: 5,
    marginTop: 2
  },
  videoText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  overview: {
    flexWrap: 'wrap',
    paddingTop: 7,
    flexDirection: 'row',
  },
  WebViewContainer: {
    marginTop: (Platform.OS == 'android') ? 20 : 0,
    width: 395,
    height: 250
  }
})

export default Info

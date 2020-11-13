import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideo } from '../Redux/Info/actions'
import { AplicationState } from '../Redux/store'
import { Video } from '../Redux/Info/types'
import { WebView } from 'react-native-webview';

interface Params {
  video: Video[],
  id: number,
  movie: any,
  title: string,
  backdrop_path: string,
  overview: string
}

type Props = Params

const Info: React.FC<Props> = () => {

  const route = useRoute()
  const routeParams = route.params as Params

  const id_video = routeParams.movie.id

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideo(id_video))
  }, []);
  // const films = useSelector((state: AplicationState) => state.films.data)

  const video = useSelector((state: AplicationState) => state.video.data)
  // console.log(video)

  //635302
  // const video = useSelector((state: AplicationState) => state.video.data)
  // console.log(video)
  // dispatch(fetchVideo(id_video))
  // const video = useSelector((state: AplicationState) => state.video.array)
  // console.log('YO')

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.containerImages}>

          <View style={{ flexDirection: 'column', margin: 2, justifyContent: "space-between" }}>


            <View style={styles.containerMovie}>
              <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${routeParams.movie.backdrop_path}` }} style={styles.images} />

              <View style={styles.text}>
                <Text style={styles.title}>{routeParams.movie.title}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 15 }}>
                  <Text style={styles.date}>{routeParams.movie.release_date.slice(0, 4)}</Text>
                  <Text style={{ fontWeight: 'normal' }}>Votes: </Text>
                  <Text style={{ fontWeight: 'normal' }}> {routeParams.movie.vote_average}/10</Text>
                </View>

                <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 30 }}>Overview</Text>
                <Text numberOfLines={10} ellipsizeMode="tail" style={styles.overview}>{routeParams.movie.overview}</Text>
              </View>

              {
                Object.keys(video).slice(1, 2).map((index: any) => {
                  return (
                    <View key={index} style={{ margin: 5, marginTop: 50 }}>

                      <View>
                        <Text style={styles.videoText}>Video</Text>

                        <WebView
                          allowsFullscreenVideo
                          allowInlineMediaPlayback
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

          </View>

        </View>
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImages: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerMovie: {
    margin: 5
  },
  images: {
    width: 380,
    height: 180,
    margin: 5,
    justifyContent: "space-between"
  },
  text: {
    margin: 5
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15
  },
  date: {
    marginRight: 35,
  },
  videoText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  overview: {
    flexWrap: 'wrap',
    paddingTop: 7,
    flexDirection: 'row'
  },
  WebViewContainer: {
    marginTop: (Platform.OS == 'android') ? 20 : 0,
    width: 380,
    height: 250
  }
})

export default Info

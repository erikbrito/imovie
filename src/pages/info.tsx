import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';

interface Params {
  movie: any,
  title: string,
  backdrop_path: string,
  overview: string
}

const Info: React.FC = () => {

  const route = useRoute()
  const routeParams = route.params as Params

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.containerImages}>

          <View style={{ flexDirection: 'column', margin: 2, justifyContent: "space-between" }}>


            <View style={styles.containerMovie}>
              <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${routeParams.movie.backdrop_path}` }} style={styles.images} />
            
              <View style={styles.text}>
                <Text style={styles.title}>{routeParams.movie.title}</Text>
                <Text numberOfLines={10} ellipsizeMode="tail" style={styles.overview}>{routeParams.movie.overview}</Text>
              </View>
            
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
  searchbar: {
    margin: 4,
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
    fontWeight: 'bold'
  },
  overview: {
    flexWrap: 'wrap',
    paddingTop: 7,
  },
})

export default Info

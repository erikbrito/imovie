import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'

interface movies {
  title: string | null;
  poster_path: string;
}

const Home = () => {
  const [SearchQuery, setSearchQuery] = useState<string>('');
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    api.get(`/movie?api_key=${ process.env.API_KEY }`).then((repos) => {
      const allRepos = repos.data.results
      setMovies(allRepos)
    });

  }, []);

  return (
    <View style={styles.container}>

      <Searchbar
        placeholder="Search"
        onChangeText={(query: string) => setSearchQuery(query)}
        value={SearchQuery}
        style={styles.searchbar}
      />

      <ScrollView>
        <View style={styles.containerImages}>

          <View style={{ flexDirection: 'column', margin: 10, justifyContent: "space-between" }}>
            {Object.keys(movies).map((index: any) => {
              return (
                <View key={index} style={styles.containerMovie}>
                  <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movies[index].poster_path}` }} style={styles.images} />
                  <View style={{ marginRight: 260 }}>
                    <Text style={styles.title}>{movies[index].title}</Text>
                    <Text numberOfLines={6} ellipsizeMode="tail" style={styles.overview}>{movies[index].overview}</Text>
                  </View>
                </View>
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
    flexWrap: 'wrap'
  },
})

export default Home

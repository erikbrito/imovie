import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'

const Home = () => {
  const [SearchQuery, setSearchQuery] = useState<string>('');
  const [data, setData] = useState([]);

  useEffect(() => {
      api.get(`movie/343611?api_key=${ process.env.API_KEY }`).then((repos) => {
        const allRepos = repos.data;
        setData(allRepos)
        console.log(allRepos)
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
          <View style={{ flexDirection: 'row', margin: 20, justifyContent: "space-between" }}>
            <Image
              style={styles.images}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
              }}
            />
            <Image
              style={styles.images}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', margin: 20, justifyContent: "space-between" }}>
            <Image
              style={styles.images}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
              }}
            />
            <Image
              style={styles.images}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
              }}
            />
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
    flexDirection: "column",
    justifyContent: "space-around",
  },
  images: {
    width: 180,
    height: 300,
    justifyContent: "space-between"
  }
})

export default Home

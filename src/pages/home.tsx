import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper'
// import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'

const Home = () => {
  const [SearchQuery, setSearchQuery] = useState<string>('');
  const [data, setData] = useState([]);

  useEffect(() => {
      api.get('movie/343611?api_key=0087505ff8561639dc9744342748aeed').then((repos) => {
        const allRepos = repos.data;
        setData(allRepos)
        console.log(allRepos)
      });
  }, []);


  // const navigation = useNavigation()

  // function handleNavigateTo

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity>
        <Icon name="arrow-left" size={25} color="#9932CC" />
      </TouchableOpacity> */}

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















// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
// });

// const DisplayAnImage = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://upload.wikimedia.org/wikipedia/pt/2/20/2_Fast_2_Furious_2003.jpg',
//         }}
//       />
//       <Image
//         style={styles.logo}
//         source={{
//           uri:
//             'https://upload.wikimedia.org/wikipedia/pt/2/20/2_Fast_2_Furious_2003.jpg',
//         }}
//       />
//     </View>
//   );
// }

// export default DisplayAnImage;

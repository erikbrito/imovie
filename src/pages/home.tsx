import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Films } from '../Redux/Home/types'
import { AplicationState } from '../Redux/store'
import { loadRequest } from '../Redux/Home/actions'

interface StateProps {
  films: Films[];
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

  const films = useSelector((state: AplicationState) => state.films.data)

  const navigation = useNavigation();

  const itemPressed = (index: any) => {
    navigation.navigate('About',
      { movie: films[index] }
    )
  }

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.containerImages}>

          <View style={{ flexDirection: 'column', margin: 2, justifyContent: "space-between" }}>
            {Object.keys(films).map((index: any) => {
              return (
                <TouchableHighlight onPress={ () => itemPressed(index)} underlayColor="lightgray" key={index}>

                  <View key={index} style={styles.containerMovie}>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${films[index].poster_path}` }} style={styles.images} />
                    
                    <View style={{ marginRight: 260 }}>
                      <Text style={styles.title}>{films[index].title}</Text>
                      <Text numberOfLines={6} ellipsizeMode="tail" style={styles.overview}>{films[index].overview}</Text>
                    </View>

                  </View>

                </TouchableHighlight>
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
    flexWrap: 'wrap',
    paddingTop: 7,
  },
})

export default Home
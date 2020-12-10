import React from 'react'
import {StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { fetchMovie } from '../Redux/Search/actions'
import { Searchbar } from 'react-native-paper';

const Trending: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);

  const searchPress = () => {
    dispatch(fetchMovie(searchQuery))
    navigation.navigate('Search')
  }

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={searchPress}
      style={styles.searchbar}
    />
  )
}

const styles = StyleSheet.create({
  searchbar: {
    margin: 10,
    backgroundColor: '#eeeeee'
  }
})

export default Trending

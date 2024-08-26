import React from 'react'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { fetchMovie } from '@Redux/Discover/actions'
import { DiscoverBar } from '@Global/Components/styled.styles'

const fieldSearch: React.FC = () => {
  const useAppNavigation: () => NavigationProp<ParamListBase> = useNavigation
  const navigation = useAppNavigation()
  
  const [searchQuery, setSearchQuery] = React.useState('')
  const onChangeSearch = (query: string) => setSearchQuery(query)
  
  const dispatch = useDispatch()
  const searchPress = () => {
    dispatch(fetchMovie(searchQuery))
    navigation.navigate('Search')
  }

  return (
    <DiscoverBar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={searchPress}
    />
  )
}

export default fieldSearch
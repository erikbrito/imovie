import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovie } from '@Redux/Discover/actions'
import { DiscoverBar } from '@Global/Components/styled.styles'
import { useAppNavigation } from '@Utils/useAppNavigation'

const FieldSearch: React.FC = () => {
  const navigation = useAppNavigation<'Search'>()

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

export default FieldSearch

import styled from 'styled-components/native'
import { Searchbar } from 'react-native-paper'
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export const View = styled.View`
  margin-bottom: ${({ type }) => type === 'War' && wp('20%')}px;
`

export const DiscoverBar = styled(Searchbar)`
  margin: 10px;
  background-color: ${({ theme }) => theme.COLORS.TERTIARY}
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 5px;
  margin-left: 10px;
  color: ${({ theme }) => theme.COLORS.TERTIARY}
`

export const InternalView = styled.View`
  flex-direction: row;
  margin: 2px;
  justify-content: space-between
`

export const Poster = styled.Image`
  width: 120px;
  height: 180px;
  margin: 5px;
  justify-content: space-between
`
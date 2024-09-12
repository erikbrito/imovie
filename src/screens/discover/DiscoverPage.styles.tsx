import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export const Container = styled.View`
  flex: 1;
`

export const ListImages = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

export const ResultContainer = styled.View`
  flex-direction: column;
  margin: ${wp('0.5%')}px; 
  justify-content: space-between
`

export const Result = styled.View`
  margin: ${wp('1%')}px;
  flex-direction: row
`

export const Poster = styled.Image`
  width: ${wp('30%')}px;
  height: ${hp('25%')}px;
  margin: 5px;
  justify-content: space-between
`

export const Info = styled.View`
  margin-right: ${wp('65%')}px;
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TERTIARY}
`

export const Overview = styled.Text`
  flex-wrap: wrap;
  padding-top: ${wp('2%')}px;
  color: ${({ theme }) => theme.COLORS.TERTIARY}
`
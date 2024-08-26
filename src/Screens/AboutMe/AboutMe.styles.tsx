import styled from 'styled-components/native'
import { Container } from '@Global/styles'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export const AboutContainer  = styled(Container)`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`
export const TextContainer = styled.View`
  flex: 1;
  flex-wrap: wrap; 
  flex-direction: row;
  margin-left: ${wp('15%')}px; 
  margin-top: 5px
`
export const Image = styled.Image`
  width: ${wp('50%')}px;
  height: ${hp('30%')}px;
  margin-top: ${wp('25%')}px;
  margin-left: ${wp('25%')}px;
  border-width: 5px;
  border-radius: ${wp('50%')}px;
`

export const Title  = styled.Text`
  left: 0;
  width: ${wp('95%')}px;
  top: ${({ lenghtTitle }) => lenghtTitle ? hp('20%') : hp('25%')}px;
  color: ${({ theme }) => theme.COLORS.TERTIARY};
  font-weight: bold;
  font-size: 30px;
`

export const Link = styled.Text`
  color: #5c5cd6;
  margin-left: ${wp('15%')}px;
  margin-top: 25px;
  font-size: 20px;
`
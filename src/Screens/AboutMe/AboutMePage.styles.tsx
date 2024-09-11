import styled from 'styled-components/native'
import { Container } from '@Global/styles'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export const AboutContainer = styled(Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const TextContainer = styled.View`
  flex: 1;
  flex-wrap: wrap; 
  flex-direction: row;
  margin-left: ${wp('15%')}px; 
  margin-top: 5%;
`

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: 50%;
  height: 25%;
  margin-top: ${hp('15%')}px;
  border-radius: 50px;
`

export const Title = styled.Text`
  left: 0;
  width: ${wp('100%')}px;
  top: ${({ lenghtTitle }) => lenghtTitle ? hp('20%') : hp('20%')}px;
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
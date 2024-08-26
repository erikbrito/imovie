import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { Chip, Icon } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { WebView } from 'react-native-webview'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export const Container = styled.View`
  flex: 1;
`
export const LoadindContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Loading = styled.Text`
  font-weight: bold; 
  font-size: 18px; 
  margin: 5px; 
  color: #fff;
`

export const InfoHeader = styled.View`
  flex: 1px;
  flex-direction: row;
`

export const Image = styled.ImageBackground`
  width: ${wp('100%')}px;
  height: ${hp('40%')}px;
  justify-content: space-between;
  background-color:'#00000060';
`

export const Title  = styled.Text`
  position: absolute;
  left: 0;
  width: ${wp('95%')}px;
  top: ${({ lenghtTitle }) => lenghtTitle ? hp('20%') : hp('25%')}px;
  color: ${({ theme }) => theme.COLORS.TERTIARY};
  font-weight: bold;
  font-size: 30px;
  margin: ${wp('1%')}px;
`

export const Gradient  = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  top: ${wp('5%')}px;
  height: ${hp('37%')}px
`

export const Badges  = styled(Chip)`
  position: relative;
  width: 65px;
  float: left;
  top: ${hp('33%')}px;
  margin-left: ${wp('2%')}px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 50px;
`
export const Favorite  = styled(Icon)`
position: relative;
  width: 65px;
  float: left;
  top: ${hp('100%')}px;
  margin-left: ${wp('2%')}px;
  border-radius: 50px;
`

export const TextContainer = styled.View`
flex: 1;
flex-wrap: wrap; 
flex-direction: row; 
justify-content: flex-start; 
margin-left: 10px; 
margin-top: 5px
`

export const Label = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TERTIARY}
`

export const Text = styled.Text`
  font-weight: normal;
    color: ${({ theme }) => theme.COLORS.TERTIARY}
`

export const Trailer = styled.View`
  margin: ${wp('2%')}px;; 
  margin-bottom: ${wp('20%')}px;
`

export const Youtube = styled(WebView)`
  margin-top: ${(Platform.OS == 'android') ? 20 : 0}px;
  width: 395px;
  height: 250px
`
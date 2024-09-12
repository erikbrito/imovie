import React, { useState } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { AplicationState } from 'src/redux/Store'
import { Video, Details } from '@Redux/about/Types'
import { useRoute } from '@react-navigation/native'
import { Container } from '@Globals/Styles'
import {
  LoadindContainer,
  Loading,
  InfoHeader,
  Image,
  Title,
  Gradient,
  Badges,
  TextContainer,
  Label,
  Text,
  Trailer,
  Youtube
} from './AboutPage.styles'
import theme from '@Globals/theme/Theme'
import { IconButton } from 'react-native-paper'

interface Params {
  video: Video[]
  id: number
  movie: { id: number }
  title: string
  overview: string
}

interface Infor {
  details: Details
}

type Props = Params & Infor

const About: React.FC<Props> = ({ video, details }) => {
  const [favorite, setFavorite] = useState(false)

  const route = useRoute()
  const routeParams = route.params as Params

  const {
    id,
    genres,
    backdrop_path,
    title,
    release_date,
    vote_average,
    runtime,
    overview
  } = details

  const genero = () => {
    const gen = genres.map((genres: { name: string }) => genres.name)
    return gen.join(', ')
  }

  if (routeParams.movie.id !== id) {
    return (
      <LoadindContainer>
        <ActivityIndicator size="large" color="#ee7126" />
        <Loading>Loading</Loading>
      </LoadindContainer>
    )
  } else {
    return (
      <Container>
        <ScrollView>
          <Container>
            <InfoHeader>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                }}
              >
                <Gradient colors={['transparent', theme.COLORS.PRIMARY]} />
                <Title lenghtTitle={title.length > 30}>{title}</Title>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Badges selectedColor={theme.COLORS.TERTIARY}>
                    {release_date.slice(0, 4)}
                  </Badges>
                  <Badges icon="star" selectedColor={theme.COLORS.TERTIARY}>
                    {vote_average.toString().slice(0, 3)}
                  </Badges>
                </View>
                <View
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    bottom: 13,
                    right: 15
                  }}
                >
                  {favorite ? (
                    <IconButton
                      icon="bookmark"
                      style={{ left: -15, bottom: -15 }}
                      iconColor={theme.COLORS.SECONDARY}
                      size={35}
                      onPress={() => setFavorite(false)}
                    />
                  ) : (
                    <IconButton
                      icon="bookmark-outline"
                      style={{ left: -15, bottom: -15 }}
                      iconColor={theme.COLORS.TERTIARY}
                      size={35}
                      onPress={() => setFavorite(true)}
                    />
                  )}
                </View>
              </Image>
            </InfoHeader>

            <TextContainer>
              <Label>Genres: </Label>
              <Text numberOfLines={2}>{genero()}</Text>
            </TextContainer>

            <TextContainer>
              <Label>Runtime:</Label>
              <Text> {runtime} minutes</Text>
            </TextContainer>

            <TextContainer>
              <Text
                numberOfLines={10}
                ellipsizeMode="tail"
                style={{ paddingTop: 7 }}
              >
                {overview}
              </Text>
            </TextContainer>

            {Object.keys(video).map((index: string) => {
              if (video[index].name.includes('Official Trailer')) {
                return (
                  <Trailer key={index}>
                    <Youtube
                      allowsFullscreenVideo
                      mediaPlaybackRequiresUserAction={true}
                      source={{
                        uri: `https://www.youtube.com/embed/${video[index].key}`
                      }}
                    />
                  </Trailer>
                )
              }
            })}
          </Container>
        </ScrollView>
      </Container>
    )
  }
}

const mapStateToProps = (state: AplicationState) => ({
  video: state.video.data,
  details: state.video.details
})

export default connect(mapStateToProps)(About)

import React, { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { AplicationState } from 'src/redux/Store'
import FieldSearch from '@Globals/components/FieldSearch'
import Movies from '@Globals/components/Movies'
import { Genres } from '@Redux/home/Types'
import { Container } from '@Globals/Styles'

interface StateProps {
  actions: Genres[]
  adventures: Genres[]
  animations: Genres[]
  war: Genres[]
  loading: boolean
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

SplashScreen.preventAutoHideAsync()

const Home: React.FC<Props> = ({
  actions,
  adventures,
  animations,
  war,
  loading
}) => {
  const onLayoutRootView = useCallback(async () => {
    if (loading) {
      await SplashScreen.hideAsync()
    }
  }, [loading])

  if (!loading) {
    return null
  }

  return (
    <Container onLayout={onLayoutRootView}>
      <FieldSearch />

      <ScrollView>
        <Movies movies={actions} session="Action" />
        <Movies movies={adventures} session="Adventure" />
        <Movies movies={animations} session="Animation" />
        <Movies movies={war} session="War" />
      </ScrollView>
    </Container>
  )
}

const mapStateToProps = (state: AplicationState) => ({
  actions: state.films.actions,
  adventures: state.films.adventure,
  animations: state.films.animations,
  war: state.films.war,
  loading: state.films.loading
})

export default connect(mapStateToProps)(Home)

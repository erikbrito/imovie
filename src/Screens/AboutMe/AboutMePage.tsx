import React from 'react'
import {Linking} from 'react-native'
import { AboutContainer, Image, Title, TextContainer, Link } from './AboutMePage.styles'

interface Params {
}

const Search: React.FC<Params> = () => {

  return (
    <AboutContainer>
      <Image source={{ uri: `https://media.licdn.com/dms/image/v2/D4D03AQEelzL7YRG_cg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720561323506?e=1729728000&v=beta&t=m3rSJA9sBjY-jd5pE5s0xGM8687reLIIyQ_6og0hFkg` }}/>
      
      <TextContainer>
        <Title>José Érik Brito Pereira</Title> 
        <Link onPress={() => Linking.openURL('https://www.linkedin.com/in/erik-brito-8b2b02b6/')}>Linkdin</Link>
        <Link onPress={() => Linking.openURL('https://github.com/erikbrito')}>GitHub</Link>
      </TextContainer>
    </AboutContainer>
  )
}

export default Search

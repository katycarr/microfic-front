import React from 'react'
import { withNavigation } from 'react-navigation'
// import { View, Button } from 'react-native'
import {styles} from './FooterStyle'
import { Footer, FooterTab, Button, Text } from 'native-base'

class FooterBar extends React.Component {
  render() {
    return(
      <Footer >
        <FooterTab>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
          >
          <Text>Home</Text>
        </Button>
          <Button

            onPress={() => this.props.navigation.navigate('Profile')}
          >
          <Text>Profile</Text>
        </Button>
          <Button
            onPress={() => this.props.navigation.navigate('NewFic')}
          >
          <Text>Write</Text>
        </Button>
        </FooterTab>
    </Footer>
    )
  }
}

export default withNavigation(FooterBar)

import React from 'react'
import { withNavigation } from 'react-navigation'
import { View, Button } from 'react-native'
import {styles} from './FooterStyle'

class Footer extends React.Component {
  render() {
    return(
      <View style={styles.view}>
        <Button
          style={styles.button}
          title='Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          style={styles.button}
          title='Login'
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          style={styles.button}
          title='Profile'
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          style={styles.button}
          title='Write'
          onPress={() => this.props.navigation.navigate('NewFic')}
        />
      </View>
    )
  }
}

export default withNavigation(Footer)

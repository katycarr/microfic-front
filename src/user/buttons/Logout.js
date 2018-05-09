import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { withNavigation } from 'react-navigation'
import {compose} from 'redux'
import {Button, Text} from 'native-base'

class LogoutButton extends React.Component {
  handlePress = () => {
    this.props.logout()
    this.props.navigation.navigate('UserOptions')
  }

  render() {
    return (
      <Button
        block
        light
        onPress={this.handlePress}
        >
        <Text>Logout</Text>
      </Button>
    )
  }
}

export default compose(withNavigation,connect(null, {logout}))(LogoutButton)

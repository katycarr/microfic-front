import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { withNavigation } from 'react-navigation'

class LogoutButton extends React.Component {
  handlePress = () => {
    this.props.logout()
    this.props.navigation.navigate('UserOptions')
  }

  render() {
    return (
      <Button
        title='Logout'
        onPress={this.handlePress}
        />
    )
  }
}

export default withNavigation(connect(null, {logout})(LogoutButton))

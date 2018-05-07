import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import withAuth from '../hocs/withAuth'
import LogoutButton from './buttons/Logout'


class ProfileScreen extends React.Component {

  componentWillReceiveProps = nextProps => {
    !nextProps.user && this.props.navigation.navigate('UserOptions')
  }

  render() {
    return(
      <View>
        <Text>
          Profile
        </Text>
        <LogoutButton />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user
  }
}

export default withAuth(connect(mapStateToProps)(ProfileScreen))

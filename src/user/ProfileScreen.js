import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import withAuth from '../hocs/withAuth'


class ProfileScreen extends React.Component {

  render() {
    console.log(this.props.user)
    return(
      <Text>
        Profile
      </Text>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user
  }
}

export default withAuth(connect(mapStateToProps)(ProfileScreen))

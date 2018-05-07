import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import withAuth from '../hocs/withAuth'
import LogoutButton from './buttons/Logout'
import Footer from '../Footer'
import {styles} from './ProfileStyle'


class ProfileScreen extends React.Component {

  componentWillReceiveProps = nextProps => {
    !nextProps.user && this.props.navigation.navigate('UserOptions')
  }

  render() {
    return(
      <View style={styles.view}>
        <Text>
          Hi, {this.props.user.username}
        </Text>
        <LogoutButton />
        <Footer />
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

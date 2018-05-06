import React from 'react'
import {connect} from 'react-redux'
import {getUser} from '../actions/auth'
import { AsyncStorage, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

function withAuth(WrappedComponent) {
  class AuthComponent extends React.Component {
    state = {
      authDone: this.props.loggedIn
    }

    async getToken() {
      try {
        const value = await AsyncStorage.getItem('token');
        if (!value) {
          this.props.navigation.navigate('Login')
        } else if (value !== null) {
          console.log(value)
          this.props.getUser(value);
        }
      } catch (error) {
        console.log(error)
      }
    }

    componentDidMount() {
      if(!this.props.user) {
        this.getToken()
      } else {
        this.setState({ authDone: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authDone: true });
      }
    }

    render() {
      if(this.state.authDone) {
        return <WrappedComponent {...this.props} />
      } else {
        return <Text>LOADING</Text>
      }
    }
  }

  function mapStateToProps(state) {
    return {
      loggedIn: !!state.authReducer.user,
      user: state.authReducer.user
    }
  }

  return withNavigation(connect(mapStateToProps, {getUser})(AuthComponent))
}



export default withAuth

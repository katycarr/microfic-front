import React from 'react'
import {connect} from 'react-redux'
import {getUser} from '../actions/auth'
import { AsyncStorage, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Spinner } from 'native-base'

function withAuth(WrappedComponent) {
  class AuthComponent extends React.Component {
    state = {
      authDone: this.props.loggedIn,
      token: null
    }

    async getToken() {
      try {
        const value = await AsyncStorage.getItem('token');
        if (!value) {
          this.props.navigation.navigate('UserOptions')
        } else if (value !== null) {
          this.props.getUser(value);
          this.setState({token:value})
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
        return <WrappedComponent {...this.props} token={this.state.token}/>
      } else {
        return <Spinner />
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

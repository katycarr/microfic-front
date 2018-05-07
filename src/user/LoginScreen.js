import React from 'react'
import {View, Button} from 'react-native'
import { connect } from 'react-redux'
import { loginUser } from '../actions/auth'
import t from 'tcomb-form-native'

const Form = t.form.Form;

const options = {
  label: 'Login',
  auto: 'placeholders',
  fields: {
    username: {
      autoCapitalize: 'none'
    },
    password: {
      autoCapitalize: 'none',
      secureTextEntry: true
    }
  }
}

const User = t.struct({
  username: t.String,
  password: t.String
})

class LoginScreen extends React.Component {

  handleSubmit = () => {
    const value = this._form.getValue()
    this.props.loginUser(value)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    nextProps.user && this.props.navigation.navigate('Profile')
  }


  render() {
    return(
      <View>
        <Form
          type={User}
          ref={c => this._form = c}
          options={options}
          />
        <Button title='Submit' onPress={this.handleSubmit} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user
  }
}

export default connect(mapStateToProps, {loginUser})(LoginScreen)

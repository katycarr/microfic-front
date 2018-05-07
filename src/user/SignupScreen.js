import React from 'react'
import {View, TextInput, Text, Button} from 'react-native'
import t from 'tcomb-form-native'
import { connect } from 'react-redux'
import { signupUser } from '../actions/auth'

const Form = t.form.Form;

const options = {
  label: 'Signup',
  auto: 'placeholders',
  fields: {
    username: {
      autoCapitalize: 'none'
    },
    password: {
      autoCapitalize: 'none',
      secureTextEntry: true
    },
    passwordConfirmation: {
      autoCapitalize: 'none',
      secureTextEntry: true
    }
  }
}

const User = t.struct({
  username: t.String,
  password: t.String,
  passwordConfirmation: t.String
})

class SignupScreen extends React.Component {

  handleSubmit = () => {
    const value = this._form.getValue()
    this.props.signupUser(value)
  }

  componentWillReceiveProps(nextProps) {
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

export default connect(mapStateToProps, {signupUser})(SignupScreen)

import React from 'react'
import UserAuthContainer from './auth/Container'
import UserAuthForm from './auth/Form'
import { loginUser } from '../actions/auth'
import { connect } from 'react-redux'


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


class LoginScreen extends React.Component {
  render() {
    return(
      <UserAuthContainer>
        <UserAuthForm options={options}
          fields={['username','password']}
          handleSubmit={(value) => this.props.loginUser(value)}
        />
      </UserAuthContainer>
    )
  }
}

export default connect(null, {loginUser})(LoginScreen)

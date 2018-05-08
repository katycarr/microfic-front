import React from 'react'
import UserAuthContainer from './auth/Container'
import UserAuthForm from './auth/Form'
import { connect } from 'react-redux'
import { signupUser } from '../actions/auth'



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



class SignupScreen extends React.Component {

  render() {
    return(
      <UserAuthContainer>
        <UserAuthForm options={options}
          fields={['username','password','passwordConfirmation']}
          handleSubmit={(value) => this.props.signupUser(value)}
        />
      </UserAuthContainer>
    )
  }
}



export default connect(null, {signupUser})(SignupScreen)

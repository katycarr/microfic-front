import React from 'react'
import { connect } from 'react-redux'
// import { View } from 'react-native'
import { withNavigation } from 'react-navigation'
import { compose } from 'redux'
import { styles } from './Style'
import { Container } from 'native-base'

class UserAuthContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    nextProps.user && this.props.navigation.navigate('Profile')
  }

  render() {
    return(
      <Container >
        {this.props.children}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user
  }
}

export default compose(withNavigation, connect(mapStateToProps))(UserAuthContainer)

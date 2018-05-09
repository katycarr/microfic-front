import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import withAuth from '../hocs/withAuth'
import LogoutButton from './buttons/Logout'
import FooterBar from '../Footer'
import {styles} from './ProfileStyle'
import { Container, Content, H1} from 'native-base'


class ProfileScreen extends React.Component {

  componentWillReceiveProps = nextProps => {
    !nextProps.user && this.props.navigation.navigate('UserOptions')
  }

  render() {
    return(
      <Container>
        <Content padder contentContainerStyle={styles.view}>
          <H1>
            {this.props.user.username}
          </H1>
          <LogoutButton />
        </Content>
        <FooterBar />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user
  }
}

export default withAuth(connect(mapStateToProps)(ProfileScreen))

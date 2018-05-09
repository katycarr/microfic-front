import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, Container, Content } from 'native-base'
import FooterBar from '../Footer'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginVertical:10,
  }
})

const OptionsScreen = (props) => {
  return(
    <Container>
      <Content padder contentContainerStyle={styles.view}>
        <Button style={styles.button} block
          onPress={() => props.navigation.navigate('Signup')}
          >
          <Text>Signup</Text>
        </Button>

        <Button block style={styles.button}
          onPress={() => props.navigation.navigate('Login')}
          >
          <Text>Login</Text>
        </Button>
      </Content>
      <FooterBar />
    </Container>
  )
}

export default OptionsScreen

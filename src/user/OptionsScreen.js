import React from 'react'
import { View, Button } from 'react-native'

const OptionsScreen = (props) => {
  return(
    <View>
      <Button
        title='Signup'
        onPress={() => props.navigation.navigate('Signup')}
        />
      <Button
        title='Login'
        onPress={() => props.navigation.navigate('Login')}
        />
    </View>
  )
}

export default OptionsScreen

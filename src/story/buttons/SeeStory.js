import React from 'react'
import { Button } from 'react-native'
import { withNavigation } from 'react-navigation'

class SeeStoryButton extends React.Component {

  handlePress = () => {
    this.props.navigation.navigate('Read', {story: this.props.story})
  }

  render() {
    return(
      <Button title='Read' onPress={this.handlePress} />
    )
  }
}

export default withNavigation(SeeStoryButton)

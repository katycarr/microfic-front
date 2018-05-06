import React from 'react'
import { ScrollView, Text } from 'react-native'

class StoryShowScreen extends React.Component {

  render() {
    const { params } = this.props.navigation.state;
    return(
      <ScrollView>
        <Text>{params.story.story}</Text>
      </ScrollView>
    )
  }
}

export default StoryShowScreen

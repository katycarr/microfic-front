import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './Style'
import SeeStoryButton from '../buttons/SeeStory'

class StoryIndexView extends React.Component {

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.centerText}>{this.props.story.title}</Text>
        <Text>{this.props.story.summary}</Text>
        <SeeStoryButton story={this.props.story} />
      </View>
    )
  }
}

export default StoryIndexView

import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { styles } from './Style'
import { withNavigation } from 'react-navigation'



class StoryIndexView extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('Read', {story: this.props.story})
  }

  render() {
    return (
      <TouchableHighlight onPress={this.handlePress} >
        <View style={styles.view}>
          <Text style={styles.centerText}>{this.props.story.title}</Text>
          <Text>{this.props.story.summary}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default withNavigation(StoryIndexView)

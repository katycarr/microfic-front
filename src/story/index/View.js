import React from 'react'
import { TouchableHighlight } from 'react-native'
import { styles } from './Style'
import { withNavigation } from 'react-navigation'
import { Card, CardItem, Body, Text } from 'native-base'



class StoryIndexView extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate('Read', {story: this.props.story})
  }

  render() {
    return (
        <Card>
          <CardItem header button onPress={this.handlePress}>
            <Text>{this.props.story.title}</Text>
          </CardItem>
          <CardItem >
            <Text note>{this.props.story.summary}</Text>
          </CardItem>
          <CardItem footer>
            <Text>By {this.props.story.user.username}</Text>
          </CardItem>
        </Card>
    )
  }
}

export default withNavigation(StoryIndexView)

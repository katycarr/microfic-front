import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { styles } from './Style'
import StoryIndexView from './View'
import { connect } from 'react-redux'
import { fetchStories } from '../../actions/fics'
import Footer from '../../Footer'

class StoryIndexContainer extends React.Component {


  componentDidMount = () => {
    this.props.fetchStories()
  }

  render() {
    if (this.props.fics.length > 0) {
      const storyViews = this.props.fics.map(story => {
        return <StoryIndexView story={story} key={story.id} />
      })
      return(
        <View>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {storyViews}
          </ScrollView>
          <Footer />
        </View>
      )
    } else {
      return (
        <Text>Loading...</Text>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    fics: state.ficsReducer.all
  }
}

export default connect(mapStateToProps, {fetchStories})(StoryIndexContainer)

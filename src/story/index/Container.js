import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { styles } from './Style'
import StoryIndexView from './View'
import { connect } from 'react-redux'
import { fetchStories } from '../../actions/fics'
import FooterBar from '../../Footer'
import { Container, List, Spinner } from 'native-base'

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
        <Container>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <List>
              {storyViews}
            </List>

          </ScrollView>
          <FooterBar />
        </Container>
      )
    } else {
      return (
        <Spinner />
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

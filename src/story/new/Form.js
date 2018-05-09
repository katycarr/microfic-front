import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../../hocs/withAuth'
import { createFic } from '../../actions/fics'
import {Form, Item, Input, Textarea, Button, Text, Container, Content} from 'native-base'
import { styles } from './Style'

class NewStoryForm extends React.Component {
  state = {
    title: '',
    summary: '',
    story: ''
  }

  handlePress = () => {
    this.props.createFic(this.state, this.props.token)
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Form>
            <Item>
              <Input
                placeholder='Title'
                value={this.state.title}
                onChangeText={title => this.setState({title})}
                />
            </Item>
            <Item>
              <Textarea
                rowSpan={5}
                placeholder='Summary'
                value={this.state.summary}
                onChangeText={summary => this.setState({summary})}
                />
            </Item>
            <Item>
              <Textarea
                rowSpan={10}
                placeholder='Story'
                value={this.state.story}
                onChangeText={story => this.setState({story})}
                />
            </Item>
          </Form>
          <Button onPress={this.handlePress} style={styles.submit}>
            <Text>Submit</Text>
          </Button>
        </Content>

      </Container>

    )
  }
}


export default withAuth(connect(null, {createFic})(NewStoryForm))

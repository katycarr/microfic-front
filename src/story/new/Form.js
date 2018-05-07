import React from 'react'
import { connect } from 'react-redux'
import {View, Button} from 'react-native'
import t from 'tcomb-form-native'
import withAuth from '../../hocs/withAuth'
import { createFic } from '../../actions/fics'

const Form = t.form.Form;

const options = {
  label: 'New Story',
  auto: 'placeholders',
  fields: {
    story: {
      multiline: true,
      numberOfLines: 4,
    }
  }
}

const Fic = t.struct({
  title: t.String,
  summary: t.String,
  story: t.String,
})

class NewStoryForm extends React.Component {

  handlePress = () => {
    const value = this._form.getValue()
    this.props.createFic(value, this.props.token)
    this.props.navigation.navigate('Home')
  }

  render() {
    console.log(this.props)
    return(
      <View>
        <Form
          type={Fic}
          ref={c => this._form = c}
          options={options}
          />
        <Button
          title='Submit'
          onPress={this.handlePress}
          />
      </View>
    )
  }
}


export default withAuth(connect(null, {createFic})(NewStoryForm))

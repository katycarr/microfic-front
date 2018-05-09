import React from 'react'
import t from 'tcomb-form-native'
import { styles } from './Style'
import { Content, Button, Text } from 'native-base'

const Form = t.form.Form;
class UserAuthForm extends React.Component {

  handlePress = () => {
    const value = this._form.getValue()
    this.props.handleSubmit(value)
  }

  render() {
    const fieldObj = {}
    this.props.fields.forEach(field => {
      fieldObj[field] = t.String
    })

    const User = t.struct(fieldObj)

    return (
      <Content padder contentContainerStyle={styles.view}>
        <Form
          type={User}
          ref={c => this._form = c}
          options={this.props.options}
          />
        <Button block onPress={this.handlePress}>
          <Text>Submit</Text>
        </Button>
      </Content>
    )
  }
}

export default UserAuthForm

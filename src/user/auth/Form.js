import React from 'react'
import t from 'tcomb-form-native'
import { View, Button } from 'react-native'

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
      <View>
        <Form
          type={User}
          ref={c => this._form = c}
          options={this.props.options}
          />
        <Button title='Submit' onPress={this.handlePress} />
      </View>
    )
  }
}

export default UserAuthForm

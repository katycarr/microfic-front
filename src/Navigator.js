import StoryIndexContainer from './story/index/Container'
import { StackNavigator } from 'react-navigation'
import StoryShowScreen from './story/show/Screen'
import UserOptionsScreen from './user/OptionsScreen'
import ProfileScreen from './user/ProfileScreen'
import LoginScreen from './user/LoginScreen'
import SignupScreen from './user/SignupScreen'
import NewStoryForm from './story/new/Form'

const BaseNavigation = StackNavigator({
  Home: {screen: StoryIndexContainer },
  Read: {screen: StoryShowScreen },
  UserOptions: {screen: UserOptionsScreen},
  Profile: {screen: ProfileScreen},
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen},
  NewFic: {screen: NewStoryForm}
});

export default BaseNavigation;

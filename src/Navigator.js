import StoryIndexContainer from './story/index/Container'
import { StackNavigator } from 'react-navigation'
import StoryShowScreen from './story/show/Screen'
import LoginScreen from './user/LoginScreen'
import ProfileScreen from './user/ProfileScreen'

const BaseNavigation = StackNavigator({
  Home: {screen: StoryIndexContainer },
  Read: {screen: StoryShowScreen },
  Login: {screen: LoginScreen},
  Profile: {screen: ProfileScreen}
});

export default BaseNavigation;

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './screens/login';
import Register from './screens/register';
import Home from './screens/home';

const screens = {
     Login: {
          screen: Login,
          navigationOptions: {
               headerShown: false,
          },
     },
     Register: {
          screen: Register,
          navigationOptions: {
               headerShown: false,
          },
     },
     Home: {
          screen: Home,
          navigationOptions: {
               headerShown: false,
          },
     },
};

const Navigator = createStackNavigator(screens);
export default createAppContainer(Navigator);

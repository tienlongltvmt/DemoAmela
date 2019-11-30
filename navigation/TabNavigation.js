import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginActivity from '../screen/LoginActivity';
import App from '../App';
import RegisterActivity from '../screen/RegisterActivity';

const AppNavigation = createStackNavigator({
  LoginActivity: {
    screen: LoginActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
  RegisterActivity: {
    screen: RegisterActivity,
    navigationOptions: () => ({
      header: null,
    }),
  },
  App: {
    screen: App,
  },
});

const Navigation = createAppContainer(AppNavigation);
export default Navigation;

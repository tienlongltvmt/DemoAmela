import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LoginActivity from '../screen/LoginActivity';
import App from '../../App';
import RegisterActivity from '../screen/RegisterActivity';

import HomeActivity from '../screen/bottom_navigation/HomeActivity';
import SeacrchActivity from '../screen/bottom_navigation/SeacrchActivity';
import MovieActivity from '../screen/bottom_navigation/MovieActivity';
import NotificationActivity from '../screen/bottom_navigation/NotificationActivity';
import ProfileActivity from '../screen/bottom_navigation/ProfileActivity';

import SwipeablePanels from '../screen/item/SwipeablePanels';

const BottomNavigation = createStackNavigator(
  {
    default: createBottomTabNavigator({
      Home: {
        screen: HomeActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={24} color={tintColor} />
          ),
        },
      },
      Search: {
        screen: SeacrchActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="search" size={24} color={tintColor} />
          ),
        },
      },
      Movie: {
        screen: MovieActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="plus-circle" size={24} color={tintColor} />
          ),
        },
      },
      Notification: {
        screen: NotificationActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="heart" size={24} color={tintColor} />
          ),
        },
      },
      Profile: {
        screen: ProfileActivity,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="user" size={24} color={tintColor} />
          ),
        },
      },
    }),
  },
  {
    headerMode: 'none',
  },
);

const AppNavigation = createStackNavigator({
  SwipeablePanels: {
    screen: SwipeablePanels,
    navigationOptions: () => ({
      header: null,
    }),
  },
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

export default createAppContainer(
  createSwitchNavigator({
    BottomNavigation: BottomNavigation,
    Auth: AppNavigation,
  }),
);

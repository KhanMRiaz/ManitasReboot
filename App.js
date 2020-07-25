import React from 'react';
import {StatusBar} from 'react-native';
// navigation imports
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
//constants
import {screenWidth} from './src/globalConstans/GlobalConstants';
//auth screens imports
import LandingScreen from './src/screens/auth/LandingScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import selectUserTypeScreen from './src/screens/auth/SelectUserTypeScreen';
import SignUpUserA from './src/screens/auth/userARegistrationScreens/SignUpUserA';
//main screens imports
import HomeScreenA from './src/screens/main/UserA/HomeScreenA';
import SignUpStepOne from './src/screens/auth/userBRegistrationScreens/SignUpStepOne';
import SignUpStepTwo from './src/screens/auth/userBRegistrationScreens/SignUpStepTwo';

const AuthStack = createStackNavigator({
  LandingScreen: {
    screen: LandingScreen,
    navigationOptions: {
      header: null,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  SelectUserTypeScreen: {
    screen: selectUserTypeScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUpUserA: {
    screen: SignUpUserA,
    navigationOptions: {
      header: null,
    },
  },
  SignUpStepOne: {
    screen: SignUpStepOne,
    navigationOptions: {
      header: null,
    },
  },
  SignUpStepTwo: {
    screen: SignUpStepTwo,
  },
});
const MainStack = createStackNavigator({
  HomeScreenA: {
    screen: HomeScreenA,
  },
});

const TestNav = createSwitchNavigator({
  MainStack: {
    screen: SignUpStepTwo,
  },
});

const AppNav = createSwitchNavigator({
  AuthOnly: {
    screen: AuthStack,
  },
  MainStack: {
    screen: MainStack,
  },
});

StatusBar.setBackgroundColor('#004150');
const App = createAppContainer(AppNav);
export default App;

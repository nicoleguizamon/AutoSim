import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Question from '../screens/Question/Question';
import QuestionUnit from '../screens/QuestionUnit/QuestionUnit';
import Location from '../screens/Location/Location';
import Home from '../screens/Home/Home';
import Finalize from '../screens/Finalize/Finalize';


export const Root = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Inicio',
    },
  },
  Location: {
    screen: Location,
    navigationOptions: ({ navigation }) => ({
      title: 'Elija una ciudad',
    }),
  },
  Question: {
    screen: Question,
    navigationOptions: ({ navigation }) => ({
      title: 'Preguntas',
    }),
  },
  Finalize: {
    screen: Finalize,
    navigationOptions: ({ navigation }) => ({
      title: 'Resultado',
    }),
  }
});
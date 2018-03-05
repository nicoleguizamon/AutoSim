import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Question from '../components/Question/Question';
import QuestionUnit from '../components/QuestionUnit/QuestionUnit';
import Location from '../components/Location/Location';
import Home from '../components/Home/Home';
import Finalize from '../components/Finalize/Finalize';


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
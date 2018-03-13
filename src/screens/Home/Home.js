import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Button, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class App extends Component<{}> {
  onStartExam = (user) => {
    this.props.navigation.navigate('Location', {});
  };

  render() {
    const title = 'AutoSim';
    const text = 'Simulador para el examen de licencia de conducir!';
    const buttonText = 'Comenzar';

    return (
      <ImageBackground
        style={styles.imageBackgroud}
        source={require('../../../images/road.jpg')}
      >
        <View >
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <View >
          <Text style={styles.subTitle}>
            {text}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={this.onStartExam} >
            <Text> {buttonText} </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
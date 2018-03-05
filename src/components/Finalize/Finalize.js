import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Animation from 'lottie-react-native';

import animSuccess from '../../../assets/confetti.json';
import animFail from '../../../assets/bikingiscool.json';
import styles from './styles';

export default class lottieloader extends Component {
  componentDidMount() {
    this.animation.play();
  }
  onStartExam = (user) => {
    this.props.navigation.navigate('Home', {});
  };

  render() {

    let isApproved = this.props.navigation.state.params.result >= 70;
    const titleFail = 'Has fallado! Tu resultado fue ' + this.props.navigation.state.params.result + '%. ';
    const subTitleFail = 'Por el momento solo podrás andar en bicicleta. No te desanimes, solo estudia un poco más.';
    const titleSuccess = 'Felicitaciones! Tu resultado fue ' + this.props.navigation.state.params.result + '%. ';
    const subTitleSuccess = 'Estas en condiciones de rendir tu examen.';
    
    return (

      <View style={styles.container}>
        {isApproved ? <Text style={styles.title}>{titleSuccess} </Text>
          : <Text style={styles.title}>{titleFail} </Text>}
        {isApproved ? <Text style={styles.title}>{subTitleSuccess} </Text>
          : <Text style={styles.title}>{subTitleFail} </Text>}

        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={styles.animation}
            loop={true}
            source={isApproved ? animSuccess : animFail}
          />
        </View>
      </View>
    );
  }
}
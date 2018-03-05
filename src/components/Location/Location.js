import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground } from "react-native";
import { List, ListItem } from 'react-native-elements';
import { datalocations } from '../../config/datalocations';
import { settings } from '../../config/settings';
import styles from './styles';
import animLoader from '../../../assets/simple_loader.json';
import Animation from 'lottie-react-native';

export default class Location extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      displayAnim: true
    };
  }

  componentDidMount() {
    this.animation.play();
    fetch(settings.BASE_URL + '/api/locations')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson });
        this.setState({ displayAnim: false });
      })
      .catch((error) => {
        console.error(error);
        displayAnim: false;
      });
  }
  onStartTest = (datalocation) => {
    this.props.navigation.navigate('Question', { ...datalocation });
  };

  isAnimationVisible() {
    return (this.state.displayAnim) ? { display: 'flex' } : { display: 'none' };
  }
  isContentVisible() {
    return (this.state.displayAnim) ? { display: 'none' } : { display: 'flex' };
  }

  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../images/location.back.png')}
      >
        <View style={[this.isAnimationVisible(), styles.container]}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={styles.animation}
            loop={true}
            source={animLoader}
          /></View>
        <View style={[this.isContentVisible(), styles.scroll]}>
          <ScrollView >
            <List>
              {this.state.data.map((datalocation) => (
                <ListItem
                  key={datalocation.locationId}
                  roundAvatar
                  avatar={{ uri: datalocation.imageUrl }}
                  title={datalocation.name}
                  subtitle={datalocation.province}
                  onPress={() => this.onStartTest(datalocation)}
                />
              ))}
            </List>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

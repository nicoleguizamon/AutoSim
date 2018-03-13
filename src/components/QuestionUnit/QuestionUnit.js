import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import styles from './styles';

export default class QuestionUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkListOption: {},
    };
  }

  handleClick = (checkListOption, questionId) => {
    console.log("handleClick");
    this.props.onUpdate(checkListOption, questionId);
  }

  render() {
    function setSelectedOption(checkListOption) {

      this.setState({
        checkListOption,
      });

      this.handleClick(checkListOption, this.props.val.questionId);
    }

    function renderOption(answer, selected, onSelect, index) {
      var style;
      var checkMark;

      if (index > 0) {
        style = [styles.baseStyle, {
          borderTopColor: '#eeeeee',
          borderTopWidth: 1,

        }];
      } else {
        style = styles.baseStyle;
      }

      if (selected) {
        checkMark = <Text style={styles.checkMarkSelected}>✓</Text>;
      }

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <View style={style}>
            <Text style={styles.textStyle}>{answer.description}</Text>
            {checkMark}
          </View>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(answers) {
      return (
        <View style={styles.answerContainer}>
          {answers}
        </View>
      );
    }

    function RenderQuestionImage(props) {
      if (props.imageUri != '') {
        return <Image
          style={styles.imageQuestion}
          source={{ uri: props.imageUri }}
        />;
      } else {
        return null;
      }
    }

    let answers = this.props.val.answers;

    return (
      <View key={this.props.val.questionId} style={styles.note}>
        <View style={styles.questionContainer}>
          <View style={styles.imageView}>
            <RenderQuestionImage imageUri={this.props.val.image} />
          </View>

          <Text style={styles.noteQuestion}>{this.props.keyval + 1} - {this.props.val.description}</Text>

          <View style={styles.outterView}>
            <View style={styles.innerView}>
              <RadioButtons
                options={answers}
                onSelection={setSelectedOption.bind(this)}
                selectedOption={this.state.checkListOption}
                renderOption={renderOption}
                renderContainer={renderContainer}
              />
            </View>
            {/* <Text style={{
              margin: 20,
            }}>Opción seleccionada: {this.state.checkListOption.answerId || ''}</Text> */}
          </View>
        </View>
      </View>
    );
  }
}



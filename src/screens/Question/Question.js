import React, { Component } from "react";
import {
    StyleSheet, Text, View, ScrollView, Button,
    Image, Alert, ImageBackground, TouchableOpacity
} from "react-native";
import { List, ListItem } from 'react-native-elements';

import QuestionUnit from '../QuestionUnit/QuestionUnit';
import styles from './styles';
import { settings } from '../../config/settings';
import Animation from 'lottie-react-native';
import animLoader from '../../../assets/simple_loader.json';

export default class Question extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            checkListOption: {},
            totalQuestions: 0,
            selectedAnswers: [],
            data: [],
            displayAnim: true
        };
        this.alertTitle = 'No tan rápido';
        this.alertSubtitle = 'Primero debes responder todas las preguntas!';

    }

    componentDidMount() {
        this.animation.play();
        let id = this.props.navigation.state.params.locationId;
        fetch(settings.BASE_URL + '/api/questions/locations/' + id)
            .then((response) => response.json())
            .then((responseJson) => {

                let selectedValues = [];
                responseJson.map((data) => {
                    var val = {};
                    val.questionId = data.questionId;
                    val.isCorrect = false;
                    val.isCompleted = false;
                    selectedValues.push(val);
                });

                this.setState({ selectedAnswers: selectedValues });
                this.setState({ data: responseJson });
                this.setState({ totalQuestions: responseJson.length });
                this.setState({ displayAnim: false });
            })
            .catch((error) => {
                console.error(error);
                displayAnim: false;
            });
    }

    onUpdate = (val, questionId) => {
        for (let answer of this.state.selectedAnswers) {
            if (answer.questionId == questionId) {
                answer.isCorrect = val.isCorrect;
                answer.isCompleted = true;
            }
        }
    };

    handleFinishPress = () => {
        let amountValid = 0;
        let notAllCompleted = false;

        for (let answer of this.state.selectedAnswers) {
            if (answer.isCompleted == false) {
                notAllCompleted = true;
                continue;
            }
            if (answer.isCorrect) {
                amountValid = amountValid + 1;
            }
        }
        if (notAllCompleted == true) {
            Alert.alert(
                this.alertTitle,
                this.alertSubtitle,
                [
                    { text: 'OK' },
                ],
                { cancelable: false }
            )
        } else {
            let result = amountValid / this.state.totalQuestions * 100;
            this.props.navigation.navigate('Finalize', { result: Math.round(result * 100) / 100 });

        }

    };

    isAnimationVisible() {
        return (this.state.displayAnim) ? { display: 'flex' } : { display: 'none' };
    }
    isContentVisible() {
        return (this.state.displayAnim) ? { display: 'none' } : { display: 'flex' };
    }
    renderButton(){
        if(this.state.data.length > 0){
            return (
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleFinishPress} >
                    <Text> Terminar </Text>
                </TouchableOpacity>
            );
        }
        else{
            return (<Text style={styles.notAvailable}> Este examen aún no esta disponible. </Text>);
        }
    }
    render() {
        
        let questions = this.state.data.map((val, key) => {
            return <QuestionUnit key={key} keyval={key} val={val}
                onUpdate={this.onUpdate} />
        });

        return (
            <ImageBackground
                style={styles.imageBackground}
                source={require('../../../images/location.back.png')}
            >
                <View style={[this.isAnimationVisible(), styles.loaderContainer]}>
                    <Animation
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={styles.animation}
                        loop={true}
                        source={animLoader} />
                </View>
                <View style={[this.isContentVisible(), styles.container]}>
                    <ScrollView style={styles.scrollContainer}>
                        {questions}
                        <View style={styles.questions}>
                        {this.renderButton()}  
                            
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}



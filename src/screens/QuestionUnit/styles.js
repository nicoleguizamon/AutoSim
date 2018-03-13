import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    note: {
        backgroundColor: 'transparent',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',

    },
    noteQuestion: {
        backgroundColor: 'white',

        borderLeftWidth: 10,
        borderLeftColor: 'white',
        fontWeight: 'bold',
        //paddingTop: 10,
        padding: 10,
        //paddingBottom: 10,

    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    imageQuestion: {
        width: 120,
        height: 120,

    },
    textStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        flex: 1,
        fontSize: 14,
    },
    baseStyle: {
        flexDirection: 'row',
    },
    checkMarkSelected: {
        flex: 0.1,
        color: '#007AFF',
        fontWeight: 'bold',
        paddingTop: 8,
        fontSize: 20,
        alignSelf: 'center',
    },
    answerContainer: {
        backgroundColor: 'white',
        paddingLeft: 20,
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    questionContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    outterView: {
        marginTop: 0,
        backgroundColor: 'white'
    },
    innerView: {
        backgroundColor: '#eeeeee',
        paddingTop: 5,
        paddingBottom: 5,
    }
});

export default styles;
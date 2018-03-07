import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6207E'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  animation: {
    width: 250,
    height: 250
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 12,
    marginTop: 20,
    borderRadius: 20,
    width: 250,
  },
  buttonView:{
    bottom: 30,
    position: 'absolute',

  }
});

export default styles;
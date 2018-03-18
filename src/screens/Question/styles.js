import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackground:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  animation: {
    width: 150,
    height: 150,
  },
  questions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 12,
    marginTop: 20,
    borderRadius: 20,
    width: 250
  },
  notAvailable:{
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold' ,
    paddingTop: 20,   
  },
});

export default styles;
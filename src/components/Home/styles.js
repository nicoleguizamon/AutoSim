import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    imageBackgroud: {
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    title: {
      backgroundColor: 'transparent',
      textAlign: 'center',
      fontSize: 30,
      paddingBottom: 10,
      color: 'white',
      fontWeight: 'bold',
    },
    subTitle:{
      backgroundColor: 'transparent',
      textAlign: 'center',
      fontSize: 13,
      color: 'white',
      fontWeight: 'bold' ,
      paddingBottom: 20,   
    },
    buttonView:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStart:{
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 12,
      borderRadius: 20,
      width: 250
    }
  });
  
  export default styles;
import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'
    },

    videoCasa:{
      width: 300,
      height: 300,
    },

    login:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4CBDA7',
      marginTop: 15,
      width: '90%',
      height: 55,
      borderRadius: 30,
      bottom: 20,
      position: 'absolute'
    },

    text:{
      color: '#000',
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: fonts.text,
      marginBottom: 3,
    },

    textSecondary:{
      color: '#000',
      fontSize: 20,
      marginBottom: -5,
      fontFamily: fonts.text,
    },

    textBotao:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: fonts.text,
    },

    logo:{
      width: 350,
      height: 350,
      top: 0,
    },


})



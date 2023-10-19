import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#FFF",
      paddingHorizontal: 40,
      justifyContent: 'center'
    },

    form:{
      top: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },

    texts:{
      justifyContent: 'flex-start',
      bottom: 30, 
    },
    
    textLogo:{
      color: '#000',
      fontSize: 45,
      fontWeight: 'bold',
      fontFamily: fonts.text,
    },

    textSubLogo:{
      color: '#000',
      fontSize: 20,
      fontFamily: fonts.text,
      top: -10
    },

    login:{
      backgroundColor: '#FFF',
      width: 325,
      height: 45,
      paddingLeft: 3,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#C8C8C8',
      marginBottom: 10,
    },

    loginSave:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      width: 335,
      height: 55,
      borderRadius: 25,
      marginTop: 30,
      marginBottom: 10,
    },

    text:{
      color: '#fff',
      fontSize: 15,
      fontFamily: fonts.text,
      fontWeight: 'bold'
    },

    textLogin:{
      fontWeight: 'bold',
      fontSize: 15,
      left: -140,
      marginBottom: 5,
      marginTop: 15,
    },

    textb:{
      fontWeight: 'bold'
    },

    voltar:{
      flexDirection: 'row',
      alignItems: 'center',
      top: -175,
      left: -15,
    },
})



import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#407BFF",
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: 'center'
  },

  form:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu:{
    position: 'absolute',
    left: 20,
    top: -25,
  },

  body:{
    left: 20,
    right: 20,
    top: 45,
    width: '90%',
    height: 700,
    backgroundColor: '#E7F7ED',
    borderRadius: 5,
},

  imagemRegistro:{
      width: 250,
      height: 250,
  },

  registro:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 65,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
  },

  registroText:{
    fontWeight: 'bold',
  },

  grafic:{
      textAlign:'center',
      alignItems: 'center',
      marginTop: 40,
      height: 40,
      fontSize: 16,
      fontFamily: fonts.text,
      backgroundColor: '#fff',
  },

  primaryTilt:{
      marginTop: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 23,
      fontFamily: fonts.text,
  },

  secondaryTilt:{
      marginLeft: 40,
      fontSize: 15,
      fontFamily: fonts.text,
  },

    row:{
      flexDirection: 'row',
    },

})



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
    width: '90%',
    height: 700,
    backgroundColor: '#E7F7ED',
    borderRadius: 5,
},

grafic:{
  textAlign:'center',
  alignItems: 'center',
  marginBottom: 20,
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


    text:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: fonts.text,
    },

    textoIcon:{
      color: 'white',
      fontSize: 18,
    },

    row:{
      flexDirection: 'row',
    },

    textRow:{
      alignSelf: 'center',
      fontFamily: fonts.text,
      fontSize: 16,
      color: 'black',
      marginTop: 5,
      marginRight: 5,
    },

})



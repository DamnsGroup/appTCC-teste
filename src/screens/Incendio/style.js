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

  header:{
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center'
  },

  imagemTermometro:{
    width: 200,
    height: 450,
    transform: [{ rotate: '180deg' }],
    left: 80,
    bottom: 150,
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
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center'
  },

  registroText:{
    fontWeight: 'bold',
    fontSize: 17,
    left: 15
  },

  voltar:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 25
  },

  temperature:{
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    top: 225,
    height: 500,
    backgroundColor: '#4971AD'
  },

  temperatureNot:{
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    top: 225,
    height: 500,
    backgroundColor: '#D41717'
  },

  textb:{
    fontWeight: 'bold'
  },

  primaryTilt:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 27,
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



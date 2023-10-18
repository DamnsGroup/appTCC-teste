import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { FlipOutEasyX } from "react-native-reanimated";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    header:{
        marginTop: 50,
        justifyContent: "flex-start",
        marginBottom: 10,
    },

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },

    menu:{
        position: "absolute",
        right: 40,
        bottom: 15,
    },

    primaryTilt:{
        left: 40,
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: fonts.text,
    },

    secondaryTilt:{
        left: 40,
        fontSize: 15,
        fontFamily: fonts.text,
    },

    bloco:{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },

    painel:{
        width: '80%',
        left: 40,
        height: 130,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 25,
        marginBottom: 40,
    },

    textAreas:{
        fontWeight: 'bold',
        fontSize: 20,
        left: 45,
        marginBottom: 20,
    
    },

    textPainelTop:{
        color: '#fff',
        fontWeight: 'bold',
    },

    painelAlertaEletricidade:{
        borderRadius: 15,
        marginLeft: 10,
        marginTop: 10,
        width: 170,
        height: 65,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },

    painelAlertaGas:{
        borderRadius: 15,
        marginLeft: 190,
        marginRight: 10,
        marginTop: -65,
        width: 170,
        height: 65,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },

    painelAlertaProximidade:{
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 15,
        marginTop: 15,
        width: 170,
        height: 65,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },

    painelAlertaIncendio:{
        borderRadius: 15,
        marginLeft: 190,
        marginRight: 15,
        marginTop: -65,
        width: 170,
        height: 65,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },

    painelSistema:{
        height: 155, // Define a altura dos blocos (ajuste conforme necessário)
        backgroundColor: '#fff',
        width: 155,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        borderRadius: 20,
        marginHorizontal: 10,
        elevation: 20, 
    },

    icones:{
        width: 30,
        height: 30,
    },

    backgroundIcone:{
        width: 45,
        height: 45,
        backgroundColor: '#000',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 25,
        left: 12,
        bottom: 15,
    },

    painelText:{
        color: '#C0C0C0',
        textAlign: "center",
        fontSize: 12,
        bottom: 8,
        left: 10,
        fontWeight: "bold"
    },

    alerta:{
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 0,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#E20000',
    },

    painelAlerta:{
        color: '#fff',
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
    },

    titleTasks:{
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting:{
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        alignSelf: "center",
    },

    userName:{
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text,
    },

    image:{
        width: 70,
        height: 70,
        borderRadius: 30
    },

    lenghtText:{
        color: colors.green, 
        fontSize: 35, 
        fontFamily: fonts.text,
    },

    tasks:{
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground:{
        backgroundColor: '#333333'
    },

    tasksText:{
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout:{
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    containerBox:{
        width: '85%',
        alignSelf: "center",
        marginBottom: 25,
    },

    box:{
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        marginTop: 30,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
        
    },

    rText:{
        fontSize: 20,
        color: 'gray',
        fontFamily: fonts.text,
    },

    textFooter:{
        borderTopColor: '#fff',
        paddingTop: 15, 
        paddingBottom: 10, 
        borderTopWidth: 1,
        color: '#FFF',
        backgroundColor: '#871003',
        textAlign: 'center',
        fontSize: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        fontFamily: fonts.text,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textos:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    textProgress:{
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle:{
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    textProgressContainer:{
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        textDecorationLine: 'underline',

    },

    boxContainer:{
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    }
})
import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        
    },

    Pages:{
        flexDirection: 'row',
        marginTop: 30,
    },

    Sair:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    PagesText:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        alignSelf: "center",
        marginLeft: 10,
    },

    SairText:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        alignSelf: "center",
        marginLeft: 20,
    },

    footer:{
        padding: 10,
    },

    logo:{
        width: 130,
        height: 30,
        alignSelf: "center",
        marginTop: 10,
    },

    textoNome:{
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        marginLeft: 100,
        marginTop: -40,
    },

    perfil:{
        marginLeft: 17,
        borderRadius: 50,
        width: 65,
        height: 65,
        marginTop: 30,
    }
})
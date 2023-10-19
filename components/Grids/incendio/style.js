import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    box:{
        backgroundColor: '#fff',
        padding: 5,
        width: '90%',
        left: 20,
        height: 45,
        justifyContent: "center",
        marginBottom: 5,
        zIndex: 11,
        borderRadius: 3,
    },

    centralizarModal:{    
        flex: 1,
        justifyContent: "center",    
        backgroundColor: 'rgba(0, 0, 0, 0.37)'
        },

        primaryTilt:{
            fontSize: 16,
            fontFamily: fonts.text,
        },
    

    
      CardContainerModal:{
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        paddingBottom:15,
        
    },
    

})
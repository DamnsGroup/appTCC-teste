import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import Video from 'react-native-video';
import videol from '../../assets/video.webm'
import {styles} from './style';
import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    Alert,
  } from 'react-native';

  
  
  //import { Splash } from '../../lotties/Splash'; 
  import api from '../../services/api';

  export default function Login() {
    const navigation= useNavigation();

    async function login(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Entrar' }]
        });
    }
  

    return(
    <View style={styles.container}>
      {/* <Video source={videol} paused={false} style={styles.videoCasa} repeat={true}></Video> */}
      <Text style={styles.text}>
        ForGated
      </Text>
      <Text style={styles.textSecondary}>
        Segurança e conforto
      </Text>
      <Text style={styles.textSecondary}>
        para o seu lar
      </Text>
        <TouchableOpacity
          style={styles.login}
          onPress={login}>
          <Text style={styles.textBotao}>Conectar-Se</Text>
        </TouchableOpacity>
    </View>
    )
  }
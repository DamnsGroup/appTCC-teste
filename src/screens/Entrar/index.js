import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
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
  import { AntDesign } from '@expo/vector-icons';

  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { Ionicons } from '@expo/vector-icons'; 
  //import { Splash } from '../../lotties/Splash'; 
  import api from '../../services/api';

  export default function Entrar() {
    const navigation= useNavigation();

    const [opped, setLogged] = useState(0);
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    async function entrar(){      
      const obj = { nome, senha };
      const res = await api.post('tcc/login.php', obj);

      if(res.data.result === 'Dados Incorretos!'){
        Alert.alert('Ops!', 'Dados Incorretos!');
      }else{
        
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
      }

    }

   
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('@user');
      
      if(user){
        setLogged(1);
  
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        setLogged(2)
      }
    }

    async function inicio(){      

      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      });
  }
  
    useEffect(() => {
      checkLogin();
    }, []);
  

    return(
      <View style={styles.container}>
      <StatusBar translucent hidden />

      <TouchableOpacity
        style={styles.voltar}
        onPress={inicio}
        >
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.textb}>Voltar</Text>
      </TouchableOpacity>
      
      <View style={styles.texts}>
        <Text style={styles.textLogo}>ForGated</Text>
        <Text style={styles.textSubLogo}>Conecte-se e prossiga</Text>
      </View>

      <View style={styles.form}>
      <Text style={styles.textLogin}>Nome</Text>
        <TextInput
          style={styles.login}
          value={nome}
          onChangeText={ (nome) => setNome(nome)}
        />

        <Text style={styles.textLogin}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.login}
          value={senha}
          onChangeText={ (senha) => setSenha(senha)}
        />

        <TouchableOpacity
          style={styles.loginSave}
          onPress={entrar}
        >
          <Text style={styles.text}>Conectar-Se</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import {SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image, ActivityIndicator, RefreshControl, StatusBar, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
//import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import DrawerRoutes from '../../routes/drawer.routes';
import { useIsFocused } from '@react-navigation/native';
import CustomDrawer from '../../components/CustomDrawer';
import { set } from 'react-native-reanimated';


export default function Home() {
    const { width, height } = Dimensions.get('window');
    const navigation= useNavigation();
    const [quantGas, setQuantGas] = useState([]);
    const [quantIncendio, setQuantIncendio] = useState([]);
    const [quantProximidade, setQuantProximidade] = useState([]);
    const [quantEletricidade, setQuantEletricidade] = useState([]);
    const [showAlertButtonGas, setShowAlertButtonGas] = useState(false);
    const [showAlertButtonIncendio, setShowAlertButtonIncendio] = useState(false);
    const [showAlertButtonProximidade, setShowAlertButtonProximidade] = useState(false);
    const [showAlertButtonEletricidade, setShowAlertButtonEletricidade] = useState(false);

    async function incendio(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Incendio' }]
        });
    }

    async function proximidade(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Proximidade' }]
        });
    }

    async function gas(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Gas' }]
        });
    }

    async function eletricidade(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Eletricidade' }]
        });
    }

    
      async function fetchPageGas() {
          try {
            const response = await api.get(`tcc/dados/vazamento.php`);
          setQuantGas(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
          
          const quantiGas = response.data.resultado.map(item => item.deteccao);
          if (quantiGas == "Vazamento de gas detectado") {
            setShowAlertButtonGas(true);
          } else {
            setShowAlertButtonGas(false);
          }
        }
          catch (error) {
            console.log(error);
          }
        }

      async function fetchPageIncendio() {
        try {
          const response = await api.get(`tcc/dados/temperatura.php`);
         setQuantIncendio(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
        
         const quantiIncendio = response.data.resultado.map(item => item.temperatura);
         if (quantiIncendio > 40) {
           setShowAlertButtonIncendio(true);
         } else {
           setShowAlertButtonIncendio(false);
        }
      }
         catch (error) {
          console.log(error);
        }
      }

      async function fetchPageEletricidade() {
        try {
          const response = await api.get(`tcc/dados/voltagem.php`);
        setQuantEletricidade(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
        
        const quantiEletricidade = response.data.resultado.map(item => item.voltagem);
        if (quantiEletricidade > 11) {
          setShowAlertButtonEletricidade(true);
        } else {
          setShowAlertButtonEletricidade(false);
        }
      }
        catch (error) {
          console.log(error);
        }
      }

    async function fetchPageProximidade() {
      try {
        const response = await api.get(`tcc/dados/proximidade.php`);
       setQuantProximidade(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
      
       const quantiProximidade = response.data.resultado.map(item => item.deteccao);
       if (quantiProximidade == "Movimento detectad") {
         setShowAlertButtonProximidade(true);
       } else {
         setShowAlertButtonProximidade(false);
      }
    }
       catch (error) {
        console.log(error);
      }
    }
    
      useEffect(() => {
        fetchPageGas(); // Busque o valor do alerta quando a tela for carregada
        fetchPageIncendio();
        fetchPageEletricidade();
        fetchPageProximidade();
      }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={styles.header}>
            <Text style={styles.primaryTilt}>Olá, Cliente!</Text>        
            <Text style={styles.secondaryTilt}>Bem vindo a sua casa segura:</Text>
              <TouchableOpacity
                style={styles.menu}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
                <AntDesign name="appstore1" size={35} color="black" />
              </TouchableOpacity>
          </View>   
          <View style={{ flex: 2, marginTop: 40,}}>
          <View style={styles.painel}>
          {/*
            {showAlertButtonEletricidade ? (
            <View></View>
            ) : (
            <View style={styles.painelAlertaEletricidade}>
              <Text style={styles.textPainelTop}>Nenhuma sobrecarga</Text>
            </View>
            )}

            {showAlertButtonGas ? (
            <View></View>
            ) : (
            <View style={styles.painelAlertaGas}>
              <Text style={styles.textPainelTop}>Nenhum vazamento</Text>
            </View>
            )}

            {showAlertButtonProximidade ? (
            <View></View>
            ) : (
            <View style={styles.painelAlertaProximidade}>
              <Text style={styles.textPainelTop}>Nenhuma aproximação</Text>
            </View>
            )}

            {showAlertButtonIncendio ? (
            <View></View>
            ) : (
            <View style={styles.painelAlertaIncendio}>
              <Text style={styles.textPainelTop}>Nenhum risco de incendio</Text>
            </View>
            )} 
          */}
          </View>
          <Text style={styles.textAreas}>Áreas</Text>
          <View style={styles.bloco}>  
            {/* sistema de eletricidade */}
            <TouchableOpacity  onPress={eletricidade} style={styles.painelSistema}>
              <View style={styles.backgroundIcone}>
                <Image source={require('../../assets/lampIcone.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelText}>ELETRICIDADE</Text>
            </TouchableOpacity>
            {/* sistema de gas */}
            <TouchableOpacity  onPress={gas} style={styles.painelSistema}>
              <View style={styles.backgroundIcone}>
                <Image source={require('../../assets/gasIcone.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelText}>SENSOR DE GÁS</Text>
            </TouchableOpacity>
          </View> 
          <View style={styles.bloco}>
            {/* sistema de proximidade */}
            <TouchableOpacity  onPress={proximidade} style={styles.painelSistema}>
              <View style={styles.backgroundIcone}>
                <Image source={require('../../assets/webcamIcone.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelText}>MOVIMENTO</Text>
            </TouchableOpacity>
            {/* sistema de incendio */}
            <TouchableOpacity  onPress={incendio} style={styles.painelSistema}>
              <View style={styles.backgroundIcone}>
                <Image source={require('../../assets/temperatureIcone.png')} style={styles.icones}/>
              </View>
              <Text style={styles.painelText}>TEMPERATURA</Text>
            </TouchableOpacity>
          </View> 
          {/* botões de alerta pra cada sistema */}
            {showAlertButtonGas && (
            <TouchableOpacity  onPress={gas} style={styles.alerta}><Text style={styles.painelAlerta}>verificar</Text></TouchableOpacity>
            )}
            {showAlertButtonIncendio && (
            <TouchableOpacity  onPress={incendio} style={styles.alerta}><Text style={styles.painelAlerta}>verificar</Text></TouchableOpacity>
            )}
            {showAlertButtonProximidade && (
            <TouchableOpacity  onPress={proximidade} style={styles.alerta}><Text style={styles.painelAlerta}>verificar</Text></TouchableOpacity>
            )}
            {showAlertButtonEletricidade && (
            <TouchableOpacity  onPress={eletricidade} style={styles.alerta}><Text style={styles.painelAlerta}>verificar</Text></TouchableOpacity>
            )}
              
        </View>
        </View>
    )
}
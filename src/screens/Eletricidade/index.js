import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {styles} from './style';
import {ScrollView, Text, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, StatusBar, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Header';
import api from '../../services/api';
import Grid from '../../components/Grids/eletricidade';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Usuario() {

  const navigation = useNavigation(); 
  const [quant, setQuant] = useState([]);
  const [showAlertButton, setShowAlertButton] = useState(false);
    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [busca, setBusca] = useState("");
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);

    async function home(){      

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
  }

  async function Registro_eletricidade(){      

    navigation.reset({
      index: 0,
      routes: [{ name: 'Registro_eletricidade' }]
    });
}

    async function loadData() {        
      try {
          const response = await api.get(`tcc/dados/voltagem.php?pagina=${page}&limite=10`);

          if(lista.length >= response.data.totalItems) return;

          if (loading === true) return;
    
          setLoading(true);
    
          setLista([...lista, ...response.data.resultado]);
          setPage(page + 1);
        } catch (error) {
          console.log(error)
        }
  }


  const renderItem = function ({ item }) {
    return (
        <Grid
            data={item}
        />
    )
}

  function Footer() {
    if (!load) return null;

    return (
        <View style={styles.loading}>
            <ActivityIndicator size={25} color="#000" />
        </View>
    )
}

async function fetchPage() {
  try {
    const response = await api.get(`tcc/dados/voltagem.php`);
   setQuant(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
  
   const quanti = response.data.resultado.map(item => item.voltagem);
   if (quanti ) {
     setShowAlertButton(true);
   } else {
     setShowAlertButton(false);
  }
}
   catch (error) {
    console.log(error);
  }
}


 useEffect(() => {
  fetchPage();
  loadData();
}, [page, totalItems, lista]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
          <StatusBar barStyle="light-content" />
          <View style={{ flex: 1, backgroundColor: '#fff'}}>
              <View style={styles.header}>
              <Text style={styles.primaryTilt}>eletricidade</Text>
              </View>     
                  <View style={styles.containerHeader}>
                      <TouchableOpacity
                          style={styles.menu}
                          onPress={home}
                      >
                          <Ionicons name="arrow-back-outline" size={24} color="black" />
                      </TouchableOpacity>
                  </View>
                  <Text style={styles.grafic}>Registros da eletricidade da sua casa</Text>
                  
                  {showAlertButton ? (
                    <Image style={styles.imagemRegistro} source={require('../../assets/termometro.jpg')} />
                  ) : (
                    <TouchableOpacity  onPress={home} style={styles.alerta}><Text style={styles.painelAlerta}>veri</Text></TouchableOpacity>
                  )}
                  
                  <TouchableOpacity  onPress={Registro_eletricidade} style={styles.registro}>
                  <Text style={styles.registroText}>Registro</Text>
                </TouchableOpacity>
          </View> 
    </View>
  )
}
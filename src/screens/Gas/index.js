import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {styles} from './style';
import {ScrollView, Text, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, StatusBar, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Header';
import api from '../../services/api';
import Grid from '../../components/Grids/gas';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Usuario() {

  const navigation = useNavigation(); 
  const [quant, setQuant] = useState([]);
  const [showAlertButton, setShowAlertButton] = useState([]);
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

  async function Registro_gas(){      

    navigation.reset({
      index: 0,
      routes: [{ name: 'Registro_gas' }]
    });
}

    async function loadData() {        
      try {
          const response = await api.get(`tcc/dados/vazamento.php?pagina=${page}&limite=10`);

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
    const response = await api.get(`tcc/dados/vazamento.php`);
   setQuant(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
  
   const quanti = response.data.resultado.map(item => item.deteccao);
   if (quanti > 35) {
     setShowAlertButton(0);
   }
   else if (quanti >= 20  && quant <35){
      setShowAlertButton(1);
   }
   else {
     setShowAlertButton(2);
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
                <TouchableOpacity style={styles.voltar} onPress={home}>
                  <AntDesign name="left" size={24} color="black" />
                  <Text style={styles.textb}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.primaryTilt}>Sensor de Gás</Text>
              </View>
                <View style={styles.temperature}>
                  {showAlertButton === 0 ? (
                    <TouchableOpacity onPress={() => home("Perigo: Temperatura muito alta")} style={styles.alerta}><Text style={styles.painelAlerta}>corra</Text></TouchableOpacity>
                  ) : showAlertButton === 1 ? (
                    <TouchableOpacity onPress={() => home("Alerta: Temperatura elevada")} style={styles.alerta}><Text style={styles.painelAlerta}>alerta</Text></TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => home("Tudo está em ordem")} style={styles.alerta}><Text style={styles.painelAlerta}>seguro</Text></TouchableOpacity>
                  )}


                  {/* {showAlertButton === 0 ? (
                    <TouchableOpacity  onPress={home} style={styles.alerta}><Text style={styles.painelAlerta}>corra</Text></TouchableOpacity>
                  ) : showAlertButton === 1 ?(
                    <TouchableOpacity  onPress={home} style={styles.alerta}><Text style={styles.painelAlerta}>alerta</Text></TouchableOpacity>
                  ) : (
                    <TouchableOpacity  onPress={home} style={styles.alerta}><Text style={styles.painelAlerta}>seguro</Text></TouchableOpacity>
                  ) } */}
                </View>  
                  <TouchableOpacity  onPress={Registro_gas} style={styles.registro}>
                  <Text style={styles.registroText}>Registro</Text>
                </TouchableOpacity>
          </View> 
    </View>
  )
}
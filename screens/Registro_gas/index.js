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
  const [showAlertButton, setShowAlertButton] = useState(false);
    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [busca, setBusca] = useState("");
    const [onEndReachedCalledDuringMomentum, setMT] = useState(true);

    async function gas(){      

      navigation.reset({
        index: 0,
        routes: [{ name: 'Gas' }]
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
   if (quanti == "Movimento detectado") {
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
    <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <View style={{ flex: 1, backgroundColor: '#fff'}}>
              <View style={styles.header}>
              <Text style={styles.primaryTilt}>Registro gas</Text>
              </View>     
                  <View style={styles.containerHeader}>
                      <TouchableOpacity
                          style={styles.menu}
                          onPress={gas}
                      >
                          <Ionicons name="arrow-back-outline" size={24} color="black" />
                      </TouchableOpacity>
                  </View>
                  <Text style={styles.grafic}>Registros da gas da sua casa</Text>

              <View style={styles.body}>
              <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>
               <FlatList
                   data={lista}
                   renderItem={renderItem}
                   keyExtractor={item => String(item.id)}
                   onEndReachedThreshold={0.1}
                   removeClippedSubviews
                   initialNumToRender={10}
                   onEndReached={(distanceFromEnd) => {
                     if (!onEndReachedCalledDuringMomentum) {
                       loadData().then(() => setLoading(false));
                       setMT(true);
                     }
                   }}
                   ListFooterComponent={(distanceFromEnd) => {
                     if (!onEndReachedCalledDuringMomentum) {
                       return <Footer load={loading} />
                     } else {
                       return <View></View>
                     }
                   }}
                   onMomentumScrollBegin={() => setMT(false)}
                   windowSize={10}
                   getItemLayout={(data, index) => (
                     { length: 50, offset: 50 * index, index }
                   )}
               />
              
              </View>
              </View>
          </View> 
    </View>
  )
}
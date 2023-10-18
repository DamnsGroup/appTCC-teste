import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {styles} from './style';
import {ScrollView, Text, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, StatusBar, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Header';
import api from '../../services/api';
import Grid from '../../components/Grids/incendio';
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomSheet from 'reanimated-bottom-sheet';
export default function Usuario() {

  const navigation = useNavigation(); 
  const [quantIncendio, setQuantIncendio] = useState([]);
  const [showAlertButtonIncendio, setShowAlertButtonIncendio] = useState([]);
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

  async function Registro_incendio(){      

    navigation.reset({
      index: 0,
      routes: [{ name: 'Registro_incendio' }]
    });
}

    async function loadData() {        
      try {
          const response = await api.get(`tcc/dados/temperatura.php?pagina=${page}&limite=10`);

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

async function fetchPageIncendio() {
  try {
    const response = await api.get(`tcc/dados/temperatura.php`);
   setQuantIncendio(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
  
   const quantiIncendio = response.data.resultado.map(item => item.temperatura);
   if (quantiIncendio > 25) {
     setShowAlertButtonIncendio(0);
   }
   else if (quantiIncendio >= 20  && quantIncendio <25){
      setShowAlertButtonIncendio(1);
   }
   else {
     setShowAlertButtonIncendio(2);
  }
}
   catch (error) {
    console.log(error);
  }
}


 useEffect(() => {
  fetchPageIncendio();
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
                <Text style={styles.primaryTilt}>Incêndio</Text>
              </View>

                  {showAlertButtonIncendio === 0 ? (
                    <View style={styles.temperatureNot}>
                      <Image source={require('../../assets/termometroNotsafe.gif')} style={styles.imagemTermometro}/>
                    </View>
                  ) : showAlertButtonIncendio === 1 ? (
                      <Image source={require('../../assets/termometroSafe.gif')} style={styles.imagemTermometro}/>
                  ) : (
                    <View style={styles.temperature}>
                      <Image source={require('../../assets/termometroSafe.gif')} style={styles.imagemTermometro}/>
                    </View>  
                  )}

                  {/* <Button
                  title="Abrir Bottom Sheet"
                  onPress={() => bottomSheetRef.current.snapTo(0)}
                  />
                  <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={[0, 300]} // Altura do Bottom Sheet em diferentes estados
                    initialSnap={1} // Define o estado inicial (0 é fechado, 1 é aberto)
                    renderContent={() => <BottomSheetComponent data={data} />}
                  /> */}
                  
                  <TouchableOpacity  onPress={Registro_incendio} style={styles.registro}>
                  <Text style={styles.registroText}>Registros</Text>
                </TouchableOpacity>
          </View> 
    </View>
  )
}
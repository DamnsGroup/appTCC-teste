import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomDrawer= FC = () => {
    const navigation=  any= useNavigation();

    async function logout() {
        Alert.alert('Sair', `Você tem certeza que quer sair?`, [
            {
                text: 'Não',
                style: 'cancel',
            },

            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        await AsyncStorage.clear();
                        navigation.navigate('Login');
                    } catch (error) {
                        Alert.alert('Não foi possivel sair, tente novamente!')
                    }
                }
            }
        ])
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={{ width: '100%', backgroundColor: '#407BFF', height: 120, alignSelf: 'center', marginBottom: 5, borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
                <Image style={styles.perfil} source={require('../../assets/perfil.png')}/>
                <Text style={styles.textoNome}>Nome do Usuario</Text>
            </View>

            <ScrollView
                style={styles.container}
            >
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Home")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <AntDesign name="home" size={24} color="black" />
                        <Text style={styles.PagesText}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Eletricidade")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}>
                        <MaterialCommunityIcons name="lightning-bolt" size={24} color="black" />
                        <Text style={styles.PagesText}>Eletricidade</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Incendio")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}>
                        <FontAwesome5 name="fire" size={24} color="black" />
                        <Text style={styles.PagesText}>Incendio</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Gas")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}>
                        <MaterialCommunityIcons name="gas-cylinder" size={24} color="black" />
                        <Text style={styles.PagesText}>Gás</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Proximidade")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}>
                        <Octicons name="device-camera-video" size={24} color="black" />
                        <Text style={styles.PagesText}>Proximidade</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.Sair}
                >
                    <MaterialCommunityIcons name="exit-to-app" size={24} color="black" />
                    <Text style={styles.SairText}>Desconectar-Se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;
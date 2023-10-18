import React from 'react';

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';

import fonts from '../styles/fonts';

import DrawerRoutes from './drawer.routes';
// colocar no drawer.routes a função eletricidade, gas, incendio e proximidade para poder funcionar na barra de baixo

import { DrawerActions, useNavigation } from '@react-navigation/native';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    const navigation = useNavigation();
return (
    <AppTab.Navigator
    screenOptions={{
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: false,
            tabBarLabelPosition: 'below-icon',
            headerShown:false,
            
            tabBarStyle:{
                height: 0,
                paddingTop: 0,
            },
        }}

        >
            <AppTab.Screen
                name="Home"
                component={DrawerRoutes}
            />
    </AppTab.Navigator>
)
}

export default AuthRoutes;
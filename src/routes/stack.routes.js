import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/FirstPage';
import Entrar from '../screens/Entrar';
import Incendio from '../screens/Incendio';
import Proximidade from '../screens/Proximidade';
import Gas from '../screens/Gas';
import Eletricidade from '../screens/Eletricidade';
import AuthRoutes from './tab.routes';
import Registro_incendio from '../screens/Registro_incendio';
import Registro_proximidade from '../screens/Registro_proximidade';
import Registro_gas from '../screens/Registro_gas';
import Registro_eletricidade from '../screens/Registro_eletricidade';
//import { Splash } from '../lotties/Splash';



const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Entrar" component={Entrar} /> 
            <Stack.Screen name="Home" component={AuthRoutes} />    
            <Stack.Screen name="Incendio" component={Incendio} /> 
            <Stack.Screen name="Proximidade" component={Proximidade} />   
            <Stack.Screen name="Gas" component={Gas} />   
            <Stack.Screen name="Eletricidade" component={Eletricidade} />   
            <Stack.Screen name="Registro_incendio" component={Registro_incendio}/>  
            <Stack.Screen name="Registro_proximidade" component={Registro_proximidade}/> 
            <Stack.Screen name="Registro_gas" component={Registro_gas}/> 
            <Stack.Screen name="Registro_eletricidade" component={Registro_eletricidade}/> 
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;
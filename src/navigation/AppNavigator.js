import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProducerDetailScreen from '../screens/ProducerDetailScreen';
// Import other screens as needed, e.g.:
// import AddProducerScreen from '../screens/AddProducerScreen';

const Stack = createStackNavigator();

/**
 * Componente de Navegação Principal
 * 
 * Configura o stack navigator com as telas principais do aplicativo.
 */
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Produtores Locais' }} 
        />
        <Stack.Screen 
          name="ProducerDetail" 
          component={ProducerDetailScreen} 
          options={{ title: 'Detalhes do Produtor' }} 
        />
        {/* Adicione outras telas ao stack aqui, por exemplo:
        <Stack.Screen 
          name="AddProducer" 
          component={AddProducerScreen} 
          options={{ title: 'Cadastrar Produtor' }} 
        />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


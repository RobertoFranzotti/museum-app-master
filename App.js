import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MuseuApp from './src/screens/Home/index'; 
import MuseumDetail from './src/screens/Details/index'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MuseuApp">
        <Stack.Screen name="MuseuApp" component={MuseuApp} options={{ title: 'Home' }} />
        <Stack.Screen name="MuseumDetail" component={MuseumDetail} options={{ title: 'Detalhes do Museu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
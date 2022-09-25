import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import First from './pages/first';
import Second from './pages/second';
import Products from './pages/products';
import Favorites from './pages/favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={First} />
        <Stack.Screen name="SecondScreen" component={Second} />
      </Stack.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="ProductsTab" component={Products} />
        <Tab.Screen name="FavoritesTab" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CountScreen from './components/CountScreen';
import OperatorScreen from './components/OperatorScreen';
import StoreScreen from './components/StoreScreen';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Forgalom" component={CountScreen} />
        <Tab.Screen name="Operátor" component={OperatorScreen} />
        <Tab.Screen name="Tárolás" component={StoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>    
  );
}

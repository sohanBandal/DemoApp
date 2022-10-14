// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlaceScreen from '../screen/PlaceScreen';
import CreatePassword from '../screen/CreatePassword';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PlaceScreen'>
        <Stack.Screen name="PlaceScreen" component={PlaceScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="CreatePassword" component={CreatePassword}  options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
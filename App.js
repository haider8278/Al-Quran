import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Detail from './screens/Detail';

const Stack = createStackNavigator();
let headerOptions = {}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //headerMode='none'
        screenOptions={{
        headerStyle: {
          backgroundColor: '#bca049',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Surah List'}} />
        <Stack.Screen
          name="Detail"
          component={Detail}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

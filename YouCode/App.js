import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/loginScreen';
import map from './src/screens/map';
import BottomDrawer from './src/components/bottomDrawer';
import discover from './src/screens/discover';
import Discover from './src/screens/discover';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
        name="Discover"
        component={Discover}
        options={{
          title: 'DISCOVER',
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
        />
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login Here' }}
        /> */}
        <Stack.Screen screenOptions={{headerShown: false}}
        name="map"
        component={map}
        />
        <Stack.Screen
        name="bottomDrawer"
        component={BottomDrawer}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});


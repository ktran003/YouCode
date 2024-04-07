// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './src/screens/loginScreen';
// import map from './src/screens/map';
// import BottomDrawer from './src/components/bottomDrawer';
// import Discover from './src/screens/discover';
// import LandingPage from './src/screens/landingPage';
// import Map from './src/screens/map';
// import Weather from './src/screens/weather';

// import BottomNav from './src/screens/BottomNav';
// import Hiking from './src/screens/hiking';
// import Progress from './src/screens/progress';



// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator >

//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ title: 'Login Here' }}
//         />

// <Stack.Screen
//         name = "BottomNav"
//         component={BottomNav}
//         />

//         <Stack.Screen screenOptions={{ headerShown: false }}
//           name="map"
//           component={map}
//         />
//         <Stack.Screen
//           name="bottomDrawer"
//           component={BottomDrawer}
//         />

//         <Stack.Screen
//           name="LandingPage"
//           component={LandingPage}
//           options={{
//             title: 'Activities',
//             headerStyle: { backgroundColor: 'black' },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Hiking"
//           component={Hiking}
//           options={{
//             title: 'Hiking',
//             headerStyle: { backgroundColor: 'black' },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Map"
//           component={Map}
//           options={{ title: '' }}
//         />
//         <Stack.Screen
//           name="Weather"
//           component={Weather}
//           options={{ title: '' }}
//         />
//         <Stack.Screen
//           name="Progress"
//           component={Progress}
//           options={{ title: '', headerStyle: { backgroundColor: 'black' } }}
//         />
//         <Stack.Screen
//           name="Discover"
//           component={Discover}
//           options={{
//             title: 'DISCOVER',
//             headerStyle: { backgroundColor: 'black' },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             }
//           }}
//         />
//         {/* <Stack.Screen
//         name = "BottomNav"
//         component={BottomNav}
//         /> */}
//         {/* <BottomNav/> */}

//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }

// });



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/loginScreen';
// import map from './src/screens/map';
// import BottomDrawer from './src/components/bottomDrawer';
import Discover from './src/screens/discover';
import LandingPage from './src/screens/landingPage';
import Map from './src/screens/map';
import Weather from './src/screens/weather';
import Hiking from './src/screens/hiking';
import Progress from './src/screens/progress';
import BottomNav from './src/screens/BottomNav'; // Import BottomNav here
import TrailComplete from './src/screens/TrailComplete';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>


      <Stack.Navigator>

      <Stack.Screen name="TrailComplete" component={LoginScreen} options={{ title: 'Login Here', headerShown: false }} />

        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login Here', headerShown: false }} />
        <Stack.Screen name="LandingPage" component={LandingPage}
          options={{
            title: 'Activities',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen name="Hiking" component={Hiking}
          options={{
            title: 'Activities',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen name="Map" component={Map} options={{
          title: 'Start a Hike',
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Weather" component={Weather} options={{ title: '' }} />
        <Stack.Screen name="Progress" component={Progress} options={{ title: 'Progress', headerStyle: { backgroundColor: 'black' } }} />
        <Stack.Screen name="Discover" component={Discover} options={{
          title: 'Discover',
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}


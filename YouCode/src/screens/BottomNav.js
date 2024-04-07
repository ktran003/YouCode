import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image } from 'react-native'
import LandingPage from './landingPage';
import Shop from './Shop';
import Community from './Community';
import Discover from './discover';
import Account from './Account';
import Hiking from './hiking';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();


// const Tab = createBottomTabNavigator();

const ShopIcon = () => (
  <Image
    source={require('../assets/Stackframe_light.png')}
    style={{ width: 60, height: 60, bottom: 20, left: 5 }}
  />
);
const CommunityIcon = () => (
  <Image
    source={require('../assets/Group_light.png')}
    style={{ width: 45, height: 45, bottom: 10, }}
  />
);
const ActivitiesIcon = () => (
  <Image
    source={require('../assets/Bird_Logo.png')}
    style={{ width: 50, height: 35, bottom: 0, left: 4 }}
  />
);
const DiscoverIcon = () => (
  <Image
    source={require('../assets/Search_light.png')}
    style={{ width: 50, height: 50, bottom: 13, }}
  />
);
const AccountIcon = () => (
  <Image
    source={require('../assets/User_cicrle_light.png')}
    style={{ width: 40, height: 40, bottom: 8, }}
  />
);

const BottomNav = () => {
  return (
    <Tab.Navigator       
    tabBarOptions={{
      showLabel: false,
      style: {
        backgroundColor: 'black',
      }
    }}
  
    >
      <Tab.Screen name='Shop' component={Shop} options={{ tabBarIcon: ShopIcon }} />
      <Tab.Screen name='Community' component={Community} options={{ tabBarIcon: CommunityIcon }} />
      <Tab.Screen name='Activities' component={LandingPage} options={{ tabBarIcon: ActivitiesIcon }} />
      <Tab.Screen name='Discover' component={Discover} options={{ tabBarIcon: DiscoverIcon }} />
      <Tab.Screen name='Account' component={Account} options={{ tabBarIcon: AccountIcon }} />
    </Tab.Navigator>
  );
}

export default BottomNav;

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image, StyleSheet } from 'react-native';
// import LandingPage from './landingPage';
// import Shop from './Shop';
// import Community from './Community';
// import Discover from './discover';
// import Account from './Account';

// const Tab = createBottomTabNavigator();

// const ShopIcon = () => (
//   <Image
//     source={require('../assets/Stackframe_light.png')}
//     style={{ width: 60, height: 60 }}
//   />
// );
// const CommunityIcon = () => (
//   <Image
//     source={require('../assets/Group_light.png')}
//     style={{ width: 45, height: 45 }}
//   />
// );
// const ActivitiesIcon = () => (
//   <Image
//     source={require('../assets/Bird_Logo.png')}
//     style={{ width: 50, height: 35 }}
//   />
// );
// const DiscoverIcon = () => (
//   <Image
//     source={require('../assets/Search_light.png')}
//     style={{ width: 50, height: 50 }}
//   />
// );
// const AccountIcon = () => (
//   <Image
//     source={require('../assets/User_cicrle_light.png')}
//     style={{ width: 40, height: 40 }}
//   />
// );

// const BottomNav = () => {
//   return (
//     <Tab.Navigator       
//       tabBarOptions={{
//         showLabel: true,
//       }}
//       tabBarStyle={styles.tabBar}
//     >
//       <Tab.Screen name='Shop' component={Shop} options={{ tabBarIcon: ShopIcon }} />
//       <Tab.Screen name='Community' component={Community} options={{ tabBarIcon: CommunityIcon }} />
//       <Tab.Screen name='Activities' component={LandingPage} options={{ tabBarIcon: ActivitiesIcon }} />
//       <Tab.Screen name='Discover' component={Discover} options={{ tabBarIcon: DiscoverIcon }} />
//       <Tab.Screen name='Account' component={Account} options={{ tabBarIcon: AccountIcon }} />
//     </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     position: 'absolute',
//     bottom: 25,
//     left: 20,
//     right: 20,
//     elevation: 0,
//     backgroundColor: 'black',
//     borderRadius: 15,
//     height: 120, // Increase the height of the tab bar
//   },
// });

// export default BottomNav;


// AppNavigator.js



// AppNavigator.js

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image, StyleSheet } from 'react-native';
// import LandingPage from './landingPage';
// import Shop from './Shop';
// import Community from './Community';
// import Discover from './discover';
// import Account from './Account';
// import Hiking from './hiking';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const ShopIcon = () => (
//   <Image
//     source={require('../assets/Stackframe_light.png')}
//     style={{ width: 60, height: 60 }}
//   />
// );
// const CommunityIcon = () => (
//   <Image
//     source={require('../assets/Group_light.png')}
//     style={{ width: 45, height: 45 }}
//   />
// );
// const ActivitiesIcon = () => (
//   <Image
//     source={require('../assets/Bird_Logo.png')}
//     style={{ width: 50, height: 35 }}
//   />
// );
// const DiscoverIcon = () => (
//   <Image
//     source={require('../assets/Search_light.png')}
//     style={{ width: 50, height: 50 }}
//   />
// );
// const AccountIcon = () => (
//   <Image
//     source={require('../assets/User_cicrle_light.png')}
//     style={{ width: 40, height: 40 }}
//   />
// );

// const ShopStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Shop' component={Shop} />
//       {/* Other screens related to Shop */}
//     </Stack.Navigator>
//   );
// }

// const BottomNav = () => {
//   return (
//     <Tab.Navigator       
//       tabBarOptions={{
//         showLabel: true,
//       }}
//       tabBarStyle={styles.tabBar}
//     >
//       <Tab.Screen name='Shop' component={ShopStack} options={{ tabBarIcon: ShopIcon }} />
//       <Tab.Screen name='Community' component={Community} options={{ tabBarIcon: CommunityIcon }} />
//       <Tab.Screen name='Activities' component={LandingPage} options={{ tabBarIcon: ActivitiesIcon }} />
//       <Tab.Screen name='Discover' component={Discover} options={{ tabBarIcon: DiscoverIcon }} />
//       <Tab.Screen name='Account' component={Account} options={{ tabBarIcon: AccountIcon }} />
//     </Tab.Navigator>
//   );
// }

// const HikingStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Hiking' component={Hiking} />
//       {/* Other screens related to Hiking */}
//     </Stack.Navigator>
//   );
// }

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator headerMode='none'>
//       {/* Use your bottom navigation */}
//       <Stack.Screen name='BottomNav' component={BottomNav} />
//       {/* Add other stacks/screens here if needed */}
//       <Stack.Screen name='HikingStack' component={HikingStack} />
//     </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     position: 'absolute',
//     bottom: 25,
//     left: 20,
//     right: 20,
//     elevation: 0,
//     backgroundColor: 'black',
//     borderRadius: 15,
//     height: 120, // Increase the height of the tab bar
//   },
// });

// export default AppNavigator;

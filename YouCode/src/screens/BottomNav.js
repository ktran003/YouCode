import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image } from 'react-native'
import LandingPage from './landingPage';
import Shop from './Shop';
import Community from './Community';
import Discover from './discover';
import Account from './Account';



const Tab = createMaterialBottomTabNavigator();

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
    style={{ width: 50, height: 35, bottom: 6, left: 4 }}
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

export default function BottomNav() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'black' }}>
      <Tab.Screen name='Shop' component={Shop} options={{ tabBarIcon: ShopIcon }} />
      <Tab.Screen name='Community' component={Community} options={{ tabBarIcon: CommunityIcon }} />
      <Tab.Screen name='Activities' component={LandingPage} options={{ tabBarIcon: ActivitiesIcon }} />
      <Tab.Screen name='Discover' component={Discover} options={{ tabBarIcon: DiscoverIcon }} />
      <Tab.Screen name='Account' component={Account} options={{ tabBarIcon: AccountIcon }} />
    </Tab.Navigator>
  );
}
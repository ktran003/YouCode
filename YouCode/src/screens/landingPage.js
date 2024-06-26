import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import ActivityType from '../components/activityType';
import HeaderCard from '../components/headerCard';

export default function LandingPage({ navigation }) {

    return (

        <View >
            <HeaderCard
                title="ACTIVITIES"
                />
            <ScrollView style={styles.view}>
                
                {/* <Pressable onPress={() => { navigation.navigate('Progress') }}>
                    <Text>Hiii</Text>
                </Pressable> */}

                <ActivityType image={require('../assets/mindfulness.png')}
                    activity={'MINDFULNESS'} points={'250 points'} />
                <Pressable onPress={() => { navigation.navigate('Hiking') }}>
                    <ActivityType image={require('../assets/hiking.png')}
                        activity={'HIKING'} points={'500 points'} />
                </Pressable>
                <ActivityType image={require('../assets/biking.png')}
                    activity={'BIKING'} points={'500 points'} />
                <ActivityType image={require('../assets/running.png')}
                    activity={'RUNNING'} points={'500 points'} />
                <ActivityType image={require('../assets/climbing.png')}
                    activity={'CLIMBING'} points={'500 points'} />
                <ActivityType image={require('../assets/walking.png')}
                    activity={'WALKING'} points={'500 points'} />
                <ActivityType image={require('../assets/yoga.png')}
                    activity={'YOGA'} points={'500 points'} />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
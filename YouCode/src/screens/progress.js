import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import {
    useFonts,
    Arimo_400Regular,
    Arimo_400Regular_Italic,
    Arimo_500Medium,
    Arimo_500Medium_Italic,
    Arimo_600SemiBold,
    Arimo_600SemiBold_Italic,
    Arimo_700Bold,
    Arimo_700Bold_Italic,
} from "@expo-google-fonts/arimo";


export default function Progress({ navigation }) {
    let [fontsLoaded] = useFonts({
        Arimo_400Regular,
        Arimo_400Regular_Italic,
        Arimo_500Medium,
        Arimo_500Medium_Italic,
        Arimo_600SemiBold,
        Arimo_600SemiBold_Italic,
        Arimo_700Bold,
        Arimo_700Bold_Italic,
    });

    return (
        <View style={styles.container}>
            <View style={styles.metricContainer}>
                <Text style={styles.metrics}>3.15km </Text>
                <Text style={styles.metrics}>200m</Text>
                <Text style={styles.metrics}>North</Text>
            </View>
            <View style={styles.metricTagContainer}>
                <Text style={styles.metricTags}>Distance </Text>
                <Text style={styles.metricTags}>Elevation</Text>
                <Text style={styles.metricTags}>Direction</Text>
            </View>
            <View styles={styles.bottom}>
                <View style={styles.timeContainer} >
                    <Text style={styles.clock}>45:17</Text>
                    <Text style={styles.time}>Time</Text>
                </View>
                <View>
                    <Image style={styles.map} source={require('../assets/grouseMap.png')} />
                </View>
                <View style={styles.pauseContainer}>
                    <Image style={styles.pause} source={require('../assets/pauseButton.png')} />
                </View>
                <View style={styles.musicPlayer}>
                    <Image style={styles.album} source={require('../assets/music.png')} />
                    <Text style={styles.song}>Otha Fish</Text>
                    <View style={styles.musicControl}>
                        <Image source={require('../assets/pauseButton.png')} />
                        <Image source={require('../assets/nextButton.png')} />
                    </View>
                </View>
            </View>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
    },
    metricContainer: {
        flexDirection: 'row',
        marginTop: 40
    },
    metricTagContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    metrics: {
        color: 'white',
        fontFamily: 'Arimo_700Bold',
        fontSize: 30,
        marginHorizontal: 20,
        letterSpacing: 2,
    },
    metricTags: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Arimo_400Regular',
        marginHorizontal: 35,
        marginVertical: 0

    },
    bottom: {
        flexDirection: 'column'
    },
    timeContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        marginVertical: 10
    },
    clock: {
        color: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        fontFamily: 'Arimo_700Bold',
        fontSize: 80,
        alignSelf: 'center'
    },
    pause: {
        alignSelf: 'center',
        marginVertical: '50'
    },
    time: {
        color: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        fontFamily: 'Arimo_500Medium',
        fontSize: 30,
        alignSelf: 'center'
    },
    map: {
        marginVertical: 10,
        alignSelf: 'center',
        height: 300,
        width: 350
    },
    musicControl: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 80
    },
    pauseContainer: {
        marginVertical: 10
    },
    musicPlayer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 25,
        height: 75,
    },
    album: {
        height: 50,
        width: 50,
        marginVertical: 5,
        marginHorizontal: 20,
        alignSelf: 'center'
    },
    song: {
        fontFamily: 'Arimo_600SemiBold',
        fontSize: 20
    }
});
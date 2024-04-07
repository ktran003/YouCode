import { Button, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
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


export default function Hiking({ navigation }) {
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
        <View>
            <ImageBackground source={require('../assets/hikingPage.png')} style={styles.image}>
                <View style={styles.header}>
                    <Text style={styles.activityName}>HIKING</Text>
                    <Text style={styles.pointValue}>500 Points</Text>
                </View>
                <Text style={styles.benefits}>Hiking boosts cardiovascular health, strengthens muscles, and increases flexibility. It offers a mental escape from daily stress, reducing anxiety and enhancing focus through nature's calming effects. This activity combines physical exercise with mental relaxation, promoting overall wellness in a natural setting.</Text>
                <Pressable onPress={() => { navigation.navigate('Map') }} style={styles.bottom}>
                    <Text style={styles.button}>Start A Hike</Text>
                </Pressable>
            </ImageBackground>
            <Text style={styles.subtitles}>WHAT TO BRING</Text>
            <View style={styles.container}>
                <View style={[styles.column]}>
                    <Text style={styles.list}>Backpack</Text>
                    <Text style={styles.list}>Water</Text>
                    <Text style={styles.list}>Food & Snacks</Text>
                    <Text style={styles.list}>Hiking Shoes</Text>
                </View>
                <View style={[styles.column]}>
                    <Text style={styles.list}>Layers</Text>
                    <Text style={styles.list}>Light Jacket</Text>
                    <Text style={styles.list}>Navigation Tools</Text>
                    <Text style={styles.list}>First-Aid Kit</Text>
                </View>
                <View style={styles.column[styles.column]}>
                    <Text style={styles.list}>Multi Tool</Text>
                    <Text style={styles.list}>Flashlight</Text>
                    <Text style={styles.list}>Sun Protection</Text>
                    <Text style={styles.list}>Insect Repellent</Text>
                </View>
            </View>

            <Text style={styles.subtitles}>WHAT TO BRING</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 30,
        marginHorizontal: 25,
        justifyContent: 'space-between'
    },
    image: {
        height: 300,
        width: 430,
    },
    activityName: {
        fontFamily: "Arimo_700Bold",
        color: 'white',
        fontSize: 40,
        letterSpacing: 1
    },
    pointValue: {
        fontFamily: "Arimo_400Regular",
        color: 'white',
        fontSize: 15
    },
    benefits: {
        fontFamily: "Arimo_400Regular",
        color: '#FFF',
        textAlign: 'center',
        marginHorizontal: 25,
        fontSize: 12,
    },
    bottom: {
        marginBottom: 50
    },
    button: {
        color: 'white',
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginHorizontal: 100,
        marginVertical: 30,
        fontSize: 20,
        fontFamily: "Arimo_600SemiBold",
        textAlign: 'center'
    },
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        // justifyContent: 'space-around',
        width: '95%'

    },
    column: {
        flex: 1,
        fontFamily: "Arimo_400Regular",
        fontSize: 12,
        justifyContent: 'space-evenly',
        // marginHorizontal: 1,
    },
    subtitles: {
        marginTop: 30,
        fontFamily: "Arimo_700Bold",
        color: 'black',
        marginHorizontal: 25,
        fontSize: 22,
        letterSpacing: 1,
        paddingBottom: 10
        
    },
    list: {
        paddingBottom:12,
        fontSize: 14
    }
});
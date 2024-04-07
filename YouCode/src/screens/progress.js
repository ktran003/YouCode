import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
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
                <Text style={styles.metric}>3.15km </Text>
                <Text style={styles.metric}>200m</Text>
            </View>
            <View style={styles.metricContainer}>
                <Text style={styles.metricTags}>Distance </Text>
                <Text style={styles.metricTags}>Elevation</Text>
            </View>
            <Text style={styles.clock}>45:17</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    metricContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    metric: {
        color: 'white',
        fontFamily: 'Arimo_600SemiBold',
        fontSize: 40,
        marginHorizontal: 20,
        letterSpacing: 2,
        marginTop: 20
    },
    metricTags: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Arimo_400Regular',
        marginHorizontal: 20,

    },
    clock: {
        color: 'white',
        justifyContent: 'center',
        alignContent: 'center'

    }
});
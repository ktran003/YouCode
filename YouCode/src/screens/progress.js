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
            <Text style={styles.metrics}>3.15</Text>
            <Text style={styles.metrics}>200</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    metrics: {
        color: 'white',
        fontFamily: 'Arimo_600SemiBold',
        fontSize: 50,
        marginHorizontal: 20,
        letterSpacing: 2,
        marginTop: 20
    }
});
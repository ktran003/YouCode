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


export default function ActivityType({ image, activity, points }) {
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

            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.activityName}>{activity}</Text>
                <Text style={styles.pointValue}>{points}</Text>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        width: '100%',
        marginVertical: 10
    },
    activityName: {
        fontFamily: "Arimo_700Bold",
        color: 'white',
        fontSize: 40,
        letterSpacing: 1,
        marginHorizontal: 5
    },
    pointValue: {
        fontFamily: "Arimo_400Regular",
        color: 'white',
        // marginHorizontal: 5,
        right: 25,
        paddingTop: 80
    },
    image: {
        flex: 1,
        flexDirection: 'row',
        height: 110,
        width: '100%',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    }
});
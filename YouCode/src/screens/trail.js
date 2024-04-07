import { Image, Button, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { API_KEY } from '../utils/weatherAPIKey'
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/weatherConditions';
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from 'react';
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


export default function Trail({ navigation, route }) {
    const [isLoading, setIsLoading] = useState(true);
    const [temperature, setTemperature] = useState(0);
    const [maximum, setMaximum] = useState(0);
    const [minimum, setMinimum] = useState(0);
    const [weatherCondition, setWeather] = useState('Clear');
    const [error, setError] = useState(null);

    useEffect(() => { }, [isLoading]);

    const fetchWeather = (lat, lon) => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                setTemperature(json.main.temp);
                setMaximum(json.main.temp_max);
                setMinimum(json.main.temp_min);
                setWeather(json.weather[0].main);
                setIsLoading(false);
            });
    }
    fetchWeather(route.params.latitude, route.params.longitude);


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

    if (!isLoading) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/trail.jpg')} style={styles.image}>
                    <View style={styles.header}>
                        <Text style={styles.activityName}>GROUSE GRIND TRAIL</Text>
                    </View>
                </ImageBackground>
                <View style={styles.metricContainer}>
                    <Text style={styles.metrics}>3.15km </Text>
                    <Text style={styles.metrics}>78m</Text>
                    <Text style={styles.metrics}>Loop</Text>
                </View>
                <View style={styles.metricTagContainer}>
                    <Text style={styles.metricTags}>Length </Text>
                    <Text style={styles.metricTags}>Elevation Gain</Text>
                    <Text style={styles.metricTags}>Route Type</Text>
                </View>
                <Text style={styles.description}>Check out this 1.9-km point-to-point trail near North Vancouver, British Columbia. Generally considered a challenging route, it takes an average of 1 h 42 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The best times to visit this trail are April through October. You'll need to leave pups at home — dogs aren't allowed on this trail.
                </Text>
                <View style={styles.previewButton}>
                    <Text style={styles.previewButtonText}>Preview Trail</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <View style={styles.weatherArea}>
                    <Text style={styles.weatherSubtitle}>
                        Conditions
                    </Text>
                    <View style={styles.weatherMain}>
                        <Text style={styles.tempText}>{temperature}°</Text>
                        <MaterialCommunityIcons
                            size={50}
                            name={weatherConditions[weatherCondition].icon}
                            color={'#666666'}
                            marginLeft={10}
                        />
                    </View>
                    <View style={styles.bodyContainer}>
                        <Text style={styles.title}>{weatherConditions[weatherCondition].title}</Text>
                        <View style={styles.tempVals}>
                            <Text style={styles.title}>H: {maximum}°</Text>
                            <Text style={styles.title}>L: {minimum}°</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.clothes}>
                    <Text style={styles.title}>Don't forget your</Text>
                    <Image source={require('../assets/clothes.png')} />
                    <Pressable onPress={() => navigation.navigate('Progress')}>
                        <Text style={styles.startButton}>Start Hike </Text>
                    </Pressable>
                </View>
            </View>
        );
    }
    else {
        return (
            <View style={styles.bodyContainer}>
                <Text>Loading</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    clothes: {
        margiLeft: 20
    },
    tempVals: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        marginVertical: 10
    },
    title: {
        fontFamily: 'Arimo_400Regular',
        fontSize: 15,
    },
    weatherArea: {
        marginHorizontal: 20,
    },
    weatherMain: {
        flexDirection: 'row',
    },
    weatherSubtitle: {
        marginTop: 20,
        fontFamily: 'Arimo_700Bold',
        fontSize: 20
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 10,
        marginHorizontal: 25,
        justifyContent: 'space-between'
    },
    image: {
        height: 100,
        width: 430,
    },
    tempText: {
        fontSize: 40,
        color: 'black',
        fontFamily: "Arimo_700Bold",
        letterSpacing: 1
    },
    activityName: {
        fontFamily: "Arimo_700Bold",
        color: 'white',
        fontSize: 30,
    },
    metricContainer: {
        flexDirection: 'row',
        marginTop: 40,
        alignContent: 'center'
    },
    metricTagContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    metrics: {
        color: 'black',
        fontFamily: 'Arimo_700Bold',
        fontSize: 30,
        marginHorizontal: 20,
        letterSpacing: 2,
    },
    metricTags: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Arimo_400Regular',
        marginHorizontal: 35,
        marginVertical: 0
    },
    description: {
        marginTop: 30,
        marginBottom: 20,
        fontFamily: "Arimo_400Regular",
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 25,
        fontSize: 12
    },
    previewButton: {
        backgroundColor: 'grey',
        fontFamily: "Arimo_400Regular",
        fontSize: 15,
        alignSelf: 'flex-start',
        marginLeft: 20,
        color: 'black',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    previewButtonText: {
        backgroundColor: 'grey',
        fontFamily: "Arimo_700Bold",
        fontSize: 15,
        color: 'black',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    startButton: {
        backgroundColor: 'black',
        color: 'white',
        paddingHorizontal: 35,
        paddingVertical: 5,
        fontFamily: "Arimo_400Regular",
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 30
    }
});
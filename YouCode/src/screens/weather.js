import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { API_KEY } from '../utils/weatherAPIKey'
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/weatherConditions';
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from 'react';


export default function Weather({ navigation, route }) {
    const [isLoading, setIsLoading] = useState(true);
    const [temperature, setTemperature] = useState(0);
    const [weatherCondition, setWeather] = useState('Clear');
    const [error, setError] = useState(null);

    useEffect(() => { }, [isLoading]);

    const fetchWeather = (lat, lon) => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setTemperature(json.main.temp);
                setWeather(json.weather[0].main);
                setIsLoading(false);
            });
    }

    fetchWeather(route.params.latitude, route.params.longitude);
    if (!isLoading) {
        return (

            <View style={[
                styles.weatherContainer,
                { backgroundColor: weatherConditions[weatherCondition].color }
            ]}>
                <View style={styles.headerContainer}>
                    <MaterialCommunityIcons
                        size={72}
                        name={weatherConditions[weatherCondition].icon}
                        color={'#fff'}
                    />
                    <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
                    <Text style={styles.tempText}>{temperature}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{weatherConditions[weatherCondition].title}</Text>
                    <Text style={styles.subtitle}>{weatherConditions[weatherCondition].subtitle}</Text>
                </View>
            </View>
        )
    }
    else {
        <View style={styles.bodyContainer}>
            <Text>Loading</Text>
        </View>
    }
}


// // export default class Weather extends React.Component {
// state = {
//     isLoading: true,
//     temperature: 0,
//     weatherCondition: 'Clear',
//     error: null
// };

// // componentDidMount() {
// //     this.fetchWeather(28.3772, 81.5707)
// // }

// fetchWeather(lat = 25, lon = 25) {
//     fetch(
//         `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
//     )
//         .then(res => res.json())
//         .then(json => {
//             this.setState({
//                 temperature: json.main.temp,
//                 weatherCondition: json.weather[0].main,
//                 isLoading: false
//             });
//         });
// }

// render() {
//     const route = useRoute()
//     const latitude = route.params?.latitude
//     const longitude = route.params?.longitude
//     console.log(latitude)
//     //this.fetchWeather(latitude, longitude)
//     if (!this.state.isLoading) {
//         return (

//             <View style={[
//                 styles.weatherContainer,
//                 { backgroundColor: weatherConditions[weatherConditions].color }
//             ]}>
//                 <View style={styles.headerContainer}>
//                     <MaterialCommunityIcons
//                         size={72}
//                         name={weatherConditions[this.state.weatherCondition].icon}
//                         color={'#fff'}
//                     />
//                     <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
//                     <Text style={styles.tempText}>{this.state.temperature}</Text>
//                 </View>
//                 <View style={styles.bodyContainer}>
//                     <Text style={styles.title}>{weatherConditions[this.state.weatherCondition].title}</Text>
//                     <Text style={styles.subtitle}>{weatherConditions[this.state.weatherCondition].subtitle}</Text>
//                 </View>
//             </View>
//         )
//     }
//     else {
//         <View>
//             <Text>Loading</Text>
//         </View>
//     }
// }


Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
};

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tempText: {
        fontSize: 72,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40,
        color: 'black'
    },
    title: {
        fontSize: 60,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});

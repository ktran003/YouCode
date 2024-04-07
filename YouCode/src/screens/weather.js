import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { API_KEY } from '../utils/weatherAPIKey'
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/weatherConditions';
import { useRoute } from "@react-navigation/native"


export default class Weather extends React.Component {
    state = {
        isLoading: true,
        temperature: 0,
        weatherCondition: 'Clear',
        error: null
    };

    // componentDidMount() {
    //     this.fetchWeather(28.3772, 81.5707)
    // }

    fetchWeather(lat = 25, lon = 25) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    temperature: json.main.temp,
                    weatherCondition: json.weather[0].main,
                    isLoading: false
                });
            });
    }

    render() {
        const route = useRoute()
        const latitude = route.params?.latitude
        const longitude = route.params?.longitude
        this.fetchWeather(latitude, longitude)
        if (!this.state.isLoading) {
            return (

                <View style={[
                    styles.weatherContainer,
                    { backgroundColor: weatherConditions[this.state.weatherCondition].color }
                ]}>
                    <View style={styles.headerContainer}>
                        <MaterialCommunityIcons
                            size={72}
                            name={weatherConditions[this.state.weatherCondition].icon}
                            color={'#fff'}
                        />
                        <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
                        <Text style={styles.tempText}>{this.state.temperature}</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <Text style={styles.title}>{weatherConditions[this.state.weatherCondition].title}</Text>
                        <Text style={styles.subtitle}>{weatherConditions[this.state.weatherCondition].subtitle}</Text>
                    </View>
                </View>
            )
        }
        else {
            <View>
                <Text>Loading</Text>
            </View>
        }
    }

}
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
        marginBottom: 40
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

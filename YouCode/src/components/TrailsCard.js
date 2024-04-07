import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

const TrailsCard = (props) => {
    const { image, title, style, elevation, distance, time, sideText, difficulty } = props;
    return (
        <View style={{ backgroundColor: props.color, ...style }}>
            <View style={styles.cardContent}>

                <Text style={styles.title}>{title}</Text>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{difficulty}</Text>
                    </TouchableOpacity>
                    <View style={styles.sideRowContainer}>
                        <Text style={styles.smallText}>{time} hrs</Text>
                        <Text style={styles.smallText}>{distance} km</Text>
                        <Text style={styles.smallText}>{elevation} m</Text>
                    </View>
                </View>

                <Text style={styles.sub}>{sideText}</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContent: {
        flexDirection: 'column',
        paddingLeft: 15,
        borderBottomWidth: 1,
        height: 80,
        width: "100%",
        paddingBottom: 10
    },
    smallText: {
        paddingHorizontal: 15
    },
    title: {
        fontSize: 19,
        paddingBottom: 2,
        fontWeight: 'bold',
        paddingTop: 5
    },
    text: {
        fontSize: 16,
    },
    sub: {
        fontSize: 11,
 
        top: '4%',
    },
    sideRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'

    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    button: {
        backgroundColor: 'black',
        justifyContent: 'center',
        // width: 45,
        height: 25,
        borderRadius: 7

    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 3
    }
});

export default TrailsCard;
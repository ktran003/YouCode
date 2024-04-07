import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

const HeaderCard = (props) => {
    const { image, title, style, elevation, distance, time, sideText, difficulty } = props;
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'black',
        height: 100
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        alignSelf: 'center',
        top:50
    }
});

export default HeaderCard;
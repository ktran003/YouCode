import { StyleSheet, Dimensions, Image, View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import HeaderCard from '../components/headerCard';

export default function Discover() {
    return (
        
        <View style={styles.discoverContainer}>
                        <HeaderCard
                title="DISCOVER"
                />
            <ScrollView style={styles.scroll}>


            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Find your next adventure</Text>
            </TouchableOpacity>

            <Text style={styles.header}>GET INSPIRED</Text>
            <Image style={styles.bigImage} source={require('../assets/discover1.png')} />

            <View style={styles.rowContainer}>
                <Image style={styles.smallImage} source={require('../assets/discover2.png')} />
                <Image style={styles.smallImage} source={require('../assets/discover3.png')} />
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scroll: {
        width:'100%'
    },
    header: {
        top: 25,
        left: 5,
        fontWeight: 'bold',
        paddingBottom: 25
    },
    discoverContainer: {

    },
    bigImage: {
        top:15,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: 'black',
        justifyContent: 'center',
        width: '80%',
        height: 40,
        borderRadius: 7,
        alignSelf: 'center',
        top:10

    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30

    },
    smallImage: {
        
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 1
    }
});
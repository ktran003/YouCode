// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import HeaderCard from '../components/headerCard';
// import BottomNav from './BottomNav';

// export default function TrailComplete() {
//     return (
//         <View>
//             <HeaderCard
//                 title=" "
//             />
//             <View style={styles.content}>
//                 <Text style={styles.today}>Today - 3:33</Text>
//                 <View style={styles.headerContainer}>
//                     <Text style={styles.headerText}>Grouse Grind Trail</Text>
//                 </View>
//                 <Text style={styles.distance}>2.55</Text>
//                 <Text style={styles.sub}>Kilometers</Text>
//             </View>
//             <View style={styles.rowContainer}>
//                 <View style={styles.column}>
//                     <Text>2:00:55</Text>
//                     <Text>Time</Text>
//                 </View>

//                 <View>
//                     <Text>749 m</Text>
//                     <Text>Elevation Gain</Text>
//                 </View>

//                 <View>
//                     <Text>500</Text>
//                     <Text>Points Gained</Text>
//                 </View>

//             </View>

//             <Image style={styles.image} source={require('../assets/HikeMap.png')} />

//             <View style={styles.rowContainer}>
//                 <TouchableOpacity style={styles.button}>
//                     <Text style={styles.buttonText}>Add Reflections</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button2}>
//                     <Text style={styles.buttonText2}>Share</Text>
//                 </TouchableOpacity>

//             </View>
//             <BottomNav/>


//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     content: {
//         left: 25
//     },
//     today: {
//         top: 30
//     },
//     headerContainer: {
//         paddingTop: 35,
//         borderBottomWidth: 1

//     },
//     headerText: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     distance: {
//         fontSize: 60,
//         fontWeight: 'bold'

//     },
//     sub: {

//     },
//     rowContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//     },
//     image: {
//         alignSelf: 'center'
//     },
//     button: {
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         width: '45%',
//         height: 40,
//         alignSelf: 'center',
//         top: 10,
//         borderColor: 'black',
//         borderWidth: 1

//     },
//     buttonText: {
//         color: 'black',
//         alignSelf: 'center',
//         fontSize: 15,
//         fontWeight: 'bold',
//         paddingHorizontal: 1
//     },
//     button2: {
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         width: '45%',
//         height: 40,
//         alignSelf: 'center',
//         top: 10,
//         borderColor: 'black',
//         borderWidth: 1

//     },
//     buttonText2: {
//         color: 'white',
//         alignSelf: 'center',
//         fontSize: 15,
//         fontWeight: 'bold',
//         paddingHorizontal: 1
//     }
// });


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderCard from '../components/headerCard';
import BottomNav from './BottomNav';

export default function TrailComplete() {
    return (
        <View style={styles.container}>
            <HeaderCard
                title=" "
            />
            <View style={styles.content}>
                <Text style={styles.today}>Today - 3:33</Text>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Grouse Grind Trail</Text>
                </View>
                <Text style={styles.distance}>2.55</Text>
                <Text style={styles.sub}>Kilometers</Text>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.column}>
                    <Text>2:00:55</Text>
                    <Text>Time</Text>
                </View>

                <View>
                    <Text>749 m</Text>
                    <Text>Elevation Gain</Text>
                </View>

                <View>
                    <Text>500</Text>
                    <Text>Points Gained</Text>
                </View>

            </View>

            <Image style={styles.image} source={require('../assets/HikeMap.png')} />

            <View style={styles.rowContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add Reflections</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2}>Share</Text>
                </TouchableOpacity>

            </View>
            <BottomNav/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Add background color here
    },
    content: {
        left: 25
    },
    today: {
        top: 30
    },
    headerContainer: {
        paddingTop: 35,
        borderBottomWidth: 1

    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    distance: {
        fontSize: 60,
        fontWeight: 'bold'

    },
    sub: {

    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        alignSelf: 'center'
    },
    button: {
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '45%',
        height: 40,
        alignSelf: 'center',
        top: 10,
        borderColor: 'black',
        borderWidth: 1

    },
    buttonText: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 1
    },
    button2: {
        backgroundColor: 'black',
        justifyContent: 'center',
        width: '45%',
        height: 40,
        alignSelf: 'center',
        top: 10,
        borderColor: 'black',
        borderWidth: 1

    },
    buttonText2: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 1
    }
});
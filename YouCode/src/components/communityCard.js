// import React from 'react'
// import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

// const CommunityCard = (props) => {
//     const { image, title, style, elevation, distance, time, sideText, difficulty } = props;
//     return (
//         <View style={styles.card}>
//                         <TouchableOpacity style={styles.button2}>
//                 <Text style={styles.buttonText}>View Event Details</Text>
//             </TouchableOpacity>
//             <Image source={image} style={styles.image}></Image>
            
//             <Text style={styles.title}>{title}</Text>
//             <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>View Event Details</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     card: {
        
//         height: '100%',
//         width: '50%'
//     },
//     image:{
//         height: 175,
//         width: 175
//     },
//     title: {
//         fontWeight: 'bold',
//         fontSize: 17,
//         color: 'white',
//         alignSelf: 'center',
//         top:50
//     },
//     button: {
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         width: 135,
//         height: 25,
//         left: 20

//     },
//     button2: {
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         width: 135,
//         height: 25,
//         top:20

//     },
//     buttonText: {
//         color: 'white',
//         alignSelf: 'center',
//         fontSize: 12,
//         fontWeight: 'bold',
//         paddingHorizontal: 3
//     }
// });

// export default CommunityCard;
import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CommunityCard = (props) => {
    const { image, title, date1, date2, elevation, distance, time, sideText, difficulty } = props;
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Event Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>{date1}</Text>
                <Text style={styles.buttonText}>{date2}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        // position: 'absolute', // Required for absolute positioning inside
        height: 300,
        width: '45%'
    },
    image: {
        height: 167,
        width: 167
    },
    title: {
        position: 'relative',
        top:8,
        fontWeight: 'bold',
        fontSize: 10,
        color: 'black',
        left:4
    },
    button: {
        // position: 'relative',
        left:25,
        backgroundColor: 'black',
        justifyContent: 'center',
        width: 125,
        height: 25,
        top:15
    },
    button2: {
        position: 'absolute',
        top: 30,
        right: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',

    }
});

export default CommunityCard;

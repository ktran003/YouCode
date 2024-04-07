import { View, Text, ScrollView, Image,StyleSheet } from 'react-native';
import HeaderCard from '../components/headerCard';

export default function Account() {
    return (
<View>
    <HeaderCard
    title= "REWARDS"
    />
    <ScrollView>
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Points.png')} />
            <Text style={styles.text}> You're 150 points away from a $5 reward</Text>
            <Text style={styles.text2}>How to Earn</Text>
        </View>

        <View style={styles.container2}>
            <Text style={styles.text3}>Recent Point Activity</Text>
            <Image style={styles.image2} source={require('../assets/pointChart.png')} />
        </View>

    </ScrollView>

</View>
    );
}

const styles = StyleSheet.create({

    image: {
        alignSelf: 'center',
        width: 236,
        height: 235,
        top: 30
    },
    container: {
        height: 400
    },
    text: {
        top: 50,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    text2: {
        top: 55,
        alignSelf: 'center',
        
    },
    text3: {
        fontSize: 22,
        left: 25
        
    },
    image2: {
        alignSelf: 'center',
        width: '90%',
        top: 10
    },
    container2: {
        height: 400
    },
});
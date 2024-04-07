import { View, Text, Image, StyleSheet } from 'react-native';

export default function Shop() {
    return (
<View>
    <View style={styles.box}></View>
<Image style={styles.image} source={require('../assets/shopPage.png')} />
</View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'black',
        height:80,
        width: '100%'
    },
    image: {
        alignSelf: 'center',
        width: '100%'
    }
});
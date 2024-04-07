import { View, Text, Image, StyleSheet } from 'react-native';

export default function Shop() {
    return (
<View>
    <View style={styles.box}></View>
<Image source={require('../assets/shopPage.png')} />
</View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'black',
        height:50,
        width: '100%'
    }
});
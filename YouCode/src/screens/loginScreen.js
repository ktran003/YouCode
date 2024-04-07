import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
            <View style={styles.signInButton}>
                <Button
                    title="Sign In"
                    color="#FEFEFE"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <View style={styles.createAccountButton}>
                <Button
                    title="Create An Account"
                    color="#000000"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInButton: {
        backgroundColor: 'black',
        marginTop: 20,
        paddingHorizontal: 100
    },
    createAccountButton: {
        backgroundColor: 'white',
        bordercolor: 'black',
        borderWidth: 2,
        marginTop: 15,
        paddingHorizontal: 50
    }


});

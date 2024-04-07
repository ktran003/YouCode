import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HeaderCard from '../components/headerCard';
import CommunityCard from '../components/communityCard';


export default function Community() {
    return (
        <View>
            <HeaderCard
                title="COMMUNITY"
            />
            <ScrollView style={styles.container}>
                <View style={styles.rowContainer}>
                <CommunityCard
                image={require('../assets/yoga1.png')}
                title="ARC YOGA CLUB STANLEY PARK"
                date1="SUN"
                date2="APR 7"
                />
                <CommunityCard
                image={require('../assets/collab1.png')}
                title="CAN COLLABORATOR "
                date1="WED"
                date2="APR 10"
                />
                </View>
                <View style={styles.rowContainer}>
                <CommunityCard
                image={require('../assets/climb.png')}
                title="ARC YOGA CLUB STANLEY PARK"
                date1="WED"
                date2="APR7"
                />
                <CommunityCard
                image={require('../assets/shopping.png')}
                title="ARC YOGA CLUB STANLEY PARK"
                date1="WED"
                date2="APR7"
                />
                </View>
                <View style={styles.rowContainer}>
                <CommunityCard
                image={require('../assets/community5.png')}
                title="ARC YOGA CLUB STANLEY PARK"
                date1="WED"
                date2="APR7"
                />
                <CommunityCard
                image={require('../assets/community6.png')}
                title="ARC YOGA CLUB STANLEY PARK"
                date1="WED"
                date2="APR7"
                />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    container: {
        top:10

    }
});
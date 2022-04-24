import React from 'react';
import {View, Text, StyleSheet, Button, Image, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
    
class GeolocationScreen extends React.Component {

    render() {
    return (
        <React.Fragment>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <View style={styles.heading}>
                    <Text style={styles.title}>
                        Find the closest location!
                    </Text>
                </View>

                <View style={styles.container}>
                    <Button
                        color='#933d41'
                        title='TOIMOI BAKERY - DC PICK UP LOCATION'
                        onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/place/2101+P+St+NW,+Washington,+DC+20037/@38.9097944,-77.0490604,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b7c8596f4301:0x9e60b1de4a39fde0!8m2!3d38.9097902!4d-77.0468717')}}
                    />
                </View>

                <View style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={require('../../images/firstaddy.png')}
                    />
                </View>

                <View style={styles.container}>
                    <Button
                        color='#933d41'
                        title='TOIMOI BAKERY - MOSAIC FARMERS MARKET'
                        onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/place/2920+District+Ave,+Fairfax,+VA+22031/@38.8714053,-77.2329145,17z/data=!3m1!4b1!4m5!3m4!1s0x89b64b7c9e4d26a5:0xb2bee1253a50be48!8m2!3d38.8714011!4d-77.2307258')}}
                    />
                </View>

                <View style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={require('../../images/secondaddy.png')}
                    />
                </View>

            </View>

        </ScrollView>

        <View style={styles.footer}>
            <View style={{ marginLeft: 0, marginTop: 10, marginBottom: 20, width: 100 }}>
                <Button
                    title="GO BACK"
                    type="GO BACK BUTTON"
                    color="#cc858a"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        </View>
        </React.Fragment>

    );
};
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7a8a0',
        height: 700,
    },
    title: {
        fontSize: 24,
        fontWeight:'bold',
        color: 'white',
        marginTop: 20
    },
    heading: {
        backgroundColor: '#933d41',
        width: 500,
        height: 70,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: -20
    },
    container: {
        paddingTop: 10
    },
    button: {
        backgroundColor: '#933d41'
    },
    stretch: {
        width: 240,
        height: 240,
        paddingTop: 40,
        resizeMode: 'stretch'
    },
    footer: {
        backgroundColor: '#933d41',
        width: 500,
        height: 70,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: -10
    }
});

export default GeolocationScreen;
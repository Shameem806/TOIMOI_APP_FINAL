import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CustomButton from './components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
    const navigation = useNavigation();

    const onStartPressed = () => {
        navigation.navigate('SignIn');
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <LottieView 
                source={require('../assets/splash.json')} 
                autoPlay 
                loop 
            />

            <CustomButton 
                text="GET STARTED" 
                onPress={onStartPressed}
                type="FIRST"
            />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: '#f7a8a0',
        height: 700,
        padding: 70
    },
});

export default SplashScreen;
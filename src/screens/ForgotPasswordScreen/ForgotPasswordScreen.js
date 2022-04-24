import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();
    const navigation = useNavigation();
    const [username, setUsername] = useState('');

    const onSendPressed = async data => {
        try {
            await Auth.forgotPassword(username);
            navigation.navigate('NewPassword');
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

  return ( 
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
        <Text style={styles.title}>RESET YOUR PASSWORD.</Text>

        <CustomInput
            name="username"
            control={control}
            placeholder="Username"
            value={username}
            setValue={setUsername} 
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton 
            text="Back to Sign In" 
            onPress={onSignInPress} 
            type="TERTIARY" 
        />
    </View> 
    </ScrollView>
  ); 
};

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
        color: '#933d41',
        margin: 10,
    },
    text: {
        color: 'white',
        marginVertical: 10,
    },
    link: {
        color: '#a8516e',
    },
});

export default ForgotPasswordScreen;
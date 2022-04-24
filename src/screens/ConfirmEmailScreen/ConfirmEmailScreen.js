import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {
    const [username, setUsername] = useState();
    const [code, setCode] = useState('');

    const route = useRoute();
    const {control, handleSubmit, watch} = useForm({
        defaultValues : {username: route?.params?.username},
    });

    const theUsername = watch('username');

    const navigation = useNavigation();

    const onConfirmPress = async data => {
        try {
            await Auth.confirmSignUp(username, code);
            navigation.navigate('SignIn');
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onResendPress = async data => {
        try {
            await Auth.resendSignUp(theUsername);
            Alert.alert('Success', 'We have sent a new code to your email!')
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    };

  return ( 
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
        <Text style={styles.title}>CONFIRM YOUR EMAIL.</Text>

        <CustomInput
            name="username"
            control={control}
            placeholder="Username"
            value={username}
            setValue={setUsername}
            rules={{
                required: 'Username is required.'
            }}
        />

        <CustomInput
            name="code"
            control={control}
            placeholder="Enter your confirmation code."
            value={code}
            setValue={setCode}
            rules={{
                required: 'Confirmation code is required.'
            }}
        />

        <CustomButton text="Confirm" onPress={onConfirmPress} />

        <CustomButton 
            text="Resend Code" 
            onPress={onResendPress} 
            type="SECONDARY" 
        />

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

export default ConfirmEmailScreen;
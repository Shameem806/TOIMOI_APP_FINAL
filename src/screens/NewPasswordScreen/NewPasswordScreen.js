import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const NewPasswordScreen = () => {
    const {control, handleSubmit} = useForm();
    const [code, setCode] = useState('');
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = async data => {
        try {
            await Auth.forgotPasswordSubmit(username, code, newPassword);
            navigation.navigate('SignIn');
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

        <Text style={styles.headings}>Username *</Text>

        <CustomInput
            placeholder="Username"
            name="username"
            value={username}
            setValue={setUsername}
            control={control}
            rules={{required: 'Username is required.'}}
        />
        
        <Text style={styles.headings}>Confirmation Code *</Text>

        <CustomInput
            name="code"
            placeholder="Code"
            value={code}
            setValue={setCode} 
            control={control}
            rules={{required: 'Confirmation Code is required.'}}
        />

        <Text style={styles.headings}>New Password *</Text>
        <CustomInput
            name="password"
            placeholder="Enter your new password"
            value={newPassword}
            setValue={setNewPassword}
            control={control}
            secureTextEntry
            rules={{
                required: 'Password is required.',
                minLength: {
                value: 8,
                message: 'Password should be at LEAST 8 characters long.',
                },
            }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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
    headings: {
        marginRight: 'auto',
        color: 'white',
        marginTop: 10,
    }
});

export default NewPasswordScreen;
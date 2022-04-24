import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const EMAIL_REGEX =
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [name, setName] = useState('');

    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onRegisterPressed = async data => {
        try {
            await Auth.signUp({
                username,
                password,
                attributes : {email, name, preferred_username: username}
            });
            
            navigation.navigate('ConfirmEmail', {username});
        } catch (e) {
            Alert.alert('Oops', e.message);
        }

    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

  return ( 
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
        <Text style={styles.title}>CREATE AN ACCOUNT.</Text>

        
        <CustomInput
            name='name'
            control={control}
            placeholder="Name" 
            value={name} 
            setValue={setName}
            rules={{
                required: 'Name is required!',
                minLength: {
                    value: 2,
                    message: 'Name should be at least 2 characters long',
                  },
                  maxLength: {
                    value: 24,
                    message: 'Name should be max 24 characters long',
                  },
            }}
        />

        <CustomInput
            name='username'
            control={control}
            placeholder="Username" 
            value={username} 
            setValue={setUsername}
            rules={{
                required: 'Username is required.',
                minLength: {
                    value: 3,
                    message: 'Username should be at LEAST 3 characters long.'
                },
                maxLength: {
                    value: 24,
                    message: 'Username should be at MOST 24 characters long.'
                },
            }}
        />
        <CustomInput
            name="email"
            control={control}
            placeholder="Email" 
            value={email} 
            setValue={setEmail}
            rules={{
                required: 'Email is required.',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid.'}
            }}
        />
        <CustomInput
            name="password"
            control={control}
            placeholder="Password"
            value={password} 
            setValue={setPassword}
            secureTextEntry
            rules={{
                required: 'Password is required.',
                minLength: {
                    value: 8,
                    message: 'Password should be at LEAST 8 characters long.',
                },
            }}
        />
        <CustomInput
            name="password-repeat"
            control={control}
            placeholder="Repeat Password" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry
            rules={{
                validate: value => value === pwd || 'Passwords do not match.',
            }}
        />

        <CustomButton 
            text="Register" 
            onPress={handleSubmit(onRegisterPressed)} 
        />

        <CustomButton 
            text="Have an account? Sign in!" 
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
    logo: {
        width: '100%',
        maxWidth: 500,
        marginBottom: 20,
        height: 100,
        borderWidth: 3,
        borderColor: 'white',
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

export default SignUpScreen;
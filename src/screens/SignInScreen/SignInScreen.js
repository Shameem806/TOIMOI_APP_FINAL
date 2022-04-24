import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions, ScrollView, Alert} from 'react-native';
import Logo from '../../../assets/images/toimoi.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSignInPressed = async data => {
        if(loading) {
            return;
        }

        setLoading(true);

        try {
            const response = await Auth.signIn(username, password);
            console.log(response);
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false);
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };

  return ( 
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}> 
        <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.23}]}
            resizeMode="contain"
        />

        <CustomInput 
            name="username"
            placeholder="Username" 
            value={username}
            setValue={setUsername}
            control={control}
            rules={{required: 'Username is required.'}}
        />

        <CustomInput 
            name="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
            control={control}
            rules={{
                required: 'Password is required.',
                minLength: {
                    value: 3,
                    message: 'Password should be at LEAST 3 characters long.',
                }
            }}
        />
        <CustomButton 
            text={loading ? "Loading..." : "Sign In"} 
            onPress={handleSubmit(onSignInPressed)} 
            
        />

        <CustomButton 
            text="Forgot Password?" 
            onPress={onForgotPasswordPressed} 
            type="TERTIARY" 
        />

        <CustomButton 
            text="Don't have an account? Create one!" 
            onPress={onSignUpPress} 
            type="TERTIARY" 
            style={styles.create}
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
    }
});

export default SignInScreen;
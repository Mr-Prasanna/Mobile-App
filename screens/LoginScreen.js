// LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image, Alert, KeyboardAvoidingView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { LOGIN_SUCCESS, loginRequest, LOGIN_REQUEST } from '../actions/authActions';
// import axios from 'axios';
import { LOGIN_API } from '../apis/api';
// import { loginSuccess, loginFailure } from './actions';
import LoginContainer from '../Container/LoginContainer';
// import FontAwesome from "react-native-vector-icons/FontAwesome"
// import SplashScreen from 'react-native-splash-screen';
function LoginScreen(props) {
    // const { handleRegister } = props;
    // console.log("props", props)
    // console.log("emailC+", props.ii)
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    // const [emailValidError, setEmailValidError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [incorrectMsg, setIncorrectMsg] = useState('');
    // const error = useSelector((state) => state.login.error);
    const dispatch = useDispatch();
    // useEffect(()=> {
    //     // SplashScreen.hide();
    //     SplashScreen.hide();
    //   })

    const navigation = useNavigation();
    const isEmailValid = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    }
    const handleValidate = () => {
        if (email.trim() == '') {
            setEmailError('Email Required');
        }
        else if (!isEmailValid(email.trim())) {
            setEmailError('Email invaild')
        }
        else {
            setEmailError('')
        }

        if (password.trim() !== '') {
            setPasswordError('');
        }
        else {
            setPasswordError('Password Required')
        }
    }

    const handleLogin = () => {
        // navigation.navigate("Timesheet")
       navigation.navigate("Home")
        // const getData = {
        //     "email": email,
        //     "password": password
        // }
       // dispatch(loginRequest(getData, onSuccess, onError));//, onFailure
        // console.log("getData", getData);
        // console.log("onSuccess", onSuccess.bind)
    };

    function onSuccess(response) {
        console.log("onSuccessResponse+++", response);
        if (response.status == "SUCCESS") {
            Alert.alert("Success", "Login Successfully")
            navigation.navigate("Home")
        }
        else {
            Alert.alert("ErrorMsg", response.message);
        }
    }

    function onError(error) {
        console.log("onError", error.message)
        Alert.alert("onError", error);
    }

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    return (

        <View style={styles.container}>
            <KeyboardAvoidingView>
            <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row' ,marginBottom:10}}>
                    <MaterialCommunityIcons name="alpha-j-box" color={'#0000FF'} size={60} style={{ justifyContent: 'center', textAlign: 'center' }} />
                    <MaterialCommunityIcons name="alpha-m-box" color={'#F51720'} size={60} style={{ justifyContent: 'center', textAlign: 'center' }} />
                    <MaterialCommunityIcons name="alpha-i-box" color={'#000C66'} size={60} style={{ justifyContent: 'center', textAlign: 'center' }} />
                </View>
                <View style={styles.image}>
                    <Image resizeMode={'cover'} source={require('../images/employeeLogo.png')} />
                </View>
                <Text style={styles.title}>Login</Text>
                {/* <Text style={styles.description}>Please enter your credentials</Text> */}
                <View style={styles.iconContainer}>
                    <TextInput
                        id='email'
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        // onChangeText={text => props.handleOnchange(text, 'email')}
                        onChangeText={(value) => setEmail(value)}
                        value={email}
                        placeholder='Enter Email ID'
                        required={true}
                        onChange={handleValidate}
                    />
                    <MaterialCommunityIcons name="email" color={'#000'} size={26} style={styles.Icon} />

                </View>
                {emailError && <Text style={{ color: 'red' }}>{emailError}</Text>}
                {/* {props.emailError && <Text style={{ color: 'red' }}>{props.emailError}</Text>} */}
                <View style={styles.iconContainer}>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => props.handleOnchange(text, 'password')}
                        onChangeText={(value) => setPassword(value)}
                        value={password}
                        placeholder="Enter Password"
                        // onBlur={handleBlur('password')}
                        secureTextEntry={true}
                        // required={true}
                        maxLength={8}
                        // onKeyPress={handleValidate}
                        // onChange={props.handleValidate}
                        onChange={handleValidate}
                    />
                    <MaterialCommunityIcons name="lock" color={'#000'} size={26} style={styles.Icon} />

                </View>
                {passwordError && <Text style={{ color: 'red' }}>{passwordError}</Text>}
                {/* {props.passwordError && <Text style={{ color: 'red' }}>{props.passwordError}</Text>} */}
                {/* {error && <Text>{error}</Text>} */}
                <View style={styles.submitevent}>
                    <View >
                        <TouchableHighlight onPress={handleLogin}>

                            <View style={styles.button}>
                                <Text style={{ color: 'white' }}>Login</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <Text>{incorrectMsg}</Text>
                <View style={styles.actbutton}>
                    <Text>Don't have an account ?</Text>
                    <TouchableHighlight onPress={handleRegister}>
                        <View >
                            <Text style={{ color: 'red' }}>  Create a new account</Text>
                        </View>
                    </TouchableHighlight>
                    {/* <TouchableHighlight onPress={props.submitHandler}>
                        <View >
                            <Text style={{ color: 'red' }}>  Create a new account</Text>
                        </View>
                    </TouchableHighlight> */}


                </View>
            </KeyboardAvoidingView>
        </View>


    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor: '#527853',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        alignSelf: 'center',
        alignItems: 'center'
    },
    title: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 28,
        color: '#f0b20a'
    },
    description: {
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        color: '#d1220a'
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 40,
        borderRadius: 5
        // marginRight: 20
    },

    passwordInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        fontSize: 10,
        margin: 20,
        alignSelf: 'flex-end',
    },
    pwd: {
        flexDirection: 'row',
        // marginLeft: 10,
        // textAlign: "right",
        color: '#2196f3',
        // alignSelf: "flex-start",
        justifyContent: 'flex-end'
    },

    actbutton: {
        // alignItems:'center',
        color: "#f5f6f7",
        padding: 10,
        marginLeft: 20,
        borderRadius: 10,
        alignSelf: 'center',
        fontWeight: '900',
        flexDirection: 'row'

    },

    button: {
        // alignItems: "center",
        marginHorizontal: 0,
        backgroundColor: '#eb692d',
        color: '#fafaf7',
        fontSize: 20,
        //fontWeight: '200',
        paddingHorizontal: 50,
        paddingVertical: 20

    },
    submitevent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        alignSelf: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingBottom: 10,
    },
    Icon: {
        position: 'absolute',
        right: 75,
        alignSelf: 'center',
        alignItems: 'center',

    }
});
export default LoginScreen;

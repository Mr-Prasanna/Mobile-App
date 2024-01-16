import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button,Alert, StyleSheet, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';
// import OTPInputView from "@twotalltotems/react-native-otp-input";
import { verifyOTP } from '../actions/registerAction';
import { OtpInput } from 'react-native-otp-entry';
// import { verifyOTP } from '../actions/registerAction';
// Import your Redux actions
import { useNavigation } from '@react-navigation/native';
import registrationScreen from './RegisterScreen'
import { VERIFY_API } from '../apis/api';
import RegisterScreen from './RegisterScreen';
const OTPScreen = (props) => {
    // console.log("props1+++", props)
    const dispatch = useDispatch();
    const [otp, setOTP] = useState('');
    // const [email, setEmail] = useState('');
    const [otpErrorMsg, setOtpErrorMsg] = useState('');
    // const [email, setEmail] = useState(props.route.params.email)//props.route.params.email
    const email = props.route.params.email;
    // console.log("otp++", otp)
    const navigation = useNavigation();
    const error = '';
    const validateOTP=()=>{
        if(otp.length>0){
            setOtpErrorMsg('')
        }
        else{
            setOtpErrorMsg('otp fields are required')
        }
    }
    const handleVerifyOTP = () => {

        dispatch(verifyOTP(email, otp, onSuccess, onError))

    };
    function onSuccess(response) {
        console.log("onSuccessOtTpResp+++", response);
        if (response.status == "SUCCESS") {
            Alert.alert("Success","Otp Verification successfully")
            navigation.navigate("Login")
        }
        else {
            Alert.alert("ErrorMsg", response.message);
        }
    }

    function onError(error) {
        console.log("onOTPError", error.message)
        Alert.alert("onErrors", error);
    }
    return (
        <View style={styles.container}>
            <View style={styles.acountTitle}>
                <Text style={styles.description}>Enter the OTP sent to this email:<Text style={{ color: "red" }}>{email}</Text> </Text>
            </View>
           
            <View style={styles.otpInput}>
                <OtpInput
                    numberOfDigits={6}
                    autoFocusOnLoad
                    style={styles.otpInput}
                    value={otp}
                    onTextChange={(value) => setOTP(value)}
                    onChange={validateOTP}
                />
            </View>
            <Text style={{ color: 'red' }}>{otpErrorMsg}</Text>
          
            <View style={styles.actbutton}>
                <TouchableHighlight onPress={handleVerifyOTP}>
                    <View >
                        <Text style={{ color: 'white' }}>Verify</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <Text style={{ color: 'red' }}>{error}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    body: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10
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
    acountTitle: {
        // backgroundColor: '#e0c71f',
        paddingBottom: 10,
        paddingTop: 10
    },
    description: {
        // fontSize: 20,
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        // marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 25,
        color: '#f0b20a'
    },
    actbutton: {
        //   alignItems: 'center',
        color: '#f2f8fa',//"#f5f6f7",
        padding: 20,
        // marginLeft: 20,
        borderRadius: 10,
        alignSelf: 'center',
        fontWeight: '900',
        flexDirection: 'row',
        backgroundColor: "#45cbed",
        marginVetical: 20

    },
    otpInput: {
        alignItems: "center",
        marginHorizontal: 40,
        paddingBottom: 30
    },
    otpView: {
        width: "80%",
        height: 150,
        color: "black",
        borderColor: "black",
        // paddingLeft: 10,
        paddingHorizontal: 10,
        // backgroundColor: "black"
        justifyContent: "center",
        alignItems: "center"
    },
    underlineStyleBase: {
        color: "black"
    },
    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
})
export default OTPScreen;

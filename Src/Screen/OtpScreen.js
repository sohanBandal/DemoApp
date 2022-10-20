import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OtpTextInput from 'react-native-otp-textinput';
import LinearGradient from "react-native-linear-gradient";
import ColorePath from "../Asstes/ColorePath";
import ApiCall from "../Asstes/Comman/ApiCall";

const OtpScreen = (props) => {
    const [ checkOtp, setCheckOtp] =useState( props.route.params.user_data);
    console.log('---otp---', props.route.params.user_data)
    const [Otps, setOtp] = useState();
    console.log('---user_data---',checkOtp.otp)
    console.log('---user_data---',checkOtp.email)
    console.log('---user_data---',checkOtp.phone_number)
    console.log('---user_data---',checkOtp.userId)
    
  

    const OTPAPi = () => {
        let Otpdata = {
            device_token: '123456789',
            device_id: '123456789',
            Otp:Otps
        }
        ApiCall.ApiMethod('verify-otp-verification-code', 'POST', JSON.stringify(Otpdata)).then((response) => {
            console.log('----otp--', response)
            if (response.status) {
                props.navigation.navigate('loginScreen')
            }
            else {
                alert('unsuccessfull')
            }
        });
    }
        return (
            <View style={{ flex: 1, padding: 30 }}>
                <OtpTextInput
                    tintColor={'red'}
                    offTintColor={'orange'}
                    inputCount={6}
                    handleTextChange={(text) =>{setOtp(text)}}
                // containerStyle={{backgroundColor:'yellow'}}
                // textInputStyle={{backgroundColor:'white'}}
                />
                <TouchableOpacity onPress={() => { OTPAPi('') }} style={{ alignItems: 'center', marginTop: 70 }}>
                    <LinearGradient style={{ borderRadius: 15 }} colors={['orange', 'white']} >
                        <Text style={{ paddingHorizontal: 100,fontWeight:'bold', fontSize: 40, paddingVertical: 5, fontWeight: 'bold', color: ColorePath.Black }}>
                            Verify
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        );
    }
    export default OtpScreen;
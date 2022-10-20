import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ColorePath from "../Asstes/ColorePath";
import ApiCall from "../Asstes/Comman/ApiCall";

const LoginApiScreen = (props) => {
    const [phone_number, setphone_number] = useState();
    const [password, setpassword] = useState();

    useEffect(() => {
        LoginApi('')
    }, []);

    const LoginApi = () => {
        let data = {
            device_token: '12345678',
            phone_number: phone_number,
            password: password

        }
        ApiCall.ApiMethod('login', 'POST', JSON.stringify(data)).then((responce) => {
            // console.log('login-----', responce)
            // if (responce.status) {
            //     props.navigation.navigate('Flatlist')
            // }else{
            //     alert('unsuccesfull')
            // }
        })
    }

    return (
        <View style={{ flex: 1, padding: 30 }}>
            <TextInput
                onChangeText={(text) => { setphone_number(text) }}
                value={phone_number}
                placeholder='Enter youe phone_number'
                style={{ fontSize: 25, fontWeight: 'normal', height: 50, backgroundColor: ColorePath.White, elevation: 10, marginBottom: 20, borderRadius: 15, paddingLeft: 15, marginTop: 40 }} />
            <TextInput
                onChangeText={(text) => { setpassword(text) }}
                value={password}
                placeholder='Enter youe password'
                style={{ fontSize: 25, fontWeight: 'normal', height: 50, backgroundColor: ColorePath.White, elevation: 10, marginBottom: 30, borderRadius: 15, paddingLeft: 15 }} />

            <TouchableOpacity style={{ alignItems: 'center', marginTop: 70 }}>
                <LinearGradient style={{ borderRadius: 15 }} colors={['orange', 'white']} >
                    <Text style={{ paddingHorizontal: 100, fontSize: 40, paddingVertical: 5, fontWeight: 'bold', color: ColorePath.Black }}>
                        Login
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    );
}
export default LoginApiScreen;
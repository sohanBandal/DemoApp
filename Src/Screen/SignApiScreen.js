import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import ColorePath from '../Asstes/ColorePath';
import LinearGradient from 'react-native-linear-gradient';
import ApiCall from '../Asstes/Comman/ApiCall';

const SignApiScreen = (props) => {
    const [name, setname] = useState('sanu');
    const [email, setemail] = useState('sanua9834@gmail.com');
    const [password, setpassword] = useState('123456789');
    const [phone_number, setphone_number] = useState('9654282123');

    const SignApi = () => {
        let Data = {
            name: name,
            email: email,
            password: password,
            phone_number: phone_number,
            device_token: '123456789',
            device_id: '123456789'
        };
        ApiCall.ApiMethod('register', 'POST', JSON.stringify(Data)).then((response) => {
            console.log('Sign-----',response.data)
            if (response.status) {
                alert('successful')
                props.navigation.navigate('OtpScreen',{user_data:response.data})
            } else {
                alert('unsuccessful')
            }

        })
    }
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 50, fontWeight: 'bold', color: ColorePath.Black, marginBottom: 50 }}>
                Hi... <Text style={{ fontSize: 20 }}>here you sign in </Text>
            </Text>
            <TextInput
                onChangeText={(text) => { setname(text) }}
                value={name}
                placeholder='Enter youe Name'
                style={{ fontSize: 25, fontWeight: 'normal', height: 50, backgroundColor: ColorePath.White, elevation: 10, marginBottom: 20, borderRadius: 15, paddingLeft: 15 }} />
            <TextInput
                onChangeText={(text) => { setemail(text) }}
                value={email}
                placeholder='Enter youe Email'
                style={{ fontSize: 25, fontWeight: 'normal', height: 50, backgroundColor: ColorePath.White, elevation: 10, marginBottom: 30, borderRadius: 15, paddingLeft: 15 }} />

            <TextInput
                onChangeText={(text) => { setpassword(text) }}
                value={password}
                placeholder='Enter youe Email Password'
                style={{ fontSize: 25, fontWeight: 'normal', height: 50, backgroundColor: ColorePath.White, elevation: 10, marginBottom: 30, borderRadius: 15, paddingLeft: 15 }} />

            <TextInput
                onChangeText={(text) => { setphone_number(text) }}
                value={phone_number}
                placeholder='Enter youe Moblie Number'
                style={{ fontSize: 25, fontWeight: 'normal', height: 50, backgroundColor: ColorePath.White, elevation: 10, marginBottom: 30, borderRadius: 15, paddingLeft: 15 }} />



            <TouchableOpacity onPress={() => { SignApi() }}
                style={{ alignItems: 'center', marginTop: 70 }}>
                <LinearGradient style={{ borderRadius: 15 }} colors={['orange', 'white']} >
                    <Text style={{ paddingHorizontal: 100, fontSize: 40, paddingVertical: 5, fontWeight: 'bold', color: ColorePath.Black }}>
                        Sign In
                    </Text>
                </LinearGradient>
            </TouchableOpacity>




        </View>
    );
}

export default SignApiScreen;
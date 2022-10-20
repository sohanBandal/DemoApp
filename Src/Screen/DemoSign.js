import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import CustomeBTN from "../Asstes/Comman/CustomeBTN";
import CustomeInput from "../Asstes/Comman/CustomeInput";
import ImagePath from "../Asstes/ImagePath";

const DemoSign = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View>
                    <ImageBackground style={{ height: 240, width: 420, justifyContent: 'center', alignItems: 'center', resizeMode: 'contain' }} source={ImagePath.backgroundTop}>
                        <Image style={{ height: 170, width: 170, resizeMode: 'contain' }} source={ImagePath.Logo} />
                    </ImageBackground>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 60, color: 'black', fontWeight: 'bold' }}>
                        Hi...
                    </Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 30 }}>
                        Sign in to your account
                    </Text>
                    <CustomeInput
                        MBootam={20}
                        placeholder="Enter your name"
                    />
                    <CustomeInput
                        password={true}
                        MBootam={20}
                        placeholder="Enter your password"
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'right', marginTop: -15, marginBottom: 30 }}>
                        Forgot your Password
                    </Text>
                    <CustomeBTN
                        text="Sign In"
                        onpress={() => navigation.navigate('DemoSingUp')}
                    />
                    <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: 'bold', marginTop: 40 }}>
                        Don't have an account? <Text style={{ color: 'skyblue' }}>Create</Text>
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
}
export default DemoSign;
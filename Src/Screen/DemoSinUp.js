import React from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomeBTN from "../Asstes/Comman/CustomeBTN";
import CustomeInput from "../Asstes/Comman/CustomeInput";
import ImagePath from "../Asstes/ImagePath";

const DemoSingUp = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View>
                    <ImageBackground style={{ height: 240, width: 420, justifyContent: 'center', alignItems: 'center', resizeMode: 'contain' }} source={ImagePath.backgroundTop}>
                        <Image style={{ height: 170, width: 170, resizeMode: 'contain' }} source={ImagePath.Logo} />
                    </ImageBackground>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>
                        Create in to your account
                    </Text>
                    <CustomeInput
                        MBootam={20}
                        placeholder="User Name"
                    />
                    <CustomeInput
                        MBootam={20}
                        placeholder="Mobile Number"
                    />
                    <CustomeInput
                        MBootam={50}
                        placeholder="Password"
                        password={true}
                    />
                    <CustomeBTN
                        placeholder="Sign Up"
                        text="Sign Up"
                        MBootam={30}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('DemoSign')}>
                        <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: 'bold', marginTop: 40 }}>
                            Already have an account? <Text style={{ color: 'skyblue' }}>Sign in</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}
export default DemoSingUp;
import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import ImagePath from "../Asstes/ImagePath";

const DemoSlpash = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <ImageBackground style={{ flex: 1, justifyContent:'center',alignItems:'center' }} source={ImagePath.MainScreen}>
                <TouchableOpacity onPress={() => navigation.navigate('DemoSign')}>
                    <Image style={{ height: 300, width: 300 }} source={ImagePath.Logo} />
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'skyblue',textAlign:'center' }}>
                        Wel<Text style={{ color: 'orange' }}>Come</Text>
                    </Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
    );
}
export default DemoSlpash;


import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import ImagePath from "../Asstes/ImagePath";

const InputmeImg = () => {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 30, marginBottom: 30 }}>
                sanu jangid
            </Text>
            <TextInput
                placeholder="Sanu"
                style={{ height: 100, backgroundColor: 'white', borderRadius: 30, elevation: 10, fontSize: 50, paddingLeft:10 }}
            />
            <Image
            style={{height:70,width:70,marginTop:-80,marginLeft:300}}
                source={ImagePath.Logo}
            />
        </View>
    );
}
export default InputmeImg;
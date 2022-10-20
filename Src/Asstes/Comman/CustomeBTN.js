import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomeBTN = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={props.onpress} style={{ width: '70%', backgroundColor: 'orange',borderRadius:30,height:60 }}>
                <Text style={{ textAlign: 'center', fontSize: 40, color: 'white' }}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default CustomeBTN;
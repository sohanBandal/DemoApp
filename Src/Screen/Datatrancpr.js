import React from "react";
import { View, Text } from "react-native";

const Datatrancpr = (props) => {
    console.log('props--',props)
    return (
        <View style={{flex:1}}>
            <Text style={{fontSize:30,color:'red'}}>
                {props.data}
            </Text>
        </View>
    );
}
export default Datatrancpr;
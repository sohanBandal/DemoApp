import React from "react";
import { TextInput, View } from "react-native";

const CustomeInput =(props)=>{
    return(
        <View>
            <TextInput
            secureTextEntry={props.password}
            placeholder={props.placeholder}
            style={{backgroundColor:'white',elevation:10,borderRadius:30,marginBottom:props.MBootam,height:50,fontSize:25,paddingLeft:20}}
            />
        </View>
    );
}

export default CustomeInput;
import React from "react";
import { View, Text } from "react-native";
import ChildScreen from "./ChildScreen";

const ParentsScreen =() =>{
    return(
        <View>
            <ChildScreen
            mytext={'sanubandale'}
            />
           
        </View>
    )
}
export default ParentsScreen;
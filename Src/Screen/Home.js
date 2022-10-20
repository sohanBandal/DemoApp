import React from "react";
import { View, Text } from "react-native";
import Datatrancpr from "./Datatrancpr";
const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <Datatrancpr
                data={"some data are the do the"}
            />

        </View>
    );
}
export default Home;
import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

const ACLodingScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="large" color="#00ff00" />

            <Text>
                Try editing me! 🎉
            </Text>
        </View>
    );
}

export default ACLodingScreen;
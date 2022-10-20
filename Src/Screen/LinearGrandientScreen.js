import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const LinearGrandientScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginBottom: 50 }}>
                <LinearGradient colors={['red', 'orange']} >
                    <Text style={{ fontSize: 50 }}>
                        Facebook
                    </Text>
                </LinearGradient>
            </View>

            <View style={{ marginBottom: 50 }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['red', 'orange']} >
                    <Text style={{ fontSize: 50 }}>
                        Facebook
                    </Text>
                </LinearGradient>
            </View>

            <View style={{ marginBottom: 50 }}>
                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} locations={[1, 0, 0]}
                    colors={['red', 'orange']} >
                    <Text style={{ fontSize: 50 }}>
                        Facebook
                    </Text>
                </LinearGradient>
            </View>



            <Text>
                sanu
            </Text>
        </View>
    );
}
export default LinearGrandientScreen;
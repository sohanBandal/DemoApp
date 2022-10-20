import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';

const ToggleScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange' }}>

            <Switch
                trackColor={{ false: "red", true: "white" }}
                thumbColor={isEnabled ? "red" : "white"}
               ios_backgroundColor={ 'red'}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

export default ToggleScreen;
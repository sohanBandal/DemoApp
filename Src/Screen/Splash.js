import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FirstScreen from './ModalScreen';

const Splash = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <TouchableOpacity onPress={() => navigation.navigate('ModalScreen')}>
     <Text style={{fontSize:30}} >
        Try editing me! 🎉
      </Text>
     </TouchableOpacity>
    </View>
  );
}

export default Splash;
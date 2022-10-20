import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalScreen from '../Screen/ModalScreen';
import Splash from '../Screen/Splash';
import LinearGrandientScreen from '../Screen/LinearGrandientScreen';
import ToggaleScreen from '../Screen/ToggaleScreen';

import ACLodingScreen from '../Screen/ACLodingScreen';
import CalnederScreen from '../Screen/CalnederScreen';
import SignApiScreen from '../Screen/SignApiScreen';
import LoginApiScreen from '../Screen/LoginApiScreen';
import OtpScreen from '../Screen/OtpScreen';
import LoopDemoScreen from '../Screen/LoopdomeScreen';
import LoopArryScreen from '../Screen/LoopArryScreen';
import LAFL2Screen from '../Screen/LAFL2Screen';
import LAFL3Screen from '../Screen/LAFL3Screen';
import ParentsScreen from '../Screen/ParentsScreen';
import ChildScreen from '../Screen/ChildScreen';
import Home from '../Screen/Home';
import Datatrancpr from '../Screen/Datatrancpr';
import SliderBoxScreen from '../Screen/SliderBoxScreen';
import SilderScreen from '../Screen/SilderScreen';
import DemoSlpash from '../Screen/DemoSlpash';
import DemoSign from '../Screen/DemoSign';
import DemoSingUp from '../Screen/DemoSinUp';
import InputmeImg from '../Screen/InputmeImg';
import ProjectA from '../Screen/ProjectA';

const Stack = createNativeStackNavigator();

function Routes() {
  console.disableyellowbox=true
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="LinearGrandientScreen" component={LinearGrandientScreen} />
        <Stack.Screen name="ToggaleScreen" component={ToggaleScreen} />
        <Stack.Screen name="ACLodingScreen" component={ACLodingScreen} />
        <Stack.Screen name="CalnederScreen" component={CalnederScreen} />
        <Stack.Screen name="SignApiScreen" component={SignApiScreen} />
        <Stack.Screen name="LoginApiScreen" component={LoginApiScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="LoopDemoScreen" component={LoopDemoScreen} />
        <Stack.Screen name="LoopArryScreen" component={LoopArryScreen} />
        <Stack.Screen name="LAFL2Screen" component={LAFL2Screen} />
        <Stack.Screen name="LAFL3Screen" component={LAFL3Screen} />
        <Stack.Screen name="ParentsScreen" component={ParentsScreen} />
        <Stack.Screen name="ChildScreen" component={ChildScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Datatrancpr" component={Datatrancpr} />
        <Stack.Screen name="SliderBoxScreen" component={SliderBoxScreen} />
        <Stack.Screen name="SilderScreen" component={SilderScreen} />
        <Stack.Screen name="DemoSlpash" component={DemoSlpash} />
        <Stack.Screen name="DemoSign" component={DemoSign}/>
        <Stack.Screen name="DemoSingUp" component={DemoSingUp}/>
        <Stack.Screen name="InputmeImg" component={InputmeImg}/>
        <Stack.Screen name="ProjectA" component={ProjectA}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';


const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTwo, setModalTwo] = useState(false)

    return (
        <View style={{ flex: 1, backgroundColor: 'green' }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={{ fontSize: 40, backgroundColor: 'red' }}>Open Modal</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                    <View style={{ backgroundColor: 'white', height: 400, margin: 30, alignItems: 'center', paddingVertical: 30 }}>
                        <Text style={{ fontSize: 35 }}>Forget Password</Text>

                        <Text style={{ fontSize: 20 }}>You Will Send OTP</Text>

                        <TextInput style={{ borderBottomWidth: 1, color: 'black', marginVertical: 20, fontSize: 30 }}
                            placeholder='Enter Mobile Number' />

                        <TouchableOpacity
                            onPress={() => { setModalVisible(!modalVisible), setModalTwo(true) }}>

                            <Text style={{ fontSize: 40, backgroundColor: 'red', color: 'white', padding: 20 }}>Send OTP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalTwo}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalTwo(!modalTwo);
                }}
            >
                <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                    <View style={{ backgroundColor: 'white', height: 400, margin: 30, padding: 20, alignItems: 'center' }}>
                        <Text style={{ fontSize: 30 }}>We have sent a 4 digit OTP</Text>
                        <Text style={{ fontSize: 35, marginVertical: 20 }} >8107547070</Text>

                        <OTPTextInput
                            inputCount={4} />

                        <TouchableOpacity onPress={() => setModalTwo(!modalTwo)}>
                            <Text style={{ fontSize: 40, backgroundColor: 'red', color: 'white', padding: 20, marginVertical: 20 }}>Verify</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>






        </View>
        );
}

export default ModalScreen;
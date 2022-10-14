import React, { useState } from "react";
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ColorPath from "../asstes/ColorPath";
import fontPath from "../asstes/fontPath";
import ImagePath from "../asstes/ImagePath";

const CreatePassword = () => {
    const [modal, setModal] = useState(true);
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 10 }}>
                    <Text style={{ fontSize: 30, color: ColorPath.BlackColor, marginBottom: 50,fontFamily:fontPath.JostSemiBold }}>
                        Create New Password
                    </Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Image style={{ marginBottom: 30 }} source={ImagePath.BlankIphone} />
                        <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 20 }}>
                            <Image style={{ height: 30, width: 30, marginHorizontal: 5 }} source={ImagePath.CheckBox} />
                            <Text style={{ fontSize: 20, fontFamily:fontPath.JostSemiBold , color: ColorPath.BlackColor, marginHorizontal: 5 }}>Remember me</Text>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', marginBottom: 50 }}>
                    <TouchableOpacity style={{ backgroundColor: ColorPath.BlueColor, height: 60, elevation: 10 }}>
                        <Text style={{ textAlign: 'center', color: ColorPath.WhiteColor, marginTop: 15, fontFamily:fontPath.JostSemiBold, fontSize: 17, letterSpacing: 1 }}>Continue</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModal(!modal);
                        }}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.57)' }}>
                            <View style={{ backgroundColor: ColorPath.WhiteColor, width: 415, justifyContent: 'center', alignItems: 'center', borderRadius: 30, padding: 30 }}>
                                <Image style={{ height: 150, width: 150 }} source={ImagePath.Right} />
                                <Text style={{ fontFamily:fontPath.JostSemiBold, fontSize: 30, color: ColorPath.BlueColor }}>Congratulations!</Text>
                                <Text style={{ textAlign: 'center', fontSize: 21, color: ColorPath.BlackColor, fontFamily:fontPath.JostSemiBold, marginTop: 20, marginBottom: 10, }}>
                                    Your account is ready to use. You will be redirected to the Home page in a few seconds..
                                </Text>
                                <Image style={{ height: 50, width: 50 }} source={ImagePath.Inticater} />
                                <TouchableOpacity
                                    onPress={() => setModal(!modal)}
                                >
                                    <Text style={{ fontSize: 15, fontFamily:fontPath.JostSemiBold, color: ColorPath.BlueColor }}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    {/* <TouchableOpacity
                        onPress={() => setModal(true)}
                    >
                        <Text >Show Modal</Text>
                    </TouchableOpacity> */}
                </View>
            </View>

        </ScrollView>
    );
}
export default CreatePassword;

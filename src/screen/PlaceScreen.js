import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import ColorPath from "../asstes/ColorPath";
import fontPath from "../asstes/fontPath";
import ImagePath from "../asstes/ImagePath";
const PlaceScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image style={{ height: 400, width: 415, }} source={ImagePath.Lady} />
        <View style={{ padding: 30 }}>
          <Text style={{ textAlign: 'center', fontSize: 40, color: ColorPath.BlueColor, marginBottom: 20, fontFamily: fontPath.JostSemiBold }}>
            The place where work finds you
          </Text>
          <Text style={{ fontSize: 17, textAlign: 'center', color: ColorPath.BlackColor, fontFamily: fontPath.JostSemiBold }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </Text>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', marginTop: 30 }}>
            <View style={{ height: 8, width: 8, backgroundColor: ColorPath.GrayColor, borderRadius: 50, margin: 3 }}></View>

            <View style={{ height: 8, width: 40, backgroundColor: ColorPath.BlueColor, borderRadius: 50, margin: 3 }}></View>

            <View style={{ height: 8, width: 8, backgroundColor: ColorPath.GrayColor, borderRadius: 50, margin: 3 }}></View>
          </View>
        </View>
        <View style={{ justifyContent: 'center', paddingHorizontal: 20, marginBottom: 50 }}>
          <TouchableOpacity onPress={() => navigation.navigate('CreatePassword')} style={{ backgroundColor: ColorPath.BlueColor, height: 50, borderRadius: 50, elevation: 10 }}>
            <Text style={{ textAlign: 'center', color: ColorPath.WhiteColor, marginTop: 15, fontWeight: 'normal', fontSize: 17, fontFamily: fontPath.JostSemiBold }}>Next</Text>
          </TouchableOpacity>
        </View>




      </View>
    </ScrollView>

  );
}
export default PlaceScreen;

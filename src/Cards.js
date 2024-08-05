import { ImageBackground, TouchableOpacity, View, Text } from "react-native";
import { deviceWidth, deviceHeight } from "./Dimensions";
import React from "react";
export default function Cards({ name, image, naviagtion }) {
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 10 }}
      onPress={() => naviagtion.navigate("Details", { name })}
    >
      <ImageBackground
        source={image}
        style={{ width: deviceWidth / 2 - 50, height: deviceHeight / 5 }}
        imageStyle={{ borderRadius: 16 }}
      />
      <View style={{ position: "absolute", height: "100%", width: "100%" }}>
        <Text
          style={{
            fontSize: 20,
            width: "100%",
            height: "100%",
            textAlign: "center",
            textAlignVertical: "center",
            color: "black",
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

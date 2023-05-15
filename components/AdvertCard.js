import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const AdvertCard = ({ imgUrl, title, source }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={{ uri: imgUrl }}
          className="h-[180] w-[362]"
          resizeMode="contain"
        />
        <Text className="text-[#fff] bg-red-400 text-xs">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AdvertCard;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ButtonIcon = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-0 pl-1.5 pr-1.5 pt-3 pb-3 w-full z-50 bg-white border-t-2 border-t-gray-100">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="mx-1.5 bg-[#00cebd] p-[15] rounded-md flex-row items-center justify-center space-x-1"
      >
        <Text
          className="text-white"
          style={{
            fontFamily: "ibm_bold",
            fontSize: 15,
          }}
        >
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonIcon;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ButtonConfirmIcon = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-0 pl-1.5 pr-1.5 pt-3 pb-3 w-full z-50 bg-white border-t-2 border-t-gray-100">
      <TouchableOpacity
        onPress={() => navigation.navigate("AddressesScreen3")}
        className="mx-1.5 bg-[#00cebd] p-[15] rounded-md flex-row items-center justify-center space-x-1"
      >
        <Text
          className="text-white"
          style={{
            fontFamily: "ibm_bold",
            fontSize: 15,
          }}
        >
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonConfirmIcon;

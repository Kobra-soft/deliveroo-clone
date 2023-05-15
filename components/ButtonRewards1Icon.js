import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ButtonRewards1Icon = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-0 pl-2 pr-2 pt-3 pb-4 w-full z-50">
      <TouchableOpacity
        onPress={() => alert("Implement MODAL SCREEN")}
        className="mx-1.5 bg-[#00cebd] p-[15] rounded-md flex-row items-center justify-center space-x-1"
      >
        <Text
          className="text-white"
          style={{
            fontFamily: "ibm_bold",
            fontSize: 15,
          }}
        >
          How does Rewards work?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonRewards1Icon;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Cross from "../assets/cross_x.svg";

const ButtonRewardsIcon = () => {
  const navigation = useNavigation();

  return (
    <View className="pl-2 pr-2 pt-3 pb-4 z-50 justify-end flex-row">
      <TouchableOpacity
        onPress={() => alert("Implement MODAL SCREEN")}
        className="mx-1.5 bg-[#00cebd] p-[15] rounded-full flex-row items-center justify-center space-x-1"
      >
        <Cross
          width={22}
          fill="#ffffff"
          style={{ transform: [{ rotate: "45deg" }] }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonRewardsIcon;

import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const NextScreenTemplate = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>NextScreenTemplate</Text>
    </View>
  );
};

export default NextScreenTemplate;

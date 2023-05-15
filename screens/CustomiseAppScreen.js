import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";
import { RadioButton } from "react-native-paper";

const CustomiseAppScreen = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [checked, setChecked] = React.useState("first");

  return (
    <SafeAreaView className="bg-[#f9fbfa] h-full w-full">
      <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-4 bg-white  ">
        <View className="flex-row pb-0 items-center ml-0 space-x-5">
          <ArrowLeftIcon
            width={24}
            fill="#00cebd"
            onPress={navigation.goBack}
          />
          <View className="flex-col space-y-reverse space-y-0 justify-end mx-[176] text-center">
            <Text
              style={{ fontFamily: "ibm_bold", fontSize: 16 }}
              className=" text-[#2E3333] top-[0]"
            >
              Customise app
            </Text>
          </View>
        </View>
      </View>

      <SingleSidedShadowBox style={{ width: "100%", height: 8 }}>
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
            shadowColor: "black",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 2.4,
            shadowRadius: 3,
            elevation: 4,
          }}
        />
      </SingleSidedShadowBox>

      <View className="mt-10 mx-4 mb-0">
        <Text
          style={{ fontFamily: "ibm_bold", fontSize: 18 }}
          className=" text-[#2E3333]"
        >
          App icon
        </Text>
      </View>

      <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-1 mt-3 bg-white border-t border-gray-200"></View>

      <View className="flex-row justify-center items-center space-x-14 bg-white">
        <Image
          style={{ width: 65, height: 65, backgroundColor: "#ffffff" }}
          source={require("../assets/deliveroo_default.png")}
          resizeMode="stretch"
          className="ml-[0]"
        />
        <Image
          style={{ width: 65, height: 65, backgroundColor: "#ffffff" }}
          source={require("../assets/deliveroo_pride.png")}
          resizeMode="stretch"
          className="ml-[0]"
        />
      </View>

      <View className="flex-row justify-center items-center space-x-20 bg-white pt-2 pb-0">
        <Text
          className="pr-3"
          style={{
            fontSize: 13.333,
          }}
        >
          Default
        </Text>
        <Text
          className="right-[5]"
          style={{
            fontSize: 13.333,
          }}
        >
          Pride
        </Text>
      </View>

      <View className="flex-row justify-center items-center space-x-20 bg-white pt-0 pb-0">
        <View>
          <RadioButton
            value="first"
            color="#00cebd"
            uncheckedColor="#bdbdbd"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() =>
              setChecked("first") & alert("Restart / Re-open App for Changes")
            }
          />
        </View>
        <View className="left-1">
          <RadioButton
            value="second"
            color="#00cebd"
            uncheckedColor="#bdbdbd"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() =>
              setChecked("second") & alert("Restart / Re-open App for Changes")
            }
          />
        </View>
      </View>

      <View className="flex-row items-center space-x-4 pl-4 pt-0 pb-5 mt-0 bg-white border-b border-gray-200"></View>

      <View className="flex-row justify-center items-center space-x-24 bg-white pt-2 pb-2"></View>

      <View className="bg-white h-full"></View>
    </SafeAreaView>
  );
};

const SingleSidedShadowBox = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

SingleSidedShadowBox.propTypes = {
  children: PropTypes.element,
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    paddingBottom: 5,
  },
});

export default CustomiseAppScreen;

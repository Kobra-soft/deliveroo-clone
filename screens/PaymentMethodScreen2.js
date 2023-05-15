import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";
import { openBrowserAsync } from "expo-web-browser";

const PaymentMethodScreen2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#f9fbfa] h-full w-full">
      <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-4 bg-white">
        <View className="flex-row pb-0 items-center ml-0 space-x-5">
          <ArrowLeftIcon
            width={24}
            fill="#00cebd"
            onPress={navigation.goBack}
          />
          <View className="flex-col">
            <Text
              style={{ fontFamily: "ibm_bold", fontSize: 16 }}
              className=" text-[#2E3333]"
            >
              Add a payment method
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

      <View className="pt-6">
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentMethodScreen3")}
          className="mx-4 my-4 bg-[#00cebd] p-[15] rounded-md flex-row items-center justify-center space-x-1"
        >
          <Text
            className="text-white"
            style={{
              fontFamily: "ibm_bold",
              fontSize: 15,
            }}
          >
            Add card
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row bg-[#f9fbfa] mt-0 mx-4 pt-0 justify-between border-[#e7ebec]">
        <View className="border-b border-[#2c3534] w-[100] ml-[70]"></View>
        <Text
          style={{ fontFamily: "ibm_regular", fontSize: 12 }}
          className=" text-[#585c5d] top-1.5"
        >
          OR
        </Text>
        <View className="border-b border-[#2e3434] w-[100] mr-[70]"></View>
      </View>

      <View className="pt-9">
        <TouchableOpacity
          onPress={() => openBrowserAsync("https://www.paypal.com/uk/signin")}
          className="mx-4 my-4 p-[16] rounded-md flex-row items-center justify-center space-x-1 border-[#e7ebec] border-2"
        >
          <Image
            style={{ width: 50, height: 12, backgroundColor: "#ffffff" }}
            source={require("../assets/paypal_logo.png")}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </View>
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

export default PaymentMethodScreen2;

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import { openBrowserAsync } from "expo-web-browser";

const AboutOurAppScreen = () => {
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
          <View className="flex-col space-y-reverse space-y-0 justify-end mx-[176] text-center">
            <Text
              style={{ fontFamily: "ibm_bold", fontSize: 16 }}
              className=" text-[#2E3333] top-[0]"
            >
              About our app
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

      <TouchableOpacity
        onPress={() => alert("Opens INTENT / MODAL (Email, Gmail, PayPal)")}
      >
        <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-[22] bg-white border-t border-gray-200">
          <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
            {/*  <Order width={26} height={26} fill="#b9c3c4" className="" /> */}
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="#b9c3c4"
            />
            <View className="">
              <Text
                style={{
                  fontFamily: "ibm_regular",
                  fontSize: 15.666,
                }}
                className=" text-[#2E3333] bottom-[4]"
              >
                Contact us about your order
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert("Opens INTENT / MODAL (Email, Gmail, PayPal)")}
      >
        <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-[0] bg-white">
          <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color="#b9c3c4"
            />
            <View className="">
              <Text
                style={{
                  fontFamily: "ibm_regular",
                  fontSize: 15.666,
                }}
                className=" text-[#2E3333] bottom-[4]"
              >
                Send us some app feedback
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          openBrowserAsync(
            "https://play.google.com/store/apps/details?id=com.deliveroo.orderapp"
          )
        }
      >
        <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-[0] bg-white border-b border-gray-200">
          <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
            <Ionicons name="logo-google-playstore" size={24} color="#b9c3c4" />
            <View className="">
              <Text
                style={{
                  fontFamily: "ibm_regular",
                  fontSize: 15.666,
                }}
                className=" text-[#2E3333] bottom-[4]"
              >
                Rate us on the Play store
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View className="mx-4 mt-[25]">
        <Text
          style={{ fontFamily: "ibm_bold", fontSize: 14 }}
          className=" text-[#2E3333]"
        >
          Version 3.111.1
        </Text>
      </View>

      <View className="mx-4 mt-[8]">
        <Text
          style={{ fontFamily: "ibm_regular", fontSize: 13.333 }}
          className=" text-[#585c5d]"
        >
          © 2013-24 Deliveroo.
        </Text>
        <Text
          style={{ fontFamily: "ibm_regular", fontSize: 13.333 }}
          className=" text-[#585c5d]"
        >
          Made in London.
        </Text>
        <TouchableOpacity
          onPress={() => openBrowserAsync("https://deliveroo.co.uk/legal")}
        >
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 15.666 }}
            className=" text-[#00cebd] pt-5"
          >
            Terms and conditions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openBrowserAsync("https://deliveroo.co.uk/privacy")}
        >
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 15.666 }}
            className=" text-[#00cebd] pt-7"
          >
            Privacy policy
          </Text>
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

export default AboutOurAppScreen;

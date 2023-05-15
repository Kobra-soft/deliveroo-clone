import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";

const ContactPreferencesScreen = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
              Contact Preferences
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

      <View className="mt-5 mx-4 mb-0">
        <Text
          style={{ fontFamily: "ibm_bold", fontSize: 18 }}
          className=" text-[#2E3333]"
        >
          What can we send you?
        </Text>
      </View>

      <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-2 mt-2 bg-white border-t border-gray-200"></View>

      <View className="flex-row justify-between mx-4 bg-white">
        <Text
          style={{
            fontFamily: "ibm_regular",
            fontSize: 15.666,
          }}
          className=" text-[#2e3432] bottom-[4]"
        >
          Live order notifications
        </Text>
      </View>
      <View className="flex-row justify-between mx-4 bg-white">
        <Text
          style={{
            fontFamily: "ibm_regular",
            fontSize: 13.333,
          }}
          className=" text-[#585c5d] bottom-[0] pb-1 w-3/4 bg-white"
        >
          The Deliveroo app will let you know when your rider's on the way and
          allow them to contact you on en route
        </Text>
        {/*         <User width={26} height={26} fill="#b9c3c4" className="" /> */}
        <Switch
          className="bottom-3 bg-white"
          trackColor={{ false: "#b2b2b2", true: "#b2f0eb" }}
          thumbColor={isEnabled ? "#00c8b8" : "#00c8b8"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={!isEnabled}
        />
      </View>

      <View className="flex-row justify-between mx-4 pt-9 bg-white">
        <Text
          style={{
            fontFamily: "ibm_regular",
            fontSize: 15.666,
          }}
          className=" text-[#2e3432] bottom-[4] bg-white"
        >
          Promotional notifications
        </Text>
      </View>
      <View className="flex-row justify-between mx-4 bg-white">
        <Text
          style={{
            fontFamily: "ibm_regular",
            fontSize: 13.333,
          }}
          className=" text-[#585c5d] bottom-[0] pt-0 pb-1 w-3/4 bg-white"
        >
          Get offers and promotions sent from the Deliveroo app straight to your
          phone
        </Text>
        {/*         <User width={26} height={26} fill="#b9c3c4" className="" /> */}
        <Switch
          className="bottom-3 "
          trackColor={{ false: "#b2b2b2", true: "#b2f0eb" }}
          thumbColor={isEnabled ? "#00c8b8" : "#ececec"}
          ios_backgroundColor="#3e3e3e"
          /* onValueChange={toggleSwitch} */
          value={isEnabled}
        />
      </View>

      <View className="flex-row justify-between mx-4 pt-5 bg-white">
        <Text
          style={{
            fontFamily: "ibm_regular",
            fontSize: 15.666,
          }}
          className=" text-[#2e3432] bottom-[4]"
        >
          Promotional emails
        </Text>
      </View>
      <View className="flex-row justify-between mx-4 bg-white">
        <Text
          style={{
            fontFamily: "ibm_regular",
            fontSize: 13.333,
          }}
          className=" text-[#585c5d] bottom-[0] pb-1 w-3/4 "
        >
          Read about special offers, deals and promotions in your inbox
        </Text>
        {/*         <User width={26} height={26} fill="#b9c3c4" className="" /> */}
        <Switch
          className="bottom-3 "
          trackColor={{ false: "#b2b2b2", true: "#b2f0eb" }}
          thumbColor={isEnabled ? "#00c8b8" : "#ececec"}
          ios_backgroundColor="#3e3e3e"
          /* onValueChange={toggleSwitch} */
          value={isEnabled}
        />
      </View>

      <View className="flex-row items-center space-x-4 pl-4 pt-2 pb-0 mt-0 bg-white border-b border-gray-200"></View>

      <View className="flex-row justify-between mx-4 pt-4">
        <Text
          style={{
            fontFamily: "ibm_regular",
            fontSize: 15.666,
          }}
          className=" text-[#585c5d] bottom-[4]"
        >
          You can opt out here at any time. We promise never to sell your
          details to other businesses.
        </Text>
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

export default ContactPreferencesScreen;

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";

const PaymentMethodScreen3 = () => {
  const navigation = useNavigation();
  return (
    <>
      {
        <StatusBar
          translucent
          backgroundColor="#ffffff"
          barStyle="dark-content"
        />
      }
      <SafeAreaView className="bg-[#f9fbfa] h-full w-full">
        <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-4 bg-white  ">
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

        <View className="pt-2">
          <TouchableOpacity
            onPress={() => alert("Scan your card")}
            className="mx-4 my-4 bg-[#00cebd] p-[15] rounded-md flex-row items-center justify-center space-x-1"
          >
            <Text
              className="text-white"
              style={{
                fontFamily: "ibm_bold",
                fontSize: 15,
              }}
            >
              Scan your card
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row bg-[#f9fbfa] mt-3 mx-4 pt-0 justify-between border-[#e7ebec]">
          <View className="border-b border-[#2c3534] w-[132] top-0.5"></View>
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 12 }}
            className=" text-[#585c5d] top-2"
          >
            or add it manually
          </Text>
          <View className="border-b border-[#2e3434] w-[132] top-0.5"></View>
        </View>

        <View className="mt-11 mx-4 bg-[#f9fbfa]">
          <TextInput
            className=" text-[#2e3434] pb-3 border-b border-[#e7ebec] bg-[#f9fbfa]"
            placeholder="Card number"
            placeholderTextColor={"#2e3434"}
            style={{ fontFamily: "ibm_regular", fontSize: 16 }}
          ></TextInput>
        </View>

        <View className="flex-row mt-3 mx-4 pt-5 justify-between bg-[#f9fbfa]">
          <TextInput
            className=" text-[#2e3434] pb-2.5 pr-36 border-b border-[#e7ebec] bg-[#f9fbfa]"
            placeholder="Expiry"
            placeholderTextColor={"#2e3434"}
            style={{ fontFamily: "ibm_regular", fontSize: 16 }}
          ></TextInput>
          <TextInput
            className=" text-[#2e3434] pb-2.5 pr-40 border-b border-[#e7ebec] bg-[#f9fbfa]"
            placeholder="CVV"
            placeholderTextColor={"#2e3434"}
            style={{ fontFamily: "ibm_regular", fontSize: 16 }}
          ></TextInput>
        </View>

        <View className="pt-[18]">
          <TouchableOpacity
            onPress={() => alert("Card Details Saved")}
            className="mx-4 my-4 bg-[#e7ebec] p-[15] rounded-md flex-row items-center justify-center space-x-1"
          >
            <Text
              className="text-[#585c5d89]"
              style={{
                fontFamily: "ibm_bold",
                fontSize: 15,
              }}
            >
              Save card
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
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

export default PaymentMethodScreen3;

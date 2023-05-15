import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";

const AddressesScreen3 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-full w-full">
      <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-4 bg-white  ">
        <View className="flex-row pb-0 items-center ml-0 space-x-5">
          <ArrowLeftIcon
            width={24}
            fill="#00cebd"
            onPress={navigation.goBack}
          />
          <View className="flex-col justify-end mx-[220] text-center">
            <Text
              style={{ fontFamily: "ibm_bold", fontSize: 16 }}
              className=" text-[#2E3333]"
            >
              Confirm Address
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

      <View className="mt-8 mx-4 bg-white">
        <Text
          className="text-[#585c5d] bg-white "
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        >
          Nickname
        </Text>
        <TextInput
          className=" text-[#2e3434] border-b border-[#e7ebec] bg-white"
          placeholder=""
          placeholderTextColor={"#2e3434"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
      </View>

      <View className="mt-8 mx-4 bg-white">
        <Text
          className="text-[#585c5d] bg-white bottom-0.5"
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        >
          Flat number/building name (optional)
        </Text>
        <TextInput
          className="mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#2e3434] border-b border-[#e7ebec] bg-white"
          placeholder=""
          placeholderTextColor={"#2e3434"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
      </View>

      <View className="mt-6 mx-4 bg-white">
        <Text
          className="text-[#575b5c] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          Address line 1
        </Text>
        <TextInput
          className="mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#2e3434] border-b border-[#e7ebec] bg-white"
          placeholder="Acton Gate, Stafford, ST18 9AR, UK "
          placeholderTextColor={"#2e3434"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
      </View>

      <View className="mt-6 mx-4 bg-white">
        <Text
          className="text-[#575b5c] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          Postcode
        </Text>
        <TextInput
          className="mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#2e3434] border-b border-[#e7ebec] bg-white"
          placeholder="ST18 9AR"
          placeholderTextColor={"#2e3434"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
      </View>

      <View className="mt-6 mx-4 bg-white">
        <Text
          className="text-[#575b5c] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          Phone number
        </Text>
        <TextInput
          className="mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#2e3434] border-b border-[#e7ebec] bg-white"
          placeholder="+44 7783 929126"
          placeholderTextColor={"#2e3434"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
        <Text
          className="text-[#585c5d] bg-white top-2"
          style={{ fontFamily: "ibm_regular", fontSize: 13.666 }}
        >
          We'll only call you if there are any issues with your order.
        </Text>
      </View>

      <View className="mt-10 mx-4 bg-white">
        <Text
          className="text-[#5a5c5b] bg-white bottom-0.5"
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        >
          Instructions for your rider (optional)
        </Text>
        <TextInput
          className="mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#2e3434] border-b border-[#e7ebec] bg-white"
          placeholder=""
          placeholderTextColor={"#2e3434 "}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
      </View>

      <View className="bg-white rounded-b-md">
        <TouchableOpacity
          onPress={() => navigation.navigate("Account")}
          className="mx-4 my-10 bg-[#00CCBB] p-[15] rounded-md flex-row items-center justify-center space-x-1"
        >
          <Text
            className="text-white"
            style={{
              fontFamily: "ibm_bold",
              fontSize: 15,
            }}
          >
            Save address
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

export default AddressesScreen3;

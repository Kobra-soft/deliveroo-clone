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
import GoogleIcon from "../assets/google.svg";
import FacebookIcon from "../assets/facebook2.svg";

const AccountDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-full w-full">
      <View className="flex-row items-center space-x-2 pt-4 pb-4 pl-3 mx-1 bg-white">
        <View className="flex-row flex-1 space-x-5 bg-white p-0 items-center rounded-b rounded-t">
          <ArrowLeftIcon
            width={24}
            fill="#00cebd"
            onPress={navigation.goBack}
          />
          <Text
            style={{ fontFamily: "ibm_bold", fontSize: 15.666 }}
            className=" text-[#2E3333] top-[0]"
          >
            Account Details
          </Text>
        </View>
        <View className="bg-white mx-2 items-center">
          <TouchableOpacity onPress={() => alert("Account details saved")}>
            {/* <Options size={24} fill="#00cebd" /> */}
            <Text
              style={{ fontFamily: "ibm_regular", fontSize: 14 }}
              className="text-[#00cebd]"
            >
              SAVE
            </Text>
          </TouchableOpacity>
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
          className="text-[#585c5f] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          First name
        </Text>
        <TextInput
          className=" mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#2e3434] border-b border-[#eaeaea] bg-white"
          placeholder="kobra"
          placeholderTextColor={"#2e3434"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
      </View>

      <View className="mt-6 mx-4 bg-white">
        <Text
          className="text-[#585c5f] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          Last name
        </Text>
        <TextInput
          className="mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#2e3434] border-b border-[#eaeaea] bg-white"
          placeholder="soft"
          placeholderTextColor={"#2e3434"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
      </View>

      <View className="mt-6 mx-4 bg-white">
        <Text
          className="text-[#585c5f] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          Phone number
        </Text>
        <TextInput
          className="mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#000000] border-b border-[#eaeaea] bg-white"
          placeholder="+44 7783 929126"
          placeholderTextColor={"#2e3434"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
      </View>

      <View className="mt-6 mx-4 bg-white">
        <Text
          className="text-[#585c5f] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          Email address
        </Text>
        <TextInput
          className="mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#2e3434] border-b border-[#eaeaea] bg-white"
          placeholder="kobra.soft01@gmail.com"
          placeholderTextColor={"#2e3434"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
        <Text
          className="text-[#585c5d] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          To change your email address, please contact customer support.
        </Text>
      </View>

      <View className="mt-6 mx-4 bg-white">
        <Text
          className="text-[#585c5f] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          Date of birth
        </Text>
        <TextInput
          className="mt-0 mx-0 bottom-0.5 pt-0.5 pb-1 text-[#2e3434] border-b border-[#eaeaea] bg-white"
          placeholder="DD//MM//YYYY"
          placeholderTextColor={"#666666"}
          style={{ fontFamily: "ibm_regular", fontSize: 16 }}
        ></TextInput>
        <Text
          className="text-[#585c5b] bg-white top-0"
          style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        >
          We'll only use this to verify your age on restricted items
        </Text>
      </View>

      <View className="mt-10 mx-4 mb-2">
        <Text
          style={{ fontFamily: "ibm_bold", fontSize: 18 }}
          className=" text-[#2E3333]"
        >
          Social accounts
        </Text>
      </View>

      <TouchableOpacity>
        <View className="ml-4 flex-row items-center space-x-4 pl-0 pt-4 pb-0 mt-0 bg-white border-b border-[#eaeaea]">
          <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0.5 bottom-3">
            <FacebookIcon
              className="bottom-[5]"
              width={28}
              height={28}
            ></FacebookIcon>
            <View className="">
              <Text
                style={{
                  fontFamily: "ibm_regular",
                  fontSize: 15.666,
                }}
                className=" text-[#585c5b] top-[3]"
              >
                Facebook
              </Text>
              <Text
                style={{
                  fontFamily: "ibm_regular",
                  fontSize: 13.666,
                }}
                className=" text-[#abadac] top-[2] pb-1"
              >
                Not connected
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View className="flex-row items-center space-x-2 pt-2 pb-2 pl-0 ml-4 border-b border-[#eaeaea]">
        <View className="flex-row flex-1 space-x-4 bg-white p-0 items-center rounded-b rounded-t">
          <GoogleIcon width={28} height={28} />
          <Text
            style={{
              fontFamily: "ibm_regular",
              fontSize: 15.666,
            }}
            className=" text-[#2c3534] bottom-[5]"
          >
            Google
          </Text>
        </View>
        <View className="bg-white mx-4 items-center">
          <TouchableOpacity onPress={() => alert("Disconnected")}>
            {/* <Options size={24} fill="#00cebd" /> */}
            <Text
              style={{ fontFamily: "ibm_regular", fontSize: 15.666 }}
              className="text-[#00cebd] bottom-[5]"
            >
              Disconnect
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        className="text-[#2E3333] bg-white top-0 pt-2 mx-4"
        style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
      >
        We will never post to Facebook or Google without your permission.
      </Text>
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

export default AccountDetailsScreen;

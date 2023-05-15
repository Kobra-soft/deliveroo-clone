import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";
import DeliverooIcon from "../assets/deliveroo.svg";
import GoogleIcon from "../assets/google.svg";
import FacebookIcon from "../assets/facebook2.svg";
import { openBrowserAsync } from "expo-web-browser";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      {
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      }
      <ScrollView className="bg-[#f9fbfa]">
        <View className="flex-row bg-[#00cebd] h-[100]">
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute p-2 bg-white rounded-full ml-5 mt-[54]"
          >
            <ArrowLeftIcon width={24} fill="#00cebd" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center pt-[0] bg-[#00cebd]">
          <DeliverooIcon width={74} height={74} fill="#ffffff" className="" />
        </View>
        <View className="flex-row justify-center pt-[24] bg-[#00cebd]">
          <Text
            style={{ fontFamily: "ibm_bold", fontSize: 22 }}
            className=" text-[#ffffff] text-center"
          >
            Almost there
          </Text>
        </View>
        <View className="flex-row justify-center pt-[24] bg-[#00cebd] pl-10 pr-10 text-justify">
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 16 }}
            className=" text-[#ffffff] text-center"
          >
            You're one step away from delicious food being delivered to your
            door.
          </Text>
        </View>
        <View className="flex-row justify-center pt-[12] pb-[20] bg-[#00cebd]">
          <Text
            style={{ fontFamily: "ibm_bold", fontSize: 16 }}
            className=" text-[#ffffff] text-center"
          >
            It only takes a minute.
          </Text>
        </View>
        <View className="pt-[0] bottom-0 pb-[0]">
          <Image
            style={{ width: 420, height: 50 }}
            source={require("../assets/wave1d.png")}
            resizeMode="stretch"
            className=""
          />
        </View>

        <View className="bg-[#f9fbfa] h-full">
          <TouchableOpacity>
            <View className="flex-row bg-white mt-12 justify-between pl-4 pr-4 pt-3.5 pb-3.5 ml-4 mr-4 border-[#e7ebec] border rounded-md shadow-black shadow-md">
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 15.333 }}
                className=" text-[#585c5d]"
              >
                Continue with Google
              </Text>
              <GoogleIcon width={20}></GoogleIcon>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row bg-white mt-4 justify-between pl-4 pr-4 pt-3.5 pb-3.5 ml-4 mr-4 border-[#e7ebec] border rounded-md">
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 15.333 }}
                className=" text-[#585c5d]"
              >
                Continue with Facebook
              </Text>
              <FacebookIcon width={20}></FacebookIcon>
            </View>
          </TouchableOpacity>

          <View className="flex-row bg-[#f9fbfa] mt-4 mx-4 pt-1 justify-between">
            <View className="border-b border-[#e7ebec] w-[170]"></View>
            <Text
              style={{ fontFamily: "ibm_regular", fontSize: 15.333 }}
              className=" text-[#585c5d] top-2 text-center"
            >
              or
            </Text>
            <View className="border-b border-[#e7ebec] w-[170]"></View>
          </View>

          <TouchableOpacity>
            <View className="flex-row bg-[#f9fbfa] mt-7 mx-4 pt-1 justify-center">
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 15.333 }}
                className="text-[#00cebd] top-2 text-center"
              >
                Continue with email
              </Text>
            </View>
          </TouchableOpacity>

          <View className="bg-[#f9fbfa] mx-2 mt-9 text-center pl-0 pr-0">
            <Text
              style={{ fontFamily: "ibm_regular", fontSize: 12 }}
              className=" text-[#2E3333] text-center"
            >
              By continuing you agree to our{" "}
              <Text
                onPress={() =>
                  openBrowserAsync("https://deliveroo.co.uk/legal")
                }
                className="text-center"
                style={{
                  fontFamily: "ibm_regular",
                  fontSize: 12,
                  color: "#00cebd",
                }}
              >
                T&Cs
              </Text>
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 12 }}
                className=" text-[#2E3333] text-center"
              >
                . Please also check out our{" "}
                <Text
                  onPress={() =>
                    openBrowserAsync("https://deliveroo.co.uk/privacy")
                  }
                  className="text-center"
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 12,
                    color: "#00cebd",
                  }}
                >
                  Privacy Policy
                </Text>
                .
              </Text>
            </Text>
          </View>

          <View className="bg-[#f9fbfa] mx-3 mt-[17] px-1 mb-[447]">
            <View className="flex-row mt-[0]">
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 12 }}
                className=" text-[#2E3333] text-left"
              >
                We use our data to offer you a personalised experience and to
                better understand and improve our services. For more information{" "}
                <Text
                  onPress={() =>
                    openBrowserAsync("https://deliveroo.co.uk/privacy")
                  }
                  className="text-center"
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 12,
                    color: "#00cebd",
                  }}
                >
                  see here
                </Text>
                .
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LoginScreen;

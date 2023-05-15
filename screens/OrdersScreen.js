import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";

const OrdersScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView className="bg-white h-full">
        <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-4 bg-white">
          <View className="flex-row pb-0 items-center ml-0 space-x-5">
            <ArrowLeftIcon
              width={24}
              fill="#00cebd"
              onPress={navigation.goBack}
              className=" bg-black"
            />
            <View className="flex-col space-y-reverse space-y-0">
              <Text
                style={{ fontFamily: "ibm_bold", fontSize: 16 }}
                className=" text-[#2E3333] top-[0]"
              >
                Orders
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center space-x-4 ml-4 pl-0 pt-2 bg-white justify-center pb-2.5">
          <View className="flex-row space-x-20">
            <Text
              className="bg-[#ffffff] pl-4 pr-4 pt-1 pb-1 rounded-3xl right-3.5 text-[#00cebd]"
              style={{
                fontFamily: "ibm_regular",
                fontSize: 13.666,
              }}
            >
              Pending (0)
            </Text>
            <Text
              className="bg-[#00cebd] pl-4 pr-4 pt-1 pb-1 rounded-3xl left-1.5 text-[#ffffff]"
              style={{
                fontFamily: "ibm_bold",
                fontSize: 13.666,
              }}
            >
              Completed (0)
            </Text>
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

        <View className="flex-row justify-center mt-[32]">
          <Image
            style={{ width: 115, height: 115, backgroundColor: "#ffffff" }}
            source={require("../assets/orders.png")}
            resizeMode="stretch"
            className=""
          />
        </View>

        <View className="flex-row justify-center mt-[20]">
          <Text
            style={{ fontFamily: "ibm_bold", fontSize: 18 }}
            className=" text-[#2E3333] text-center"
          >
            No completed orders
          </Text>
        </View>

        <View className="px-5 mt-[8]">
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 15.333 }}
            className=" text-[#585c5d] text-center"
          >
            You dont have any completed orders yet. Browse restaurants near you
            to find something tasty to order.
          </Text>
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

export default OrdersScreen;

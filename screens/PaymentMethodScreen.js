import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";
import CrossIcon from "../assets/cross_x.svg";

const PaymentMethodScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#f9fbfa] h-full w-full">
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
            Payment methods
          </Text>
        </View>
        <View className="bg-white mx-2 items-center">
          <TouchableOpacity>
            {/* <Options size={24} fill="#00cebd" /> */}
            <Text
              style={{ fontFamily: "ibm_regular", fontSize: 14 }}
              className="text-[#00cebd]"
            >
              EDIT
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentMethodScreen2")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-4 mt-5 bg-white border-t border-b border-gray-200">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0.5 ">
              <CrossIcon
                width={22}
                fill="#00cebd"
                /* onPress={navigation.goBack} */
                style={{ transform: [{ rotate: "45deg" }] }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2E3333] bottom-[4]"
                >
                  Add a payment method
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
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

export default PaymentMethodScreen;

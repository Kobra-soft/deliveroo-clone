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
import Heart from "../assets/heart.svg";
import Order from "../assets/order.svg";
import User from "../assets/user.svg";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AmazonPrime from "../assets/amazon_prime.svg";
import DeliverooIcon from "../assets/deliveroo.svg";
import Voucher from "../assets/voucher.svg";
import AddressIcon from "../assets/map_pin.svg";
import DeliverooPrimePlusIcon from "../assets/deliveroo_prime_plus1.svg";
import { openBrowserAsync } from "expo-web-browser";

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#f9fbfa] h-full w-full">
      <View className="flex-row items-center space-x-4 pl-4 pt-2 pb-1.5 bg-white  ">
        <View className="flex-row pb-0 items-center ml-0 space-x-5 pt-0.5">
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
              Account
            </Text>
            <Text
              style={{
                fontFamily: "ibm_regular",
                fontSize: 12,
              }}
              className=" text-[#585c5d] top-[0] "
            >
              kobra.soft01@gmail.com
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() =>
            openBrowserAsync(
              "https://deliveroo.co.uk/amazon-prime?utm_source=deliveroo_android_account_link"
            )
          }
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-5 bg-white border-t border-b border-gray-200">
            <View className="flex-row items-center ml-0 space-x-4 pb-0.5">
              <AmazonPrime fill="#b9c3c4" className=" bg-black" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Get Plus free with Amazon Prime
                </Text>
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 13.666,
                  }}
                  className=" text-[#575d5d] bottom-[4]"
                >
                  Free with Amazon Prime account
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("OrdersScreen")}>
          <View className="flex-row items-center space-x-4 pl-4 pt-3.5 pb-3 mt-[22] bg-white border-t border-gray-200">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <Order
                width={26}
                height={26}
                fill="#b9c3c4"
                className=" bg-black"
              />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Orders
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Favourites")}>
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3.5 mt-[0] bg-white border-b border-gray-200">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <Heart
                width={26}
                height={26}
                fill="#b9c3c4"
                className=" bg-black"
              />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Favourites
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("AccountDetailsScreen")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-[22] bg-white border-t border-gray-200">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <User width={26} height={26} fill="#b9c3c4" className="" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  My Details
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AmazonPrime")}>
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3 mt-0 bg-white">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <DeliverooPrimePlusIcon width={26} height={26} className="" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Deliveroo Plus
                </Text>
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 13.666,
                  }}
                  className=" text-[#575d5d] bottom-[4]"
                >
                  Start your free trial now
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("RewardsScreen")}>
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3 mt-[0] bg-white">
            <View className="flex-row pb-0 items-center ml-0 space-x-5 pt-0">
              <SimpleLineIcons name="badge" size={22} color="#b9c3c4" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Rewards
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentMethodScreen")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3 mt-[0] bg-white">
            <View className="flex-row pb-0 items-center ml-0 space-x-5 pt-0">
              <AntDesign name="creditcard" size={22} color="#b9c3c4" />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Payment methods
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("VouchersCreditScreen")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3 mt-[0] bg-white">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <Voucher
                width={26}
                height={26}
                fill="#b9c3c4"
                className=" bg-black"
              />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Vouchers and credit
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("AddressesScreen")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3 mt-[0] bg-white">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <AddressIcon
                width={26}
                height={26}
                fill="#b9c3c4"
                className=" bg-black"
              />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Addresses
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ContactPreferencesScreen")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-4 mt-[0] bg-white border-b border-gray-200">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <MaterialCommunityIcons
                name="message-text-outline"
                size={26}
                color="#b9c3c4"
              />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Contact Preferences
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CustomiseAppScreen")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-6 bg-white border-t border-gray-200">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <DeliverooIcon
                width={26}
                height={26}
                fill="#b9c3c4"
                className=" bg-black"
              />
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Customise app
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openBrowserAsync("https://deliveroo.co.uk/faq")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3 mt-0 bg-white">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  FAQs
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("AboutOurAppScreen")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3 mt-0 bg-white">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  About Deliveroo for Android / iOS
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openBrowserAsync("https://www.deliveroo.design/")}
        >
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3 mt-0 bg-white">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Acknowledgements
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigation.goBack}>
          <View className="flex-row items-center space-x-4 pl-4 pt-3 pb-3 mt-0 bg-white border-b border-gray-200">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
              <View className="">
                <Text
                  style={{
                    fontFamily: "ibm_regular",
                    fontSize: 15.666,
                  }}
                  className=" text-[#2f3334] bottom-[4]"
                >
                  Log out
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View className="flex-row items-center space-x-4 pl-4 pt-5 pb-3 mt-0 bg-[#f9fbfa]">
          <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0"></View>
        </View>
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

export default AccountScreen;

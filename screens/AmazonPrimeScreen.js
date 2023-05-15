import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";
import CoinjarIcon from "../assets/coinjar.svg";
import Calendar2Icon from "../assets/calendar2.svg";
import { openBrowserAsync } from "expo-web-browser";

const AmazonPrimeScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      {
        <StatusBar
          translucent
          backgroundColor="#450163"
          barStyle="light-content"
        />
      }
      <ScrollView>
        <View className="flex-row bg-[#450163] h-[100]">
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute p-2 bg-white rounded-full ml-5 mt-[54]"
          >
            <ArrowLeftIcon width={24} fill="#00cebd" />
          </TouchableOpacity>
        </View>

        <View className="bg-[#450163] h-[100]">
          <View className="flex-row justify-center">
            {/* <DeliverooPlusIcon /> */}
            <Image
              style={{ width: 216, height: 50, backgroundColor: "#ffffff" }}
              source={require("../assets/deliveroo_prime_plus_white.png")}
              resizeMode="stretch"
              className="top-3"
            />
          </View>
        </View>

        <View className="flex-row bg-gray-100 justify-center mx-0 px-10 pt-7">
          <Text
            style={{ fontFamily: "ibm_bold", fontSize: 22 }}
            className=" text-[#2E3333] text-center"
          >
            Get special deals and offers on the food you love
          </Text>
        </View>
        <View className="flex-row bg-gray-100 justify-center mx-0 px-10 pt-1 pb-6 border-b border-gray-200">
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 14 }}
            className=" text-[#2E3333] text-center"
          >
            Join Plus to skip the delivery fee at great restaurants and grocery
            shops
          </Text>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-0 pt-6">
          <CoinjarIcon />
          <Text
            className="flex-1 text-[#2E3333]"
            style={{ fontFamily: "ibm_bold", fontSize: 15 }}
          >
            Save up to £5 on delivery fees per order
          </Text>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white">
          <Image
            style={{ width: 53, height: 53, backgroundColor: "#ffffff" }}
            source={require("../assets/offers2.png")}
            resizeMode="stretch"
            className=""
          />
          <Text
            className="flex-1 text-[#2E3333]"
            style={{ fontFamily: "ibm_bold", fontSize: 15 }}
          >
            Get special offers at restaurants
          </Text>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 pb-7 bg-white">
          <Calendar2Icon />
          <Text
            className="flex-1 text-[#2E3333]"
            style={{ fontFamily: "ibm_bold", fontSize: 15 }}
          >
            Cancel at any time
          </Text>
        </View>

        <View className="flex-row bg-[#f9fbfa] justify-center pl-10 pr-10 pt-7 pb-7 border-t border-gray-200">
          <Text
            style={{ fontFamily: "ibm_bold", fontSize: 18 }}
            className=" text-[#2E3333] text-center"
          >
            Choose your plan
          </Text>
        </View>

        <ScrollView
          className="bg-[#f9fbfa]"
          contentContainerStyle={{
            paddingTop: 0,
            paddingLeft: 16,
            paddingRight: 7,
            paddingBottom: 0,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            className="bg-[#f9fbfa]"
            onPress={() => navigation.navigate("AmazonPrime")}
          >
            <View className="bg-[#f9fbfa] pr-2">
              <Image
                source={require("../assets/deliveroogold1.png")}
                style={styles.scrollViewHorz4}
                className="rounded-t-md"
              />
              <Text
                style={{ fontFamily: "Stratos-SemiBold", fontSize: 26 }}
                className="bg-white text-[#2E3333] text-center pt-7 border-l border-r border-gray-200"
              >
                £7.99/month
              </Text>
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 16.666 }}
                className="bg-white text-[#2E3333] text-center pt-3 border-l border-r border-gray-200"
              >
                Free delivery on the food you love -
              </Text>
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 16.666 }}
                className="bg-white text-[#2E3333] text-center pb-2 border-l border-r border-gray-200"
              >
                restaurants, takeaway or groceries
              </Text>
              <View className="bg-white border-l border-r border-b border-gray-200 rounded-b-md">
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
                    Try free for 14 days
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#f9fbfa]"
            onPress={() => navigation.navigate("AmazonPrime")}
          >
            <View className="bg-[#f9fbfa] pr-2">
              <Image
                source={require("../assets/deliveroosilver1.png")}
                style={styles.scrollViewHorz4}
                className="rounded-t-md"
              />
              <Text
                style={{ fontFamily: "Stratos-SemiBold", fontSize: 26 }}
                className="bg-white text-[#2E3333] text-center pt-7 border-l border-r border-gray-200"
              >
                £3.49/month
              </Text>
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 16.666 }}
                className="bg-white text-[#2E3333] text-center pt-3 border-l border-r border-gray-200"
              >
                Free delivery on the food you love -
              </Text>
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 16.666 }}
                className="bg-white text-[#2E3333] text-center pb-2 border-l border-r border-gray-200"
              >
                restaurants, takeaway or groceries
              </Text>
              <View className="bg-white border-l border-r border-b border-gray-200 rounded-b-md">
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
                    Try free for 14 days
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View className="bg-[#f9fbfa] pt-6 pb-8 text-center pl-9 pr-9">
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
            className=" text-[#2E3333] text-center"
          >
            Subscription will automatically renew to the standard price after
            any introductory offer period and you can cancel at any time. Offers
            only applicable to customers with the most recent iOS and Android
            app updates. This offer is personal to you and only one account can
            be used for each subscription. This account will benefit from
            Deliveroo Plus. By clicking the button above, you agree to our
            Deliveroo Plus T&Cs.{" "}
            <Text
              onPress={() => openBrowserAsync("https://deliveroo.co.uk/legal")}
              className="text-center text-[#00cebd]"
              style={{
                fontFamily: "ibm_regular",
                fontSize: 11.666,
              }}
            >
              T&Cs apply
            </Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default AmazonPrimeScreen;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    paddingBottom: 5,
  },
  scrollViewHorz: {
    width: 362,
    height: 180,
    marginRight: 8,
    borderRadius: 4,
  },
  scrollViewHorz3: {
    width: 280,
    height: 180,
    marginRight: 7,
    borderRadius: 6,
  },
  scrollViewHorzBottom: {
    width: 380,
    height: 190,
    marginBottom: 15,
    marginRight: 0,
    borderRadius: 4,
    resizeMode: "stretch",
  },
  scrollViewHorz4: {
    width: 326,
    height: 127,
    marginRight: 0,
    borderRadius: 1,
  },
});

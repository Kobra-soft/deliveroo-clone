import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import CrossIcon from "../assets/cross_x.svg";
import ForksIcon from "../assets/forks.svg";
import RewardsTagIcon from "../assets/tag.svg";
import ButtonIcon from "../components/ButtonIcon";
import Checkbox from "expo-checkbox";

const FiltersScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView className="bg-[#f9fbfa]">
        <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-4 bg-white  ">
          <View className="flex-row pb-0 items-center ml-0 space-x-5">
            <CrossIcon width={24} fill="#00cebd" onPress={navigation.goBack} />
            <View className="flex-col space-y-reverse space-y-0">
              <Text
                style={{ fontFamily: "ibm_bold", fontSize: 16 }}
                className=" text-[#2E3333] top-[0]"
              >
                Filters
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
          <TouchableOpacity onPress={() => navigation.navigate("SortScreen")}>
            <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-[22] bg-white border-t border-gray-200">
              <View className="flex-row pb-0 items-center ml-0 space-x-3.5 pt-0">
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                  source={require("../assets/arrows-vertical2.png")}
                  resizeMode="stretch"
                  className=""
                />
                <View className="">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[4]"
                  >
                    Sort
                  </Text>
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 13.666,
                    }}
                    className=" text-[#595d5e] bottom-[4] pb-"
                  >
                    Recommended
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("HygieneScreen")}
          >
            <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-[0] bg-white">
              <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0">
                <ForksIcon
                  width={24}
                  height={24}
                  fill="#b9c3c4"
                  className=" bg-black"
                />
                <View className="">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[4]"
                  >
                    Hygiene rating
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("OffersScreen")}>
            <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-[0] bg-white">
              <View className="flex-row pb-0 items-center ml-0 space-x-3.5 pt-0">
                <RewardsTagIcon
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
                    className=" text-[#2E3333] bottom-[4]"
                  >
                    Offers
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("DietaryScreen")}
          >
            <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-3 mt-[0] bg-white border-b border-gray-200">
              <View className="flex-row pb-0 items-center ml-0 space-x-3.5 pt-0">
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                  source={require("../assets/carrot2.png")}
                  resizeMode="stretch"
                  className=""
                />
                <View className="">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[4]"
                  >
                    Dietary
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-4 mt-4 bg-[#f9fbfa]">
            <View className="flex-col space-y-reverse space-y-0">
              <Text
                style={{ fontFamily: "ibm_bold", fontSize: 18 }}
                className=" text-[#2E3333] top-[0]"
              >
                Categories
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white border-t border-gray-200">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Alcohol (5)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    All Day Breakfast (5)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    American (20)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Asian (2)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Asian Fusion (2)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    BBQ (3)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Bangladeshi (1)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Belgian (1)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Breakfast (7)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    British (16)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Burgers (16)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Cafe (4)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Carribean (1)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Chicken (24)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Dessert (17)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Drinks (18)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Fish and chips (3)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Fried Chicken (7)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Grocery (7)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Healthy (5)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Ice Cream (6)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Indian (8)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Italian (10)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Kebab (5)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Lebanese (1)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Mexican (2)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Nepalese (1)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Office Catering (1)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Pasta (6)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Salads (8)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Sandwiches (7)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Seafood (3)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Snacks (4)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Supermarket (2)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Thai (2)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white ">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Breakfast (7)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-0 bg-white border-b border-gray-200">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Wings (3)
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-[145] mt-0 bg-[#f9fbfa] ">
            <View className="flex-row pb-0 items-center ml-0 space-x-4 pt-0"></View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <ButtonIcon />
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

export default FiltersScreen;

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
import ButtonIcon from "../components/ButtonIcon";
import Checkbox from "expo-checkbox";

const SortScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView className="bg-[#f9fbfa]">
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
                Sort
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
          <TouchableOpacity>
            <View className="flex-row space-x-4 pl-4 pr-6 pt-4 pb-4 mt-[20] bg-white border-t border-gray-200">
              <View className="flex-row pb-1.5 ml-0 space-x-4 pt-1.5">
                <View className="flex-row justify-between items-center w-full">
                  <Text
                    style={{
                      fontFamily: "ibm_regular",
                      fontSize: 15.666,
                    }}
                    className=" text-[#2E3333] bottom-[0]"
                  >
                    Distance
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
                    Hygiene ratings
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
                    Quickest Delivery
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
                    Recommended
                  </Text>
                  <Checkbox value={true} color="#00cebd" />
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
                    Top-rated
                  </Text>
                  <Checkbox value={false} color="#bdbdbd" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View className="flex-row items-center space-x-4 pl-4 pt-4 pb-[454] mt-0 bg-[#f9fbfa]">
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

export default SortScreen;

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";
import ButtonRewards1Icon from "../components/ButtonRewards1Icon";
import { FontAwesome5 } from "@expo/vector-icons";

const RewardsScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView className="bg-[#f9fbfa] h-full">
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
              Rewards
            </Text>
          </View>
          <View className="bg-white mx-2 items-center">
            <TouchableOpacity onPressIn={() => navigation.navigate("Filters")}>
              {/* <Options size={24} fill="#00cebd" /> */}
              <FontAwesome5
                name="question-circle"
                size={22}
                color="#00CCBB"
                onPress={() => alert("Implement MODAL SCREEN")}
              />
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

        <View className="flex-row justify-center mt-[28]">
          <Image
            style={{ width: 115, height: 115, backgroundColor: "#ffffff" }}
            source={require("../assets/rewards.png")}
            resizeMode="stretch"
            className=""
          />
        </View>

        <View className="flex-row justify-center mt-[20]">
          <Text
            style={{ fontFamily: "ibm_bold", fontSize: 18 }}
            className=" text-[#2E3333] text-center"
          >
            You'll see your reward cards here
          </Text>
        </View>

        <View className="flex-row justify-center px-4 mt-[8]">
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 15.333 }}
            className=" text-[#585c5d] text-center"
          >
            Start a reward card by placing an order at a reward restaurant or
            store
          </Text>
        </View>

        <ButtonRewards1Icon />
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

export default RewardsScreen;

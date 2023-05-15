import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#f9fbfa] h-full w-full">
      {
        <StatusBar
          transparent
          backgroundColor="#ffffff"
          barStyle="dark-content"
        />
      }

      <View className="flex-row items-center space-x-4 p-4 bg-white">
        <View className="bg-white">
          <ArrowLeftIcon
            width={24}
            fill="#00cebd"
            onPress={navigation.goBack}
            className="p-2 bg-black top-4"
          />
        </View>

        <TextInput
          onPressIn={() => navigation.navigate("Search")}
          className="bg-white"
          style={{
            fontFamily: "ibm_regular",
            fontSize: 15.666,
            paddingStart: 0,
            paddingRight: 60,
          }}
          placeholder="Restaurants, groceries, dishes "
          keyboardType="none"
          placeholderTextColor="#abadac"
        />
      </View>

      <View className="flex-row items-center space-x-4 ml-4 pl-2 pt-2 bg-white">
        <View className="flex-row space-x-4">
          <Text
            className="bg-[#00cebd] pl-4 pr-4 pt-1 pb-1 rounded-3xl text-[#ffffff]"
            style={{
              fontFamily: "ibm_bold",
              fontSize: 13.666,
            }}
          >
            All
          </Text>
          <Text
            className="bg-[#ffffff] pl-4 pr-4 pt-1 pb-1 rounded-3xl text-[#00cebd]"
            style={{
              fontFamily: "ibm_regular",
              fontSize: 13.666,
            }}
          >
            Restaurants
          </Text>
          <Text
            className="bg-[#ffffff] pl-4 pr-4 pt-1 pb-1 rounded-3xl right-[6] text-[#00cebd]"
            style={{
              fontFamily: "ibm_regular",
              fontSize: 13.666,
            }}
          >
            Groceries
          </Text>
        </View>
      </View>

      <SingleSidedShadowBox style={{ width: "100%", height: 16 }}>
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

export default SearchScreen;

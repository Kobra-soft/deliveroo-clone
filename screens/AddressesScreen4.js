import { View, StyleSheet, StatusBar, TextInput } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";

const AddressesScreen4 = () => {
  const navigation = useNavigation();
  return (
    <>
      {
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
      }

      <View className="flex-row items-center space-x-4 pt-[55] pl-4 pb-0.5 bg-white ">
        <View className="bg-white">
          <ArrowLeftIcon
            width={24}
            fill="#00cebd"
            onPress={navigation.goBack}
            className="p-2 bg-black top-4"
          />
        </View>

        <TextInput
          className="bg-white"
          style={{
            fontFamily: "ibm_regular",
            fontSize: 15.666,
            paddingStart: 0,
            paddingRight: 60,
          }}
          placeholder="Search for a location"
          keyboardType="none"
          placeholderTextColor="#abadac"
        />
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

export default AddressesScreen4;

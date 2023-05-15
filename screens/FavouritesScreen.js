import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from "@react-navigation/native";
import ArrowLeftIcon from "../assets/arrow_left.svg";
import ButtonFavesIcon from "../components/ButtonFavesIcon";

const FavouritesScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView className="bg-[#f9fbfa] h-full">
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
                Favourites
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

        <View className="flex-row justify-center mt-[28]">
          <Image
            style={{ width: 115, height: 115, backgroundColor: "#ffffff" }}
            source={require("../assets/favourites.png")}
            resizeMode="stretch"
            className=""
          />
        </View>

        <View className="flex-row justify-center mt-[20]">
          <Text
            style={{ fontFamily: "ibm_bold", fontSize: 18 }}
            className=" text-[#2E3333] text-center"
          >
            No favourite places yet
          </Text>
        </View>

        <View className="mx-2 px-4">
          <View className="flex-row justify-center mt-[8]">
            <Text
              style={{ fontFamily: "ibm_regular", fontSize: 15.333 }}
              className=" text-[#585c5d] text-center"
            >
              To save a place to your favourites, tap the heart icon on a
              restaurant, store or menu.
            </Text>
          </View>
        </View>

        <ButtonFavesIcon />
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

export default FavouritesScreen;

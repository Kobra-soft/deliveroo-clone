import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
import Star from "../assets/star.svg";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  delEstimate,
  rating,
  rating2,
  reviews,
  distance,
  closeTime,
  delMinFee,
  delFee,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant2", {
          id,
          imgUrl,
          title,
          delEstimate,
          rating,
          rating2,
          reviews,
          distance,
          closeTime,
          delMinFee,
          delFee,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="w-[280] mr-1.5 rounded-t-md rounded-b-md bg-white border-b border-t border-l border-r border-[#e2e4e3]"
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-[153] w-[278] rounded-t-md"
        resizeMode="stretch"
      />
      <View className="px-3 pb-4 rounded-b-md">
        <Text
          style={{ fontFamily: "ibm_bold", fontSize: 16.333 }}
          className="pl-[1] pt-3 text-[#2e3434]"
        >
          {title}
        </Text>

        <View className="flex-row pl-0 items-center space-x-1 rounded-b-md">
          <Star fill="#007f8c" />
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 14 }}
            className="text-[#107883]"
          >
            {rating} {rating2}
          </Text>
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 14 }}
            className="text-[#575b5e]"
          >
            {reviews}
          </Text>
        </View>
        <View className="pl-0.5">
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 14 }}
            className="text-sm text-[#575b5e]"
          >
            {distance} • £{delFee} delivery
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { AntDesign, Feather, Ionicons, Foundation } from "@expo/vector-icons";

/* DELETE!!!! */

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
      genre2,
      genre3,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          resizeMode="stretch"
          className="w-full h-[231] bg-gray-300"
        />

        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-[52] left-5 p-2 bg-gray-100 rounded-full"
        >
          <AntDesign name="arrowleft" size={24} color="#00cebd" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-[52] right-5 p-2 bg-gray-100 rounded-full"
        >
          <Feather name="search" size={24} color="#00cebd" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-[52] right-[70] p-2 bg-gray-100 rounded-full"
        >
          <Ionicons name="share-social-outline" size={24} color="#00cebd" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-[52] right-[120] p-2 bg-gray-100 rounded-full"
        >
          <Ionicons name="heart-outline" size={24} color="#00cebd" />
        </TouchableOpacity>
      </View>

      <View className="bg-white pt-3.5 px-0">
        <Text className="font-black text-3xl text-[#2e3434]">{title}</Text>
        <View className="flex-row space-x-2 my-0">
          <View className="flex-row items-center space-x-1 pt-1.5">
            <Text className="text-base text-[#2c3534]">
              <Text className=""></Text>
              {delEstimate} • {genre}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-1">
          <Foundation name="star" size={19} color="#007f8c" />
          <Text className="text-[#007f8c] text-base">
            {rating} {rating2}
          </Text>
          <Text className="text-[#575b5e] text-base">
            {reviews} • {distance} • {closeTime} •
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

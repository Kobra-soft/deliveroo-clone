import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { Ionicons } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { setRestaurant } from "../features/restaurantSlice";
import { useDispatch } from "react-redux";
import ArrowLeftIcon from "../assets/arrow_left.svg";
import Heart from "../assets/heart.svg";
import Search from "../assets/search.svg";
import Info from "../assets/info.svg";
import ArrowRightIcon from "../assets/arrow_right.svg";
import Star from "../assets/star.svg";

const RestaurantScreen2 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      {
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
      }
      <ScrollView className="">
        <View className="flex-row rounded-t-md bg-white shadow">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            resizeMode="stretch"
            className="w-full h-[231] bg-gray-300"
          />

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute p-2 bg-gray-100 rounded-full ml-4 mt-[48]"
          >
            <ArrowLeftIcon width={24} height={25} fill="#00cebd" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              alert("Added to your favourites / ONPRESS SWITCH SVG COLOUR")
            }
            className="absolute p-2 bg-gray-100 rounded-full mt-[48] mx-60 left-1"
          >
            <Heart width={24} height={25} fill="#00cebd" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert("Implement MODAL SCREEN / INTENT")}
            className="absolute p-2 bg-gray-100 rounded-full mt-[48] mx-72 left-2"
          >
            <Ionicons name="share-social-outline" size={23} color="#00cebd" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Search2")}
            className="absolute p-2 bg-gray-100 rounded-full mt-[48] mx-80 left-7"
          >
            <Search width={24} height={25} fill="#00cebd" />
          </TouchableOpacity>
        </View>

        <View className="bg-white pt-3 pl-4 ">
          <Text
            style={{ fontFamily: "Stratos-SemiBold", fontSize: 28 }}
            className="text-[#2e3434] pb-[3.5]"
          >
            {title}
          </Text>
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 15.666 }}
            className=" text-[#2e3434]"
          >
            {delEstimate} · {genre}
          </Text>
        </View>
        <View className="flex-row space-x-1 mx-0 px-3 mr-0 bg-white">
          <View className="flex-row ml-1 space-x-1 bg-white items-center">
            <Star fill="#007f8c" width={19} />
            <Text
              style={{
                fontFamily: "ibm_regular",
                fontSize: 14.333,
              }}
              className=" text-[#007f8c] text-left"
            >
              {rating} {rating2}
              {""}
            </Text>
            <Text
              style={{
                fontFamily: "ibm_regular",
                fontSize: 14.333,
                /* lineHeight: 25, */
              }}
              className="text-[#585c5d] text-left"
            >
              {reviews} · {distance} · {closeTime}
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-1 px-3 mr-0 bg-white">
          <View className="flex-row ml-2 bg-white">
            <Text
              style={{
                fontFamily: "ibm_regular",
                fontSize: 14.333,
                /* lineHeight: 25, */
              }}
              className="text-[#585c5d] text-left"
            >
              £{delMinFee} minimum · £{delFee} delivery ·{" "}
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("AmazonPrime")}
            >
              <Text
                style={{
                  fontFamily: "ibm_regular",
                  fontSize: 14.333,
                  /*     lineHeight: 18, */
                }}
                className="text-[#00ccbc]"
              >
                Get free delivery
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          /* onPress={() => navigation.navigate("Info")} */
          className="bg-white flex-row items-center pl-4 pb-4 pt-4 justify-between"
        >
          <Info width={24} fill="#bbc3c5" />

          <View className="flex-1 bg-white mx-4 pt-1">
            <Text
              style={{
                fontFamily: "ibm_regular",
                fontSize: 16,
                /*                 lineHeight: 18, */
              }}
              className="text-[#2e3434]"
            >
              Info
            </Text>
            <Text
              style={{
                fontFamily: "ibm_regular",
                fontSize: 14,
                /*                 lineHeight: 18, */
              }}
              className="text-[#585c5b]"
            >
              Map, allergens and hygiene rating
            </Text>
          </View>
          <View className="pr-[16]">
            <ArrowRightIcon width={24} fill="#00cebd" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          /* onPress={() => alert("Implement MODAL SCREEN ")} */
          className="flex-row bg-white items-center pl-3 pt-2 pb-2.5 justify-between border-b border-gray-200"
        >
          <Image
            style={{ width: 34, height: 36, backgroundColor: "#ffffff" }}
            source={require("../assets/bikelogo.png")}
            resizeMode="stretch"
            className="ml-[0]"
          />

          {/* <View className="flex-1 bg-red-400 mx-4 pt-1"> */}

          <View className="flex-1 bg-white mx-3 pt-1 bottom-1">
            <Text
              style={{ fontFamily: "ibm_regular", fontSize: 15.666 }}
              className="text-[#2e3434]"
            >
              Deliver in {delEstimate}
            </Text>
          </View>
          <View className="pr-[16]">
            <Text
              style={{ fontFamily: "ibm_regular", fontSize: 16 }}
              className="text-[#00cebd] bottom-1"
            >
              Change
            </Text>
          </View>
        </TouchableOpacity>

        <View className="bg-[#f9fbfa] pt-5 pl-4 border-b border-gray-200">
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 14 }}
            className=" text-[#585c5b]"
          >
            Allergen and Nutritional Information can be found on our website
          </Text>
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 14 }}
            className=" text-[#585c5b]"
          >
            https://www.restaurant/nutrition-allergens?close
          </Text>
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 14 }}
            className=" text-[#585c5b] pt-6"
          >
            Adults need around 2000 kcal a day
          </Text>
          <Text
            style={{
              fontFamily: "ibm_bold",
              fontSize: 18.666,
            }}
            className="text-[#2e3434] pt-7"
          >
            Menu
          </Text>
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 13.888 }}
            className=" text-[#2e3434] pb-0"
          >
            {/* Below is a selection of some of the best items the restaurant has to
            offer. With calorie information available (kcal). */}
          </Text>
        </View>

        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
            kcal={dish.kcal}
            popular={dish.popular}
          />
        ))}

        <View className="pb-[87]"></View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen2;

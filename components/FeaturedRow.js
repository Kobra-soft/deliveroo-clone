import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
import ArrowRightIcon from "../assets/arrow_right.svg";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    * [_type == "featured" && _id == $id] {
    ...,
        restaurants[] -> {
          ...,
          dishes[] ->,
          type-> {
            name
          }
        },
      }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  /* ADD ABOVE 0 TO ARRAY AS ITS ID IS A DEPENDENCY ARRAY */

  /*   console.log(restaurants); */

  return (
    <View className="bg-[#f9fbfa] pb-5 pl-0 pr-0 mr-0">
      <View className="flex-row items-center justify-between pl-0 mx-4">
        <Text
          style={{ fontFamily: "ibm_bold", fontSize: 18 }}
          className="text-[#2E3333]"
        >
          {title}
        </Text>
        <TouchableOpacity>
          <ArrowRightIcon width={24} fill="#00cebd" />
        </TouchableOpacity>
      </View>

      <Text
        style={{ fontFamily: "ibm_regular", fontSize: 14 }}
        className=" text-[#585c5d] px-4 opacity-100"
      >
        {description}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingRight: 9,
          paddingLeft: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-2.5"
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            delEstimate={restaurant.delEstimate}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            rating2={restaurant.rating2}
            reviews={restaurant.reviews}
            distance={restaurant.distance}
            closeTime={restaurant.closeTime}
            delMinFee={restaurant.delMinFee}
            delFee={restaurant.delFee}
            short_description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

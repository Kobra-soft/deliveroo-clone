import { ScrollView } from "react-native";
import React from "react";
import AdvertCard from "./AdvertCard";

const Adverts = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 15,
        paddingLeft: 16,
        paddingRight: 7,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <AdvertCard
        imgUrl="https://i.ibb.co/K23MGBb/advert1b.png"
        title="Advert 1"
      />
      <AdvertCard
        imgUrl="https://i.ibb.co/0hbqDw1/grocery.png"
        title="Advert 2"
      />
    </ScrollView>
  );
};

export default Adverts;

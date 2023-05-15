import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 12,
        paddingLeft: 16,
        paddingRight: 7,
        paddingBottom: 7,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      col
    >
      <CategoryCard
        imgUrl="https://i.ibb.co/Z6qM9J5/grocery.png"
        title="Grocery"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/T0cBGJr/offers.png"
        title="Offers"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/qmM52pp/burgers-2.png"
        title="Burgers"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/CPm6vjp/chicken-wings.png"
        title="Chicken"
      />
      <CategoryCard imgUrl="https://i.ibb.co/Ld812gJ/pizza.png" title="Pizza" />

      <CategoryCard
        imgUrl="https://i.ibb.co/v4BhR1L/chinese.png"
        title="Chinese"
      />
      <CategoryCard imgUrl="https://i.ibb.co/0FBdG41/asian.png" title="Asian" />
      <CategoryCard
        imgUrl="https://i.ibb.co/nM3hfRD/pasta.png"
        title="Italian"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/CmcVV7g/dessert.png"
        title="Dessert"
      />
      <CategoryCard imgUrl="https://i.ibb.co/FYCJjrG/thai.png" title="Thai" />
      <CategoryCard
        imgUrl="https://i.ibb.co/kgxTnfc/indian.png"
        title="Indian"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/CQtjf6W/healthy.png"
        title="Healthy"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/7W5KtQf/breakfast.png"
        title="Breakfast"
      />
    </ScrollView>
  );
};

export default Categories;

import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

/* import CurrencyFormat from "react-currency-format"; */
/* import Currency from "react-currency-format"; */
/* import Currency from "react-currency-formatter-v2"; */



const DishRow = ({ id, name, description, price, image, kcal, popular }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(
      addToBasket({ id, name, description, price, image, kcal, popular })
    );
  };

  /*   When at 0 disables button!!! */
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <View className="bg-white">
        <TouchableOpacity
          // setIspressed to the opposite of pressed
          onPress={() => setIsPressed(!isPressed)}
          className={`bg-white ${isPressed && "border-white"}`}
        >
          <View className="flex-row mx-4 pt-3 pb-3 bg-white border-b border-gray-200">
            <View className="flex-1 pr-0">
              <Text
                style={{ fontFamily: "ibm_bold", fontSize: 17 }}
                className="mb-1 text-[#2e3434]"
              >
                {name}
              </Text>
              <Text
                numberOfLines={2}
                style={{ fontFamily: "ibm_regular", fontSize: 14 }}
                className=" mb-1 text-[#585c5b] pr-4"
              >
                {description}
              </Text>
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 14 }}
                className=" mb-1 text-[#585c5b]"
              >
                {kcal}
              </Text>
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 14 }}
                className=" mb-1 text-[#585c5b]"
              >
                {/* £{price}  */}
                {/* <Currency quantity={price} currency="GBP" /> */}
                <Currency quantity={price} currency="GBP" />

                <Text
                  style={{ fontFamily: "ibm_regular", fontSize: 14 }}
                  className="text-[#ff8f20] mb-1"
                >
                  {" "}
                  {popular}
                </Text>
              </Text>
            </View>
            <View className="pt-1 pr-0">
              <Image
                source={{
                  uri: urlFor(image).url(),
                }}
                className="h-[88] w-[85] rounded"
                resizeMode="stretch"
              />
            </View>
          </View>
        </TouchableOpacity>

        {isPressed && (
          <View className="bg-[#f9fbfa61] border-b border-gray-400 border-dotted">
            <View className="mx-4 flex-row items-center space-x-3 pb-3.5 pt-3.5 justify-center">
              <TouchableOpacity
                disabled={!items.length}
                onPress={removeItemFromBasket}
              >
                <AntDesign
                  name="minuscircleo"
                  size={28}
                  /* if theres items in the basket then colour is green, if not then gray! */
                  color={items.length > 0 ? "#00cebd" : "gray"}
                />
              </TouchableOpacity>

              <Text
                style={{ fontFamily: "Stratos-Medium", fontSize: 17 }}
                className="text-[#585c5b] text-center"
              >
                {items.length}
              </Text>
              <TouchableOpacity onPress={addItemToBasket}>
                <AntDesign name="pluscircleo" size={28} color="#00cebd" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </>
  );
};
export default DishRow;

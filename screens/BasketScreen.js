import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { urlFor } from "../sanity";
import { Ionicons } from "@expo/vector-icons";
import ArrowLeftIcon from "../assets/arrow_left.svg";
/* import Currency from "react-currency-formatter-v2"; */
// REPLACE with modern CurrencyFormat for higher SDK COMPATIBILITY

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  /*   console.log(groupedItemsBasket); */

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <View className="flex-1 bg-gray-100">
        <View className="p-3 pb-5 border-b border-[#00cebd] bg-[#ffffff] shadow-xs">
          <View>
            <Text
              style={{ fontFamily: "Stratos-SemiBold", fontSize: 28 }}
              className="text-[#2E3333] text-center"
            >
              Basket
            </Text>
            {/* <Text
              className="text-center text-[#ffffff]"
              style={{ fontFamily: "Stratos-Light", fontSize: 18 }}
            >
              {restaurant.title}
            </Text> */}
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-[#f9fbfa] absolute top-0 my-3 p-2 mx-4"
          >
            <ArrowLeftIcon
              width={24}
              fill="#00cebd"
              onPress={navigation.goBack}
            />
            {/* <Ionicons name="trash-outline" size={28} color="#00cebd" /> */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-[#f9fbfa] absolute top-0 my-2 right-0 p-2 mx-4"
          >
            {/* <CrossIcon width={24} fill="#ffffff" onPress={navigation.goBack} /> */}
            <Ionicons name="trash-outline" size={28} color="#00cebd" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            style={{ width: 36, height: 36, backgroundColor: "#ffffff" }}
            source={require("../assets/bikelogo.png")}
            resizeMode="stretch"
            className="top-[2]"
          />
          <Text
            style={{ fontFamily: "ibm_regular", fontSize: 16 }}
            className="flex-1 text-[#2e3434]"
          >
            Deliver in 50-75 min
          </Text>
          <TouchableOpacity>
            <Text
              style={{ fontFamily: "ibm_regular", fontSize: 16 }}
              className="text-[#00cebd] text-center"
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-300 mb-5">
          {Object.entries(groupedItemsBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text
                className="text-[#00CCBB]"
                style={{ fontFamily: "ibm_regular", fontSize: 15.666 }}
              >
                {items.length} x
              </Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text
                className="flex-1 text-[#2E3333]"
                style={{ fontFamily: "ibm_semibold", fontSize: 13.666 }}
              >
                {items[0]?.name}
              </Text>

              <Text
                className="text-[#2E3333]"
                style={{ fontFamily: "ibm_light", fontSize: 13.666 }}
              >
                £{items[0]?.price}
              </Text>

              <TouchableOpacity>
                <Text
                  style={{ fontFamily: "ibm_regular", fontSize: 16 }}
                  className="text-[#00cebd] text-center left-1"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white space-y-4 border-t border-[#00cebd]">
          <View className="flex-row justify-between">
            <Text
              className="text-[#717272]"
              style={{ fontFamily: "ibm_light", fontSize: 15.666 }}
            >
              Subtotal
            </Text>
            <Text
              className="text-[#2E3333]"
              style={{ fontFamily: "ibm_light", fontSize: 14.666 }}
            >
              {/* £{basketTotal} */}
              {/* <Currency quantity={basketTotal} currency="GBP" /> */}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text
              className="text-[#717272]"
              style={{ fontFamily: "ibm_light", fontSize: 15.666 }}
            >
              Delivery fee
            </Text>
            <Text
              className="text-[#2E3333]"
              style={{ fontFamily: "ibm_light", fontSize: 14.666 }}
            >
              £2.99
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text
              className="text-[#2E3333]"
              style={{ fontFamily: "ibm_semibold", fontSize: 15.666 }}
            >
              Order Total
            </Text>
            <Text
              className="text-[#2E3333]"
              style={{ fontFamily: "ibm_semibold", fontSize: 15.666 }}
            >
              {/* £{basketTotal + 2.99} */}
              {/* <Currency quantity={basketTotal + 2.99} currency="GBP" /> */}
            </Text>
          </View>

          <TouchableOpacity
            onPressIn={() => navigation.navigate("PreparingOrderScreen")}
            className="rounded-lg bg-[#00cebd] p-4"
          >
            <Text
              className="text-[#ffffff] text-center"
              style={{ fontFamily: "ibm_bold", fontSize: 15 }}
            >
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

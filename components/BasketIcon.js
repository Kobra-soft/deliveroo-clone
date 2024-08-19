import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
/* import Currency from "react-currency-formatter-v2"; */
// REPLACE with modern CurrencyFormat for higher SDK COMPATIBILITY

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  //if no items selected + then no bottom button showed for view basket icon
  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-0 pl-2 pr-2 pt-3 pb-3 w-full z-50 bg-white border-t border-t-gray-100">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-1.5 bg-[#00cebd] p-2.5 rounded-md flex-row items-center justify-between"
      >
        <Text
          className="text-[#ffffff] text-center rounded-sm bg-[#01a297d5] py-1.5 px-3"
          style={{ fontFamily: "ibm_semibold", fontSize: 15 }}
        >
          {items.length}
        </Text>
        <Text
          className="text-[#ffffff] text-center"
          style={{ fontFamily: "ibm_bold", fontSize: 15 }}
        >
          View basket
        </Text>
        <Text
          className="text-[#ffffff]"
          style={{ fontFamily: "ibm_semibold", fontSize: 15 }}
        >
          {/* £{basketTotal}  */}
          {/* <Currency quantity={basketTotal} currency="GBP" /> */}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;

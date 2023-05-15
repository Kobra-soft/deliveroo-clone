import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";

const DrinkRow = ({ id, name, description, price, image, kcal, popular }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      {/*  DELETE!!! */}
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="bg-white"
      >
        <View className="flex-row  pl-[17] border-b-2 border-gray-200 pt-3 pb-3">
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
              className=" mb-1 text-[#585c5b] pr-2"
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
              £{price} {/* <CurrencyFormat format={price} /> */}
              <Text
                style={{ fontFamily: "ibm_regular", fontSize: 14 }}
                className="text-[#ff8f20] mb-1"
              >
                {popular}
              </Text>
            </Text>
          </View>
          <View className="pt-1 pr-4">
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-[80] w-[85]"
              resizeMode="stretch"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className=" px-4">
          <View className="flex-row items-center space-x-2 pb-3 pt-3">
            <TouchableOpacity>
              <AntDesign name="minuscircleo" size={22} color="#00ccbc" />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <AntDesign name="pluscircleo" size={22} color="#00ccbc" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DrinkRow;

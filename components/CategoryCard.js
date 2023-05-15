import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title, source }) => {
  return (
    <TouchableOpacity className="relative mr-[8]">
      <Image
        source={{ uri: imgUrl }}
        className="h-[48] w-[72]
       rounded-t"
      />
      <Text
        style={{ fontFamily: "ibm_regular", fontSize: 11.666 }}
        className="text-[#000000] bg-white rounded-b pt-1 pb-1 pl-[6] border-l border-r border-b border-[#e2e4e3]"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

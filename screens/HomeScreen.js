import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import Options from "../assets/optionsicon.svg";
import Chevron from "../assets/chevron.svg";
import User from "../assets/user.svg";
import Search from "../assets/search.svg";
import Heart from "../assets/heart.svg";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            * [_type == "featured"] {
              ...,
              restaurants[] -> {
                ...,
                dishes[] ->
              }
            }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  /* 
  console.log(featuredCategories); */

  const shadowStyle = {
    shadowOpacity: 1,
  };

  return (
    <SafeAreaView className="bg-white">
      {
        <StatusBar
          transparent
          backgroundColor="#ffffff"
          barStyle="dark-content"
        />
      }
      <View className="flex-row pb-2.5 items-center ml-4 space-x-2 pt-1">
        <Image
          style={{ width: 36, height: 36, backgroundColor: "#ffffff" }}
          source={require("../assets/bikelogo4.png")}
          resizeMode="stretch"
          className="top-[2]"
        />
        <View className="flex-col space-y-reverse space-y-0">
          <Text
            style={{
              fontFamily: "ibm_regular",
              fontSize: 13.666,
            }}
            className=" text-[#ABADAC] top-[2] "
          >
            Delivery • Now
          </Text>
          <Text
            style={{ fontFamily: "ibm_bold", fontSize: 18 }}
            className=" text-[#2E3333] bottom-[1]"
          >
            Selected location
          </Text>
        </View>

        <View className={"flex-1 pt-5"}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Chevron width={18} fill="#00cebd" />
          </TouchableOpacity>
        </View>

        <View className="flex-row mr-2 top-2">
          <View className="flex-row space-x-4">
            <TouchableOpacity
              className="p-3 rounded-full bg-[#f9fbfa]"
              onPress={() => navigation.navigate("Favourites")}
            >
              <Heart width={24} fill="#00cebd" />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-3 rounded-full bg-[#f9fbfa]"
              onPress={() => navigation.navigate("Account")}
            >
              <User width={24} fill="#00cebd" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center space-x-2 pb-0 pl-4">
          <View className="flex-row flex-1 space-x-2 bg-[#f3f5f4] p-3 items-center rounded-b rounded-t">
            <Search width={18} fill="#b9c3c4" />
            <TextInput
              onPressIn={() => navigation.navigate("Search")}
              style={{
                fontFamily: "ibm_regular",
                fontSize: 15.666,
              }}
              placeholder="Restaurants, groceries, dishes "
              keyboardType="default"
              placeholderTextColor="#abadac"
            />
          </View>
          <TouchableOpacity
            className="p-3 rounded-full bg-white mx-2"
            onPress={() => navigation.navigate("Filters")}
          >
            <Options
              size={24}
              fill="#00cebd"
              className="p-3 rounded-full bg-[#f9fbfa]"
            />
          </TouchableOpacity>
        </View>

        <SingleSidedShadowBox style={{ width: "100%", height: 16 }}>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              shadowColor: "black",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 2.4,
              shadowRadius: 3,
              elevation: 6,
            }}
          />
        </SingleSidedShadowBox>

        {/*  BODY */}
        <ScrollView
          className="bg-[#f9fbfa]"
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <Categories />

          <ScrollView
            className="bg-[#f9fbfa]"
            contentContainerStyle={{
              paddingTop: 7,
              paddingLeft: 16,
              paddingRight: 7,
              paddingBottom: 22,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("AmazonPrime")}
            >
              <View>
                <Image
                  source={require("../assets/Adv1Fullsize.jpg")}
                  alt="Advert 1"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image
                  source={require("../assets/Adv2Fullsize.jpg")}
                  alt="Advert 2"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image
                  source={require("../assets/Adv3Fullsize.jpg")}
                  alt="Advert 3"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image
                  source={require("../assets/Adv4Fullsize.jpg")}
                  alt="Advert 4"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image
                  source={require("../assets/Adv5Fullsize.jpg")}
                  alt="Advert 5"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image
                  source={require("../assets/Adv6Fullsize.jpg")}
                  alt="Advert 6"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image
                  source={require("../assets/Adv7Fullsize.jpg")}
                  alt="Advert 7"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image
                  source={require("../assets/Adv8Fullsize.jpg")}
                  alt="Advert 8"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                alert(
                  "Opens INTENT / MODAL (Email, Gmail) \n\nkobra.soft01@gmail.com"
                )
              }
            >
              <View>
                <Image
                  source={require("../assets/AdvKobraSoftFullsize10.png")}
                  alt="Advert 2b"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity>
            {/*  <TouchableOpacity
              onPress={() =>
                alert(
                  "Opens INTENT / MODAL (Email, Gmail) \n\nkobra.soft01@gmail.com"
                )
              }
            >
              <View>
                <Image
                  source={require("../assets/AdvKobraSoftFullsize11.png")}
                  alt="Advert 2b"
                  style={styles.scrollViewHorz}
                />
              </View>
            </TouchableOpacity> */}
          </ScrollView>

          {/* FEATURED ROWS */}
          {/*           <FeaturedRow
            id="ID=123"
            title="Featured"
            description="paid placements from our partners"
          />
          <FeaturedRow
            id="ID=1234"
            title="Featured2"
            description="paid placements from our partners2"
          />
          <FeaturedRow
            id="ID=12345"
            title="Featured3"
            description="paid placements from our partners3"
          /> */}

          {/* FEATURED ROWS - (Mapped) */}
          {featuredCategories?.map((category) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const SingleSidedShadowBox = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

SingleSidedShadowBox.propTypes = {
  children: PropTypes.element,
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    paddingBottom: 5,
  },
  scrollViewHorz: {
    width: 362,
    height: 180,
    marginRight: 8,
    borderRadius: 4,
  },
  scrollViewHorz3: {
    width: 280,
    height: 180,
    marginRight: 7,
    borderRadius: 6,
  },
  scrollViewHorzBottom: {
    width: 380,
    height: 190,
    marginBottom: 15,
    marginRight: 0,
    borderRadius: 4,
    resizeMode: "stretch",
  },
});

export default HomeScreen;

import { View, Text, StatusBar } from "react-native";
import { React, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 4000);
  }, []);

  return (
    <>
      {
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      }
      <SafeAreaView className="bg-[#00cebd] flex-1 justify-center items-center">
        <Animatable.Image
          source={require("../assets/orderLoading.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="h-96 w-96"
        />

        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          className="text-lg my-10 text-white font-bold text-center"
        >
          Waiting for restaurant to accept your order!
        </Animatable.Text>

        <Progress.Circle size={60} indeterminate={true} color="white" />
      </SafeAreaView>
    </>
  );
};

export default PreparingOrderScreen;

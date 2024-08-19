import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
// DELETE RESTAURANT SCREEN IMPORT used for testing
/* import RestaurantScreen from "./screens/RestaurantScreen"; */
import RestaurantScreen2 from "./screens/RestaurantScreen2";
import AccountScreen from "./screens/AccountScreen";
import InfoScreen from "./screens/InfoScreen";
import SearchScreen from "./screens/SearchScreen";
import AmazonPrimeScreen from "./screens/AmazonPrimeScreen";
import BasketScreen from "./screens/BasketScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import NextScreenTemplate from "./screens/NextScreenTemplate";
import FiltersScreen from "./screens/FiltersScreen";
import SortScreen from "./screens/SortScreen";
import HygieneScreen from "./screens/HygieneScreen";
import OffersScreen from "./screens/OffersScreen";
import DietaryScreen from "./screens/DietaryScreen";
import LoginScreen from "./screens/LoginScreen";
import OrdersScreen from "./screens/OrdersScreen";
import AccountDetailsScreen from "./screens/AccountDetailsScreen";
import RewardsScreen from "./screens/RewardsScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PaymentMethodScreen2 from "./screens/PaymentMethodScreen2";
import PaymentMethodScreen3 from "./screens/PaymentMethodScreen3";
import VouchersCreditScreen from "./screens/VouchersCreditScreen";
import AddressesScreen from "./screens/AddressesScreen";
import AddressesScreen2 from "./screens/AddressesScreen2";
import AddressesScreen3 from "./screens/AddressesScreen3";
import AddressesScreen4 from "./screens/AddressesScreen4";
import ContactPreferencesScreen from "./screens/ContactPreferencesScreen";
import CustomiseAppScreen from "./screens/CustomiseAppScreen";
import SearchScreen2 from "./screens/SearchScreen2";
import AboutOurAppScreen from "./screens/AboutOurAppScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

import {
  IBMPlexSans_100Thin,
  IBMPlexSans_200ExtraLight,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";
import { AnnieUseYourTelescope_400Regular } from "@expo-google-fonts/annie-use-your-telescope";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, error] = useFonts({
    ibm_thin: IBMPlexSans_100Thin,
    ibm_extralight: IBMPlexSans_200ExtraLight,
    ibm_light: IBMPlexSans_300Light,
    ibm_regular: IBMPlexSans_400Regular,
    ibm_medium: IBMPlexSans_500Medium,
    ibm_semibold: IBMPlexSans_600SemiBold,
    ibm_bold: IBMPlexSans_700Bold,
    annie_reg: AnnieUseYourTelescope_400Regular,
    "Stratos-Black": require("./assets/fonts/Stratos-Black.otf"),
    "Stratos-Bold": require("./assets/fonts/Stratos-Bold.otf"),
    "Stratos-ExtraBold": require("./assets/fonts/Stratos-ExtraBold.otf"),
    "Stratos-ExtraLight": require("./assets/fonts/Stratos-ExtraLight.otf"),
    "Stratos-Light": require("./assets/fonts/Stratos-Light.otf"),
    "Stratos-Medium": require("./assets/fonts/Stratos-Medium.otf"),
    "Stratos-Regular": require("./assets/fonts/Stratos-Regular.otf"),
    "Stratos-SemiBold": require("./assets/fonts/Stratos-SemiBold.otf"),
    "Stratos-SemiLight": require("./assets/fonts/Stratos-SemiLight.otf"),
    "Stratos-Thin": require("./assets/fonts/Stratos-Thin.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen name="Restaurant" component={RestaurantScreen} /> */}
          <Stack.Screen name="Restaurant2" component={RestaurantScreen2} />
          <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Filters"
            component={FiltersScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Search2"
            component={SearchScreen2}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AmazonPrime"
            component={AmazonPrimeScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OrdersScreen"
            component={OrdersScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AccountDetailsScreen"
            component={AccountDetailsScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RewardsScreen"
            component={RewardsScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PaymentMethodScreen"
            component={PaymentMethodScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PaymentMethodScreen2"
            component={PaymentMethodScreen2}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PaymentMethodScreen3"
            component={PaymentMethodScreen3}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="VouchersCreditScreen"
            component={VouchersCreditScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddressesScreen"
            component={AddressesScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddressesScreen2"
            component={AddressesScreen2}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddressesScreen3"
            component={AddressesScreen3}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddressesScreen4"
            component={AddressesScreen4}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ContactPreferencesScreen"
            component={ContactPreferencesScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CustomiseAppScreen"
            component={CustomiseAppScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Favourites"
            component={FavouritesScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NextScreenTemplate"
            component={NextScreenTemplate}
          />
          <Stack.Screen
            name="SortScreen"
            component={SortScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HygieneScreen"
            component={HygieneScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OffersScreen"
            component={OffersScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DietaryScreen"
            component={DietaryScreen}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="AboutOurAppScreen"
            component={AboutOurAppScreen}
            options={{ presentation: "containedModal", headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="DeliveryScreen"
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

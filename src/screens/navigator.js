import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native";
import { useGlobal } from "../utils/GlobalContext.js";
import Splash from "./splash/index.js";
import Login from "./login/index.js";
import Register from "./register/index.js";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Nagivator = () => {
  const global = useGlobal();
  // use fade animation when leaving splash screen
  const [enableFade, setEnableFade] = useState(true);
  const [currentRouteName, setCurrentRouteName] = useState("Splash");

  useEffect(() => {
    if (!global.showSplash) {
      setTimeout(() => {
        setEnableFade(false);
      }, 1000);
    } else {
      setEnableFade(true);
    }
  }, [global.showSplash, setEnableFade]);

  return (
    <NavigationContainer
      onStateChange={(state) => {
        const route = state.routes[state.index];
        setCurrentRouteName(route.name);
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            currentRouteName === "Splash" || currentRouteName === "Login"
              ? "#FFFFFF"
              : "#FD8349",
        }}
      >
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            ...(enableFade && {
              cardStyleInterpolator: forFade,
            }),
          }}
        >
          {global.showSplash && (
            <Stack.Screen name="Splash" component={Splash} />
          )}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Register"
            component={Register}
            options={({ navigation }) => ({
              headerShown: true,
              headerStyle: {
                backgroundColor: "#FD8349",
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={30}
                    color="white"
                    style={{ marginLeft: 10 }}
                  />
                </TouchableOpacity>
              ),
              headerTitle: () => (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Register
                  </Text>
                </View>
              ),
              headerTitleAlign: "center",
            })}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Nagivator;

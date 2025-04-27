import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native";
import { useGlobal } from "../utils/GlobalContext.js";
import Splash from "./splash/index.js";
import Login from "./login/index.js";

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
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
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
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Nagivator;

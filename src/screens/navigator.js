import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native";
import { useGlobal } from "../utils/GlobalContext.js";
import Splash from "./splash/index.js";
import Login from "./login/index.js";
import Register from "./register/index.js";
import Home from "./home/index.js";
import Profile from "./profile/index.js";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIconWrapper = ({ children, focused }) => (
  <View
    style={{
      backgroundColor: focused ? "#FD8349" : "transparent",
      borderRadius: 12,
      padding: 1,
      width: 70,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </View>
);

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#FD8349",
          },
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
                  fontSize: 22,
                  fontFamily: 'TANHeadline'
                }}
              >
                Ne Yesem?
              </Text>
            </View>
          ),
          headerTitleAlign: "center",
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              android_ripple={null}
              android_disableSound={true}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIconWrapper focused={focused}>
              {focused ? (
                <Ionicons name="home" size={25} />
              ) : (
                <Ionicons name="home-outline" size={25} />
              )}
            </TabBarIconWrapper>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#FD8349",
          },
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
                  fontSize: 22,
                  fontFamily: 'TANHeadline'
                }}
              >
                Ne Yesem?
              </Text>
            </View>
          ),
          headerTitleAlign: "center",
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              android_ripple={null}
              android_disableSound={true}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIconWrapper focused={focused}>
              {focused ? (
                <Ionicons name="person" size={25} />
              ) : (
                <Ionicons name="person-outline" size={25} />
              )}
            </TabBarIconWrapper>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
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

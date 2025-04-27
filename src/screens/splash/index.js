import { SafeAreaView, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useGlobal } from "../../utils/GlobalContext";
import scaleByHeight from "../../utils/ScaleByHeight.js";

const Splash = () => {
  const global = useGlobal();

  useEffect(() => {
    const hideSplash = setTimeout(() => {
      global.setShowSplash(false);
    }, 1000);
    return () => {
      clearInterval(hideSplash);
    };
  }, [global]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={require("../../assets/splash.png")}
        style={{
          width: scaleByHeight(45),
          height: scaleByHeight(45),
          alignSelf: "center",
        }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default Splash;

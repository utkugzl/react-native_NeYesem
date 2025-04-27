import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import Nagivator from "./src/screens/navigator.js";
import { GlobalProvider } from "./src/utils/GlobalContext.js";
import { theme } from "./src/utils/theme.js";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    TANHeadline: require("./src/assets/fonts/tan_headline.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <GlobalProvider>
        <Nagivator />
      </GlobalProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import Nagivator from "./src/screens/navigator.js";
import { GlobalProvider } from "./src/utils/GlobalContext.js";

export default function App() {
  return (
    <PaperProvider>
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

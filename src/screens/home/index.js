import { View, FlatList, Image } from "react-native";
import { Text, Surface } from "react-native-paper";

const Home = () => {
  const foods = [
    { id: "1", name: "Pizza", icon: require("../../assets/foods/pizza.png") },
    {
      id: "2",
      name: "Burger",
      icon: require("../../assets/foods/hamburger.png"),
    },
    { id: "3", name: "Test 1" },
    { id: "4", name: "Test 2" },
    { id: "5", name: "Test 3" },
    { id: "6", name: "İçecek", icon: require("../../assets/foods/icecek.png") },
    { id: "7", name: "Tatlı", icon: require("../../assets/foods/tatlı.png") },
  ];

  const renderItem = ({ item }) => (
    <Surface
      style={{
        padding: 8,
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
        borderRadius: 8,
        backgroundColor: "white",
      }}
      elevation={2}
    >
      <Image
        source={item.icon}
        style={{
          width: 60,
          height: 60,
          marginBottom: 0,
        }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 14, textAlign: "center" }}>{item.name}</Text>
    </Surface>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Home;

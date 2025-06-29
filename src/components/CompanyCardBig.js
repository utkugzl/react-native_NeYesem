import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CompanyCardBig = ({ item }) => {
  const navigation = useNavigation();
  console.log("CompanyCardBig item:", item.image);

  const companyImages = {
    "pizza-hut.jpg": require("../assets/companies/pizza-hut.jpg"),
    "mc-donalds": require("../assets/companies/mc-donalds.jpg"),
    "dominos": require("../assets/companies/dominos.jpg"),
    "starbucks": require("../assets/companies/starbucks.jpg"),
    "simit-sarayı": require("../assets/companies/simit-sarayı.jpg"),
    "sushico": require("../assets/companies/sushico.jpg"),
    "yildiz-pastanesi": require("../assets/companies/yildiz-pastanesi.jpeg"),
    "burger-king": require("../assets/companies/burger-king.jpg"),
    "kahve-dunyasi": require("../assets/companies/kahve-dunyasi.webp"),
    "kfc": require("../assets/companies/kfc.jpg"),
    "cook-time": require("../assets/companies/cook-time.jpeg"),
    "tavuk-dunyasi": require("../assets/companies/tavuk-dunyasi.webp"),
    "little-caesars": require("../assets/companies/little-caesars.jpg"),
    "popeyes": require("../assets/companies/popeyes.jpg"),
    "sushi-house": require("../assets/companies/sushi-house.jpg"),
    "edeler": require("../assets/companies/edeler.webp"),
    "dondurma": require("../assets/companies/dondurma.webp"),
    "mado": require("../assets/companies/mado.webp"),
  };
  return (
    <Card
      style={{
        backgroundColor: "white",
        borderRadius: 8,
        width: 200,
        marginHorizontal: 12,
      }}
      onPress={() => {
        navigation.navigate("CompanyDetail", {
          company: item,
        });
      }}
    >
      <View style={{ position: "relative" }}>
        <Card.Cover
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          source={companyImages[item.image]}
          //source={companyImages[item.image] || require("../assets/companies/default.jpg")}
        />

        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            backgroundColor: "rgba(0,0,0,0.4)",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="location"
            size={20}
            style={{
              marginRight: 2,
              color: "white",
            }}
          />
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {item.distance} km
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "white",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#FD8349", fontWeight: "bold" }}>
            ⭐ {item.star} Puan
          </Text>
        </View>
      </View>

      <Card.Content>
        <Text
          style={{ fontSize: 18, marginTop: 8 }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.name}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default CompanyCardBig;

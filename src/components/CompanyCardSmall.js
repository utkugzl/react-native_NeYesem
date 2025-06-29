import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CompanyCardSmall = ({ item }) => {
  const navigation = useNavigation();

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
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("CompanyDetail", {
          company: item,
        });
      }}
      style={{
        width: "90%",
        height: 100,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 8,
        flexDirection: "row",
        padding: 8,
        alignItems: "center",
        marginVertical: 8,
      }}
    >
      <View
        style={{
          flex: 1,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={companyImages[item.image]}
          style={{
            width: "90%",
            height: 80,
            borderRadius: 8,
          }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: "white",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginBottom: 4,
              paddingLeft: 8,
              flexShrink: 1,
            }}
            numberOfLines={3}
          >
            {item.name}
          </Text>

          <View
            style={{
              backgroundColor: "#FD8349",
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 6,
              alignSelf: "flex-start",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              ⭐ {item.star} Puan
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="location"
              size={20}
              style={{
                color: "#FD8349",
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "gray",
              }}
            >
              {item.distance} km
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CompanyCardSmall;

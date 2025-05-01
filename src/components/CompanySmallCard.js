import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CompanySmallCard = ({ item }) => {
  const navigation = useNavigation();
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
          source={{ uri: item.image }}
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

export default CompanySmallCard;

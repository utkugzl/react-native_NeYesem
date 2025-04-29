import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const CompanySmallCard = () => {
  return (
    <Card
      style={{
        backgroundColor: "white",
        borderRadius: 8,
        width: 200,
        marginHorizontal: 12,
      }}
    >
      <View style={{ position: "relative" }}>
        <Card.Cover
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          source={{ uri: "https://picsum.photos/300/300" }}
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
          <Text style={{ color: "#fff", fontWeight: "bold" }}>2.8 km</Text>
        </View>

        <View
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(0,0,0,0.4)",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>⭐ 4.5 Puan</Text>
        </View>
      </View>

      <Card.Content>
        <Text
          style={{ fontSize: 18, marginTop: 8 }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Restoran İsmi
        </Text>
      </Card.Content>
    </Card>
  );
};

export default CompanySmallCard;

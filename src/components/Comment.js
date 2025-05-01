import React from "react";
import { View, Text } from "react-native";
import { Card, Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const Comment = () => {
  const filledStars = Math.floor(Math.random() * 6);
  const emptyStars = 5 - filledStars;
  return (
    <Card
      style={{
        margin: 10,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
        }}
      >
        <Avatar.Icon
          size={50}
          icon="account"
          style={{ backgroundColor: "#eee", marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 4,
            }}
          >
            Test User
          </Text>
          <View style={{ flexDirection: "row" }}>
            {[...Array(filledStars)].map((_, i) => (
              <Ionicons
                key={`filled-${i}`}
                name="star"
                size={18}
                color="#FD8349"
              />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
              <Ionicons key={`empty-${i}`} name="star" size={18} color="#ccc" />
            ))}
          </View>
        </View>
      </View>

      <Card.Content>
        <Text style={{ fontSize: 14, color: "#333" }}>asdasda</Text>
      </Card.Content>
    </Card>
  );
};

export default Comment;

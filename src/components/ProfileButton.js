import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileButton = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          padding: 12,
        }}
      >
        <Ionicons
          name={iconName}
          size={20}
          style={{
            alignSelf: "center",
            marginHorizontal: 8,
            color: "#FD8349",
          }}
        />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 8,
          }}
        >
          {text}
        </Text>
      </View>
      <Ionicons
        name="chevron-forward"
        size={20}
        style={{
          alignSelf: "center",
          marginRight: 12,
          color: "#FD8349",
        }}
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;

import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CompanyCardSmall = () => {
  return (
    <View
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
          source={{ uri: "https://picsum.photos/300/300" }}
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
            Company Name
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
              ⭐ 4.5 Puan
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
              2.4 km
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CompanyCardSmall;

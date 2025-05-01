import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CompanyCardSmall = ({ item }) => {
  const navigation = useNavigation();
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
          source={{ uri: item.image }}
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

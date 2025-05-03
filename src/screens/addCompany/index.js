import React from "react";
import { useState, useEffect } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text, IconButton } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

const AddCompany = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Galeriye erişim izni iste
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Galeriye erişim izni gerekiyor!");
      return;
    }

    // Görsel seçme
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Eğer iptal edilmediyse, resmi kaydet
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <View
        style={{
          width: "80%",
          height: 150,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {image ? (
          <>
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
              resizeMode="cover"
            />
            <IconButton
              icon="close"
              mode="contained"
              size={20}
              containerColor="white"
              iconColor="black"
              onPress={() => setImage(null)}
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                elevation: 3,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
              }}
            />
          </>
        ) : (
          <>
            {/* Köşe çizgileri */}
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 15,
                height: 2,
                backgroundColor: "grey",
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 2,
                height: 15,
                backgroundColor: "grey",
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 15,
                height: 2,
                backgroundColor: "grey",
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 2,
                height: 15,
                backgroundColor: "grey",
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 15,
                height: 2,
                backgroundColor: "grey",
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 2,
                height: 15,
                backgroundColor: "grey",
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 15,
                height: 2,
                backgroundColor: "grey",
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 2,
                height: 15,
                backgroundColor: "grey",
              }}
            />

            <TouchableOpacity
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={pickImage}
            >
              <Ionicons name="cloud-upload-outline" size={30} color="grey" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default AddCompany;

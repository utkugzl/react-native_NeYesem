import React from "react";
import { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Text, IconButton } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, Modal, Portal } from "react-native-paper";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const AddCompany = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [mapVisible, setMapVisible] = useState(false);

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

  const openMap = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Konum izni verilmedi.");
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    });

    setMapVisible(true);
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
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
        <TextInput
          label="Şirket Adı"
          mode="outlined"
          style={{ width: "90%", marginTop: 30 }}
          theme={{ colors: { primary: "#FD8349" } }}
          autoCapitalize="words"
          autoComplete="off"
          autoCorrect={false}
          returnKeyType="done"
          onSubmitEditing={() => {
            console.log("Şirket adı kaydedildi");
          }}
        />
        <TextInput
          label="Açıklama"
          mode="outlined"
          style={{ width: "90%", marginTop: 20, height: 100 }}
          theme={{ colors: { primary: "#FD8349" } }}
          multiline
          numberOfLines={4}
          autoCapitalize="sentences"
          autoComplete="off"
          autoCorrect={false}
          returnKeyType="done"
          onSubmitEditing={() => {
            console.log("Şirket açıklaması kaydedildi");
          }}
        />
        {!location && (
          <TouchableOpacity
            onPress={openMap}
            activeOpacity={0.7}
            style={{
              marginTop: 20,
              backgroundColor: "#5da7ec",
              padding: 12,
              borderRadius: 8,
              width: "90%",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Konum Seç
            </Text>
          </TouchableOpacity>
        )}
        {location && (
          <View
            style={{
              marginTop: 20,
              width: "90%",
              height: 200,
              borderRadius: 10,
              overflow: "hidden",
              position: "relative", // reset butonu için gerekli
            }}
          >
            <MapView
              style={{ flex: 1 }}
              region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              scrollEnabled={false}
              zoomEnabled={false}
            >
              <Marker coordinate={location} />
            </MapView>

            <TouchableOpacity
              onPress={() => setLocation(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "red",
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                elevation: 4,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}
            >
              <IconButton
                onPress={() => setLocation(null)}
                icon="close"
                size={24}
                iconColor="white"
              />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => setMapVisible(false)}
          style={{
            backgroundColor: "#36c124",
            padding: 12,
            borderRadius: 8,
            width: "90%",
            alignItems: "center",
            marginVertical: 10,
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Kaydet
          </Text>
        </TouchableOpacity>
      </View>
      <Portal>
        <Modal
          visible={mapVisible}
          onDismiss={() => setMapVisible(false)}
          contentContainerStyle={{
            backgroundColor: "white",
            borderRadius: 10,
            width: "90%",
            height: "90%",
            alignSelf: "center",
          }}
          dismissable={true}
          onRequestClose={() => setMapVisible(false)}
        >
          <View
            style={{
              height: 35,
              backgroundColor: "#FD8349",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <IconButton
              icon="close"
              iconColor="white"
              size={30}
              onPress={() => setMapVisible(false)}
            />
          </View>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location?.latitude || 37.78825,
              longitude: location?.longitude || -122.4324,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            onPress={(e) => {
              setLocation(e.nativeEvent.coordinate);
              setMapVisible(false); // seçildikten sonra haritayı kapat
            }}
          >
            {location && <Marker coordinate={location} />}
          </MapView>
          <View
            style={{
              height: 60,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <TouchableOpacity
              onPress={() => setMapVisible(false)}
              style={{
                backgroundColor: "#36c124",
                padding: 12,
                borderRadius: 8,
                width: "80%",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                Konumu Kaydet
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export default AddCompany;

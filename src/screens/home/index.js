import React, { useState, useEffect } from "react";
import { View, FlatList, Image, ScrollView } from "react-native";
import { Text, Surface, AnimatedFAB } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useGlobal } from "../../utils/GlobalContext.js";
import CompanyCardBig from "../../components/CompanyCardBig.js";
import CompanyCardSmall from "../../components/CompanyCardSmall.js";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const global = useGlobal();
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [isExtended, setIsExtended] = useState(false);

  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const foods = [
    { id: "1", name: "Pizza", icon: require("../../assets/foods/pizza.png") },
    {
      id: "2",
      name: "Burger",
      icon: require("../../assets/foods/hamburger.png"),
    },
    {
      id: "3",
      name: "Pastane",
      icon: require("../../assets/foods/pastane.png"),
    },
    { id: "4", name: "İçecek", icon: require("../../assets/foods/icecek.png") },
    { id: "5", name: "Tatlı", icon: require("../../assets/foods/tatlı.png") },
  ];

  const data = [
    { label: "Ankara", value: "1" },
    { label: "Sakarya", value: "2" },
    { label: "İstanbul", value: "3" },
    { label: "İzmir", value: "4" },
  ];

  const companies = [
    {
      id: "1",
      name: "Pizza Hut",
      image: "https://picsum.photos/2600/260",
      star: 4.5,
      distance: 2.8,
    },
    {
      id: "2",
      name: "Burger King",
      image: "https://picsum.photos/250/250",
      star: 4.0,
      distance: 1.5,
    },
    {
      id: "3",
      name: "Domino's Pizza",
      image: "https://picsum.photos/210/210",
      star: 4.2,
      distance: 3.0,
    },
    {
      id: "4",
      name: "Starbucks",
      image: "https://picsum.photos/230/230",
      star: 4.8,
      distance: 0.5,
    },
    {
      id: "5",
      name: "McDonald's",
      image: "https://picsum.photos/240/240",
      star: 4.1,
      distance: 2.0,
    },
    {
      id: "6",
      name: "KFC",
      image: "https://picsum.photos/200/200",
      star: 4.3,
      distance: 1.2,
    },
  ];

  useEffect(() => {
    if (global.currentCity) {
      const matchingCity = data.find(
        (city) => city.label.toLowerCase() === global.currentCity.toLowerCase()
      );

      if (matchingCity) {
        setValue(matchingCity.value);
      }
    }
  }, [global.currentCity]);

  const renderItem = ({ item }) => (
    <Surface
      style={{
        padding: 8,
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
        borderRadius: 8,
        backgroundColor: "white",
      }}
      elevation={2}
    >
      <Image
        source={item.icon}
        style={{
          width: 60,
          height: 60,
          marginBottom: 0,
        }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 14, textAlign: "center" }}>{item.name}</Text>
    </Surface>
  );

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} onScroll={onScroll}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <Dropdown
            style={[
              {
                width: "90%",
                height: 50,
                borderColor: "gray",
                borderWidth: 0.5,
                borderRadius: 8,
                paddingHorizontal: 8,
                marginVertical: 12,
              },
              isFocus && { borderColor: "#FD8349" },
            ]}
            placeholderStyle={{ fontSize: 16 }}
            selectedTextStyle={{
              fontSize: 16,
              fontWeight: "bold",
            }}
            inputSearchStyle={{
              height: 40,
              fontSize: 16,
            }}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Şehir Seçiniz..." : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Ionicons
                name="location-outline"
                size={25}
                style={{
                  marginRight: 5,
                  color: isFocus ? "#FD8349" : "black",
                }}
              />
            )}
          />
          <FlatList
            data={foods}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0 }}
            contentContainerStyle={{
              paddingHorizontal: 15,
              marginTop: 10,
              marginBottom: 25,
            }}
          />
          <Text
            style={{
              textAlign: "left",
              width: "90%",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Şehrin Yıldızları
          </Text>
          <FlatList
            data={companies}
            renderItem={({ item }) => <CompanyCardBig item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0 }}
            contentContainerStyle={{
              paddingHorizontal: 15,
              marginTop: 15,
              marginBottom: 25,
            }}
          />
          <Text
            style={{
              textAlign: "left",
              width: "90%",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Tüm Restoranlar
          </Text>
          <FlatList
            data={companies}
            renderItem={({ item }) => <CompanyCardSmall item={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            style={{ width: "100%" }}
            contentContainerStyle={{
              alignItems: "center",
              paddingVertical: 15,
            }}
          />
        </View>
      </ScrollView>
      <AnimatedFAB
        icon={"plus"}
        label={"Ekle"}
        extended={isExtended}
        onPress={() => {
          navigation.navigate("AddCompany");
        }}
        visible={true}
        animateFrom={"right"}
        iconMode={"dynamic"}
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          backgroundColor: "#FD8349",
          borderRadius: 28,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 4,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      />
    </>
  );
};

export default Home;

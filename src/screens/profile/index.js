import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Text, Avatar, Card, Divider, Surface } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import ProfileButton from "../../components/ProfileButton.js";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigaiton = useNavigation();

  const renderItem = ({ item }) => (
    <Surface
      style={{
        padding: 8,
        height: 80,
        width: 80,
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
          width: 50,
          height: 50,
          marginBottom: 0,
        }}
        resizeMode="contain"
      />
    </Surface>
  );

  const badges = [
    { id: "1", icon: require("../../assets/badges/badge1.png") },
    {
      id: "2",
      icon: require("../../assets/badges/badge2.png"),
    },
    {
      id: "3",
      icon: require("../../assets/badges/badge3.png"),
    },
    { id: "4", icon: require("../../assets/badges/badge4.png") },
    { id: "5", icon: require("../../assets/badges/badge5.png") },
    { id: "6", icon: require("../../assets/badges/badge6.png") },
    { id: "7", icon: require("../../assets/badges/badge7.png") },
  ];

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Card.Title
        title={"Utku" + " " + "Güzel"}
        titleStyle={{
          fontWeight: "bold",
          fontSize: 24,
          margin: 8,
        }}
        style={{
          backgroundColor: "white",
          elevation: 6,
          marginBottom: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
        }}
        left={(props) => (
          <Avatar.Text
            {...props}
            size={55}
            //label={global.name[0] + global.surname[0]}
            label="UG"
            backgroundColor="#FD8349"
            style={{
              borderRadius: 12,
            }}
          />
        )}
      />
      <View
        style={{
          elevation: 6,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          backgroundColor: "white",
          margin: 12,
          borderRadius: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            padding: 12,
            borderRadius: 12,
          }}
        >
          <Ionicons
            name="person"
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
            uguzel
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            padding: 12,
            borderRadius: 12,
          }}
        >
          <Ionicons
            name="mail"
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
            utku.guzel@gmail.com
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 12 }}>
        <Text
          style={{
            width: "90%",
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 18,
          }}
        >
          Rozetler
        </Text>
        <FlatList
          data={badges}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          contentContainerStyle={{
            paddingHorizontal: 15,
            marginTop: 10,
            marginBottom: 12,
          }}
        />
      </View>
      <ScrollView
        style={{
          elevation: 6,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          backgroundColor: "white",
          marginTop: 12,
        }}
      >
        <ProfileButton iconName="settings-outline" text="Ayarlar" />
        <Divider />
        <ProfileButton iconName="help-circle-outline" text="Yardım" />
        <Divider />
        <ProfileButton iconName="information-circle-outline" text="Hakkında" />
        <Divider />
        <ProfileButton
          iconName="log-out-outline"
          text="Çıkış Yap"
          onPress={() => {
            navigaiton.navigate("Login");
          }}
        />
        <Divider />
      </ScrollView>
    </View>
  );
};

export default Profile;

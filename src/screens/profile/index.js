import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text, Avatar, Card, Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import ProfileButton from "../../components/ProfileButton.js";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigaiton = useNavigation();
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

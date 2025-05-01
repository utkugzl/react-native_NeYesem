import React, { useState, useEffect } from "react";
import { 
  View, 
  Image, 
  TouchableOpacity, 
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  FlatList
} from "react-native";
import { Text, Divider, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Comment from "../../components/Comment.js";

const CompanyDetail = ({ route }) => {
  const { company } = route.params;
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const minus = Platform.OS === "ios" ? 35 : 280;
  
  // Klavye yüksekliğini takip etmek için
  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      }
    );
    
    const keyboardWillHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView 
        style={{ flex: 1 }} 
        contentContainerStyle={{ paddingBottom: 90 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: company.image }}
            style={{ width: "100%", height: 200 }}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: "white",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "#FD8349", fontWeight: "bold", fontSize: 16 }}>
              ⭐ {company.star} Puan
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <View style={{ flex: 1, paddingRight: 8 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }} numberOfLines={2}>
              {company.name}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              padding: 12,
              borderRadius: 12,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 8,
            }}
          >
            <Ionicons name="locate-outline" size={30} />
          </TouchableOpacity>
        </View>
        <Divider />
        <FlatList
            data={[...Array(10)]}
            renderItem={({ item }) => <Comment />}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
            ListHeaderComponent={
              <View style={{ marginTop: 10, paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Yorumlar
                </Text>
              </View>
            }
          />
      </ScrollView>

      {/* Yorum yazma alanı - Klavye durumuna göre pozisyonu ayarlanır */}
      <View
        style={{
          position: "absolute",
          bottom: keyboardHeight === 0 ? 0 : keyboardHeight - minus,
          left: 0,
          right: 0,
          backgroundColor: 'white',
        }}
      >
        <Divider />
        <TextInput
          mode="outlined"
          placeholder="Yorum yap..."
          multiline={true}
          style={{
            backgroundColor: "white",
            margin: 12,
            borderRadius: 12,
            height: 60,
          }}
          right={
            <TextInput.Icon
              icon="send"
              iconColor="#FD8349"
              onPress={() => {
                Keyboard.dismiss();
              }}
            />
          }
        />
      </View>
    </View>
  );
};

export default CompanyDetail;
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Linking,
  Alert,
} from "react-native";
import { Text, Divider, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Comment from "../../components/Comment.js";
import { useGlobal } from "../../utils/GlobalContext";

const CompanyDetail = ({ route }) => {
  const { company } = route.params;
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const minus = Platform.OS === "ios" ? 35 : 280;
  const [rating, setRating] = useState(0);
  const global = useGlobal();

  const companyImages = {
    "pizza-hut.jpg": require("../../assets/companies/pizza-hut.jpg"),
    "mc-donalds": require("../../assets/companies/mc-donalds.jpg"),
    dominos: require("../../assets/companies/dominos.jpg"),
    starbucks: require("../../assets/companies/starbucks.jpg"),
    "simit-sarayı": require("../../assets/companies/simit-sarayı.jpg"),
    sushico: require("../../assets/companies/sushico.jpg"),
    "yildiz-pastanesi": require("../../assets/companies/yildiz-pastanesi.jpeg"),
    "burger-king": require("../../assets/companies/burger-king.jpg"),
    "kahve-dunyasi": require("../../assets/companies/kahve-dunyasi.webp"),
    kfc: require("../../assets/companies/kfc.jpg"),
    "cook-time": require("../../assets/companies/cook-time.jpeg"),
    "tavuk-dunyasi": require("../../assets/companies/tavuk-dunyasi.webp"),
    "little-caesars": require("../../assets/companies/little-caesars.jpg"),
    popeyes: require("../../assets/companies/popeyes.jpg"),
    "sushi-house": require("../../assets/companies/sushi-house.jpg"),
    edeler: require("../../assets/companies/edeler.webp"),
    dondurma: require("../../assets/companies/dondurma.webp"),
    mado: require("../../assets/companies/mado.webp"),
  };

  // Klavye yüksekliğini takip etmek için
  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      }
    );

    const keyboardWillHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  const openMaps = (latitude, longitude, label) => {
    const url = Platform.select({
      ios: `http://maps.apple.com/?ll=${latitude},${longitude}&q=${encodeURIComponent(
        label
      )}`,
      android: `geo:${latitude},${longitude}?q=${latitude},${longitude}(${encodeURIComponent(
        label
      )})`,
    });

    Linking.openURL(url);
  };

  const handleSendComment = () => {
    if (global.commentText.trim() === "" || rating === 0) {
      Alert.alert("Eksik Bilgi", "Lütfen yorum yazın ve bir puan verin.", [
        { text: "Tamam" },
      ]);
      return;
    }

    const newComment = {
      name: "Utku Güzel",
      text: global.commentText,
      rating: rating,
      companyId: company.id,
    };

    global.setComments([newComment, ...global.comments]);
    global.setCommentText("");
    setRating(0);
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 90 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ position: "relative" }}>
          <Image
            source={companyImages[company.image]}
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
            <Text
              style={{ color: "#FD8349", fontWeight: "bold", fontSize: 16 }}
            >
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
            <Text
              style={{ fontWeight: "bold", fontSize: 18 }}
              numberOfLines={2}
            >
              {company.name}
            </Text>
            <Text style={{ fontSize: 14, marginTop: 6 }} numberOfLines={6}>
              {company.description}
            </Text>
          </View>
          <TouchableOpacity
            // onPress={() =>
            //   openMaps(company.latitude, company.longitude, company.name)
            // }
            onPress={() =>
              openMaps("40.747987712811735", "30.35268274384223", company.name)
            }
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
        {global.comments.filter((item) => item.companyId === company.id)
          .length > 0 ? (
          <FlatList
            data={global.comments.filter(
              (item) => item.companyId === company.id
            )}
            renderItem={({ item }) => (
              <Comment name={item.name} text={item.text} rating={item.rating} />
            )}
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
        ) : (
          <View
            style={{
              padding: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, color: "gray", marginTop: 20 }}>
              Bu işletmeye henüz yorum yapılmamış.
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Yorum yazma alanı - Klavye durumuna göre pozisyonu ayarlanır */}
      <View
        style={{
          position: "absolute",
          bottom: keyboardHeight === 0 ? 0 : keyboardHeight - minus,
          left: 0,
          right: 0,
          backgroundColor: "white",
        }}
      >
        <Divider />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 8,
          }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Ionicons
                name={rating >= star ? "star" : "star-outline"}
                size={28}
                color="#FD8349"
                style={{ marginHorizontal: 4 }}
              />
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          mode="outlined"
          placeholder="Yorum yap..."
          multiline={true}
          value={global.commentText}
          onChangeText={(text) => global.setCommentText(text)}
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
              onPress={handleSendComment}
            />
          }
        />
      </View>
    </View>
  );
};

export default CompanyDetail;

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
} from "react-native";
import { Text, Divider, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Comment from "../../components/Comment.js";

const CompanyDetail = ({ route }) => {
  const { company } = route.params;
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const minus = Platform.OS === "ios" ? 35 : 280;
  const [rating, setRating] = useState(0);

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

  const dummyComments = [
    {
      name: "Ahmet Yılmaz",
      text: "Gerçekten çok güzel bir deneyimdi. Tavsiye ederim!",
      rating: 5,
    },
    {
      name: "Elif Demir",
      text: "Çalışanlar çok ilgiliydi. Tekrar tercih ederim.",
      rating: 4,
    },
    {
      name: "Mert Can",
      text: "Fiyatlar biraz yüksek ama kalite yerinde.",
      rating: 3,
    },
    {
      name: "Zeynep Kaya",
      text: "Beklediğimden çok daha iyi bir hizmet aldım.",
      rating: 5,
    },
    {
      name: "Ali Vural",
      text: "Park yeri sıkıntılı ama genel olarak memnun kaldım.",
      rating: 3,
    },
    {
      name: "Ayşe Koç",
      text: "Ortam çok güzel ama biraz kalabalıktı.",
      rating: 4,
    },
    {
      name: "Mehmet Şahin",
      text: "Tek kelimeyle harika!",
      rating: 5,
    },
    {
      name: "Fatma Öz",
      text: "Servis biraz yavaştı ama yemekler lezzetliydi.",
      rating: 3,
    },
    {
      name: "Burak Çelik",
      text: "Konum olarak çok merkezi, ulaşım kolay.",
      rating: 4,
    },
    {
      name: "Esra Aydın",
      text: "İlk defa geldim, çok memnun kaldım.",
      rating: 5,
    },
    {
      name: "Kemal Arslan",
      text: "Maalesef hiç memnun kalmadım. Öncelikle rezervasyonumuz olmasına rağmen 45 dakika bekletildik. Masalar kirli, çalışanlar ilgisiz ve yemekler soğuktu. Fiyatlara göre aldığımız hizmet kesinlikle değmedi. Bir daha gelmeyeceğim ve kimseye de tavsiye etmem. Para kaybı oldu resmen.",
      rating: 1,
    },
    {
      name: "Selin Özkan",
      text: "Buraya özel günümüzü kutlamaya gelmiştik ama tam bir hayal kırıklığı yaşadık. Öncelikle ambiente güzel ama bu kadar. Sipariş verdiğimiz yemekler 1 saati aştı ve geldiğinde de beklediğimiz lezzette değildi. Garsonlar sürekli başka masalarla ilgileniyordu, bizim masaya hiç uğramadılar. Hesap geldiğinde de fiyatlar menüdekinden farklıydı. Açıklama istediğimizde de tatmin edici bir cevap alamadık. Gerçekten çok üzüldük.",
      rating: 2,
    },
    {
      name: "Emre Doğan",
      text: "3 arkadaşımla birlikte akşam yemeği için gittik. Mekan görünüş olarak güzel dekore edilmiş ama hizmet kalitesi maalesef çok düşük. Siparişimizi aldıktan sonra garson bir daha gelmedi masaya. Su bile isteyemedik. Yemekler geldiğinde soğuk ve tuzsuzdu. Sosları ekstra ücretli, bu da ayrı bir problem. Hesap da oldukça yüksek geldi kaliteye göre. Tekrar gitmem.",
      rating: 2,
    },
    {
      name: "Gül Yıldız",
      text: "İnternetten görüp geldik ama fotoğraflar yanıltıcıymış. Mekan çok küçük ve dar, masalar birbirine çok yakın. Ses yalıtımı da yok, yan masadaki konuşmaları duyabiliyorsunz. Yemek kalitesi ortalama, fiyatlar ise oldukça yüksek. Çalışanlar aceleci davranıyor, rahat bir yemek yiyemiyorsunuz. Beklentimin çok altındaydı.",
      rating: 2,
    },
    {
      name: "Okan Mutlu",
      text: "Gerçekten mükemmel bir deneyimdi! Eşimle yıldönümümüzü kutlamaya gelmiştik ve her şey kusursuzdu. Rezervasyon yaparken özel gün olduğunu belirtmiştik, masayı çok güzel süslemişler ve ücretsiz tatlı ikram ettiler. Yemekler hem lezzetli hem de sunum olarak çok başarılıydı. Garsonlar çok ilgili ve güleryüzlüydü. Fiyatlar makul seviyede, kaliteyi düşününce gayet uygun. Kesinlikle tekrar geleceğiz ve herkese tavsiye ediyorum.",
      rating: 5,
    },
    {
      name: "Canan Tekin",
      text: "Arkadaşlarımın tavsiyesi üzerine gittim ve gerçekten çok güzel bir akşam geçirdik. Mekan sıcak ve samimi bir atmosfere sahip. Menü çeşitliliği bol ve her damak zevkine uygun seçenekler var. Ben vejeteryan menüden seçtim ve çok memnun kaldım. Çalışanlar çok nazik ve yardımsever. Tek eksik yanı biraz gürültülü olması ama genel olarak çok başarılı. Fiyat performans açısından da gayet iyi.",
      rating: 4,
    },
    {
      name: "Hasan Kılıç",
      text: "Hiç tavsiye etmem. Hijyen konusunda ciddi sorunlar var. Tuvaletler pis, masalar yapışkan ve çatal bıçaklar lekeli geldi. Yemeği yarım bırakıp çıktık. Böyle bir yerde yemek yemek sağlık açısından risk teşkil ediyor. Yetkililerin mutlaka kontrol etmesi gerekiyor.",
      rating: 1,
    },
    {
      name: "Nazlı Koray",
      text: "Doğum günümü kutlamak için ailemle birlikte geldik. Çocuklar için özel bir köşe ayırarak çok düşünceli davrandılar. Yemekler taze ve lezzetliydi, özellikle çocuk menüsü çok başarılı. Çalışanlar çocuklara karşı çok sabırlı ve sevecendi. Fiyatlar da ailelerin bütçesine uygun. Çocuklu aileler için ideal bir mekan. Mutlaka tekrar geleceğiz.",
      rating: 5,
    },
    {
      name: "Serkan Ateş",
      text: "İş toplantısı için tercih etmiştik ama yanlış seçim oldu. Ortam çok gürültülü, toplantı yapmak imkansızdı. Garsonlar sürekli masanın etrafında dolanıyor, konsantre olmak zor. Wi-Fi de çok yavaş, sunumumuzu düzgün yapamadık. İş yemekleri için uygun değil kesinlikle.",
      rating: 2,
    },
    {
      name: "Cem Özgür",
      text: "Paket servis sipariş etmiştik, tam 2 saat gecikti! Telefonla aradığımızda sürekli 'yoldayız' dediler ama gelen yemekler soğuk ve dağınıktı. Soslar dökülmüş, ambalajlar yırtık. Bu kadar özensizlik kabul edilemez. Paket servis hizmetinizi gözden geçirmenizi öneriyorum.",
      rating: 1,
    },
    {
      name: "Sibel Aktaş",
      text: "Vegan seçenekleri için geldim ve çok memnun kaldım. Menüde bol seçenek var ve hepsi çok lezzetli hazırlanmış. Çalışanlar vegan beslenme konusunda bilgiliydi ve öneriler verdiler. Bu tür alternatif beslenme tarzlarını destekledikleri için çok mutluyum. Arkadaşlarıma da tavsiye ettim, onlar da çok beğendi.",
      rating: 4,
    },
  ];

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
            onPress={() => openMaps("40.747987712811735", "30.35268274384223", company.name)}
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
          data={dummyComments}
          renderItem={({ item }) => (
            <Comment name={item.name} text={item.text} rating={item.rating} />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          ListHeaderComponent={
            <View style={{ marginTop: 10, paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Yorumlar</Text>
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

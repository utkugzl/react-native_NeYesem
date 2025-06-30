import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import * as Location from "expo-location";

export const GlobalContext = createContext(null);
export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    console.log("currentCity", currentCity);
  }, [currentCity]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "İzin Gerekli",
          "Uygulamanın çalışabilmesi için konum izni gereklidir."
        );
        setLoading(false);
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        let reverseGeocode = await Location.reverseGeocodeAsync(
          location.coords
        );

        if (reverseGeocode.length > 0) {
          console.log("reverseGeocode", reverseGeocode[0]);
          setCurrentCity(reverseGeocode[0].region);
        } else {
          setCurrentCity("Şehir bulunamadı");
        }
      } catch (error) {
        console.error("Konum alınamadı:", error);
        setCurrentCity("Konum alınamadı");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // const axios = useMemo(
  //   () =>
  //     orjAxios.create({
  //       baseURL: TEST_BASE_URL,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: '*/*',
  //         'Access-Control-Allow-Origin': '*',
  //         common: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     }),
  //   [token],
  // );
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
  
  const [comments, setComments] = useState(dummyComments);
  const [commentText, setCommentText] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        showSplash,
        setShowSplash,
        currentCity,
        setCurrentCity,
        comments,
        setComments,
        commentText,
        setCommentText,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

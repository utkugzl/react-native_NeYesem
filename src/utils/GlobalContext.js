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

  return (
    <GlobalContext.Provider
      value={{
        showSplash,
        setShowSplash,
        currentCity,
        setCurrentCity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

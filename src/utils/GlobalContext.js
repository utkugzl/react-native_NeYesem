import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';

export const GlobalContext = createContext(null);
export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({children}) => {
  const [showSplash, setShowSplash] = useState(true);

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
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

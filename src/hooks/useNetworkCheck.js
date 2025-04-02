import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useNetworkCheck = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        Alert.alert("No Internet", "Please check your connection.");
      }
    });

    return () => unsubscribe();
  }, []);

  return isConnected;
};

export default useNetworkCheck;

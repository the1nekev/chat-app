import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//import screens to navigate
import Start from "./components/Start";
import Chat from "./components/Chat";

//import react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useNetInfo } from "@react-native-community/netinfo";
import { Alert, LogBox } from "react-native";
import { useEffect } from "react";

//Create the navigator
const Stack = createNativeStackNavigator();

// The app’s main Chat component that renders the chat UI
const App = () => {
  const connectionStatus = useNetInfo();

  const firebaseConfig = {
    apiKey: "AIzaSyAVG0FxRRJX5Pbz33c0CS7zmgldGt4Trh8",
    authDomain: "chat-app-a36ed.firebaseapp.com",
    projectId: "chat-app-a36ed",
    storageBucket: "chat-app-a36ed.appspot.com",
    messagingSenderId: "583180126616",
    appId: "1:583180126616:web:b5d49a53c3c155a39e03ed",
  };

  //initialize Firebase
  const app = initializeApp(firebaseConfig);

  //initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  //Initialize location reference
  const storage = getStorage(app);

  //real-time network connectivity detection system
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      {/* Code to rendered */}
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

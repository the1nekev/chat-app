import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";

import { getAuth, signInAnonymously } from "firebase/auth";

const backgroundImage = require("../assets/Bg-Image.png");
const backgroundColors = {
  a: "#090C08",
  b: "#474056",
  c: "#8A95A5",
  d: "#B9C6AE",
};

//Start screen declaration
const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState(backgroundColors.a);

  //Firebase Auth
  const auth = getAuth();

  //Signin Anonymously
  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", {
          userID: result.user.uid,
          name: name,
          color: color ? color : "white",
        });
        Alert.alert("Signed in successfully");
      })
      .catch((err) => {
        Alert.alert("An error occurred: " + err);
      });
  };

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.image}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.appTitle}>Chat App</Text>
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView
            style={styles.inputContainer}
            behavior="padding"
            enabled
          >
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
              placeholder="Type your username here"
              placeholderTextColor="#757803"
            />
            <Text style={styles.textColorSelector}>
              Choose a background color:
            </Text>
            <View style={styles.colorSelector}>
              {/* Color selection for Chat Screen */}
              <TouchableOpacity
                style={[
                  styles.circle,
                  color === backgroundColors.a && styles.selectedCircle,
                  { backgroundColor: backgroundColors.a },
                ]}
                onPress={() => setColor(backgroundColors.a)}
              />
              <TouchableOpacity
                style={[
                  styles.circle,
                  color === backgroundColors.b && styles.selectedCircle,
                  { backgroundColor: backgroundColors.b },
                ]}
                onPress={() => setColor(backgroundColors.b)}
              />
              <TouchableOpacity
                style={[
                  styles.circle,
                  color === backgroundColors.c && styles.selectedCircle,
                  { backgroundColor: backgroundColors.c },
                ]}
                onPress={() => setColor(backgroundColors.c)}
              />
              <TouchableOpacity
                style={[
                  styles.circle,
                  color === backgroundColors.d && styles.selectedCircle,
                  { backgroundColor: backgroundColors.d },
                ]}
                onPress={() => setColor(backgroundColors.d)}
              />
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={signInUser}>
              <Text style={styles.buttonText}>Start Chatting</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

//Styles for Start screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    padding: "6%",
  },
  appTitle: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: "6%",
    paddingBottom: 20,
  },
  textInput: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    padding: 15,
    borderWidth: 1,
    borderColor: "#757083",
    marginTop: 15,
    marginBottom: 15,
  },
  textColorSelector: {
    fontSize: 16,
    fontWeight: "300",
    color: "#8A95A5",
    marginBottom: 10,
  },
  colorSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  selectedCircle: {
    borderWidth: 2,
    borderColor: "#FF0000",
  },
  buttonStyle: {
    backgroundColor: "#757083",
    padding: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Start;

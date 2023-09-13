import { StyleSheet, View, Text } from "react-native";
import { useEffect } from "react";

const Chat = ({ route, navigation }) => {
  const { name, color } = route.params; //Brings name and color to selected chat

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to the Chat Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Chat;

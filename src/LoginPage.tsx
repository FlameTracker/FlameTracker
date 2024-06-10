import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

export default function LoginPage({ navigation }: { navigation: any }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO
  };

  return (
    <ImageBackground
      source={require("../assets/back.png")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/icon.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={[styles.title, { color: "white" }]}>FlameTracker</Text>
      </View>
      <View style={{ width: "80%", marginTop: 40 }}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 33,
    marginVertical: 10,
    fontFamily: "Poppins-Bold",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    width: "100%",
    fontSize: 16,
    color: "#333",
    fontFamily: "Poppins-Regular",
  },
  button: {
    backgroundColor: "#fb5b5a",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Poppins-Regular",
  },
});

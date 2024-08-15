import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Dimensions} from "react-native";
import Sound from "react-native-sound";
import React from "react";

export default function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.headerbox}>
          <Image style={styles.image}
          source={require('./assets/favicon.png')}
          />
          <Text style={styles.text}>Welcome to MAST5112</Text>
        </View>
        <View style={styles.loginbox}>
          <Text style={styles.text}>Enter your Name</Text>
          <TextInput style={styles.textInput}>
          </TextInput>
          <Text style={styles.text}>Enter your age</Text>
          <TextInput style={styles.textInput}>
          </TextInput>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },

  row: {
    flexDirection: "column", // Stack boxes vertically
    flex: 1, // Fill available space
    width: "100%",
  },

  headerbox: {
    flex: 1, // Take up 50% of the container height
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginBottom: 0, // Space between boxes
  },

  loginbox: {
    flex: 1, // Take up 50% of the container height
    padding: 0,
    backgroundColor: "#f4f4f4",
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center", // Center contents vertically
  },

  text: {

    fontFamily: "times new roman",
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginBottom: 10, // Space between text and input field
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignContent: "center"
  },

  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 300,
    marginBottom: 100,
    backgroundColor: "white",
    borderRadius: 4,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:30
  },
  heading: {
    fontSize: 30,
    backgroundColor: "aliceblue",
    padding: 20,
    borderRadius: 20,
    minWidth: "100%",
    textAlign: "center",
  },
});

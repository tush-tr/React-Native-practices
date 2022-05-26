import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,FlatList } from "react-native";
import ListItem from "./ListItem"
export default function App({tasks,onRemove}) {
    
  return (
    <View style={styles.container}>
      <FlatList
      data={tasks}
      renderItem={({item})=><ListItem name={item.name} id={item.id} onRemove={onRemove}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    minWidth:"100%",
    // minHeight: "100vh",
    marginTop: 30,
  },

});

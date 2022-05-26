import { StyleSheet, Text, View, Button } from "react-native";

export default function ListItem({ name, id,onRemove }) {
    const removeHandler=()=>{
        onRemove(id)
    }
  return (
    <View style={[styles.container, styles.shadow]}>
      <View>
        <Text style={[styles.item, styles.heading]}>{name}</Text>
      </View>
      <View style={styles.button}>
      <Button title="Remove" onPress={removeHandler}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 12,
    margin: 20,
    minWidth:"80%"
  },
  shadow: {
    shadowColor: "grey",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  item: {
    marginLeft: 5,
    marginRight: 0,
    height: 44,
  },
  heading: {
    fontSize: 20,
  },
  button: {
    marginLeft:"auto"
  },
});

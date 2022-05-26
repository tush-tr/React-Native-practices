import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const addTaskHandler = () => {
    onAddTask({name:task,id:Math.random()})
    setTask("");
  };
  const onChangeText = (event) => {
    setTask(event);
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Enter task name"
        value={task}
      />
      <Button onPress={addTaskHandler} title="Add Task" />
    </View>
  );
};
export default NewTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  heading: {
    fontSize: 30,
    backgroundColor: "aliceblue",
    padding: 20,
    borderRadius: 20,
    minWidth: "100%",
    textAlign: "center",
  },
  input: {
    fontSize: 20,
    backgroundColor: "#fff",
    padding: 20,
  },
});

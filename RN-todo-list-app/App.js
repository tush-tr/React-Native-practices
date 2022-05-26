import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Header from "./components/Header";
import List from "./components/List";
import NewTask from "./components/NewTask";
export default function App() {
  const tasks = [
    { name: "Road Trip", id: "192022" },
    { name: "Write Book", id: "2930223" },
    { name: "School Work", id: "238283" },
    { name: "Home Work", id: "2803283" },
  ];
  const [allTasks, setAllTasks] = useState(tasks);
  const removeHandler = (removeId) => {
    const alterTasks = allTasks.filter((item) => item.id != removeId);
    setAllTasks(alterTasks);
  };
  const onAddTask = (newTaskData) => {
    setAllTasks([newTaskData, ...allTasks]);
  };
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <NewTask onAddTask={onAddTask} />
        <List tasks={allTasks} onRemove={removeHandler} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 60,
  },
});

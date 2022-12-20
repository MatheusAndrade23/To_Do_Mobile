import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

import { styles } from "./styles";

import logo from "../../../assets/Logo.png";

interface HeaderProps {
  addTask: (name: string) => void;
}

export const Header = ({ addTask }: HeaderProps) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleAddNewTask = () => {
    addTask(newTaskName);

    setNewTaskName("");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          value={newTaskName}
          onChangeText={(text) => setNewTaskName(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { Header } from "../../components/Header";
import { Task } from "../../components/Task";

import { styles } from "./styles";

interface Task {
  name: string;
  done: boolean;
}

export const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (name: string) => {
    const newTasksList = [
      ...tasks,
      {
        name: name,
        done: false,
      },
    ];

    setTasks(newTasksList);
  };

  const handleRemoveTask = (name: string) => {
    const removeTask = () => {
      const newTasksList = tasks.filter((task) => task.name !== name);

      setTasks(newTasksList);

      Alert.alert(
        "Tarefa deletada!",
        `Você removeu a tarefa: '${name}' da lista!`
      );
    };

    Alert.alert(
      "Remover",
      `Tem certeza que quer remover a tarefa: '${name}' da lista?`,
      [
        {
          text: "Sim",
          onPress: () => removeTask(),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  };

  const handleCompleteTask = (name: string) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.name === name) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(tasksUpdated);
  };

  const completedTasks = tasks.filter((task) => task.done);

  return (
    <>
      <Header addTask={addTask} />
      <View style={styles.container}>
        <View style={styles.subtitles}>
          <Text style={styles.subtitle}>
            Criadas <Text style={styles.subtitleNumber}>{tasks.length}</Text>
          </Text>
          <Text style={styles.subtitle}>
            Concluídas{" "}
            <Text style={styles.subtitleNumber}>{completedTasks.length}</Text>
          </Text>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Task
              key={item.name}
              name={item.name}
              done={item.done}
              onComplete={() => handleCompleteTask(item.name)}
              onRemove={() => handleRemoveTask(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <>
              <Icon
                name="list"
                size={40}
                style={{ color: "#808080", alignSelf: "center", marginTop: 30 }}
              />
              <Text style={styles.emptyListText}>
                Você ainda não tem tarefas cadastradas!
              </Text>
              <Text
                style={{
                  ...styles.emptyListText,
                  fontWeight: "normal",
                  marginTop: 5,
                }}
              >
                Crie tarefas e organize seus itens a fazer
              </Text>
            </>
          )}
        />
      </View>
    </>
  );
};

import { Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/FontAwesome";

import { styles } from "./styles";

interface TaskProps {
  name: string;
  done?: boolean;
  onRemove: () => void;
  onComplete: () => void;
}

export const Task = ({
  name,
  onRemove,
  onComplete,
  done = false,
}: TaskProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onComplete}>
        <Icon2
          name={done ? "circle" : "circle-o"}
          size={25}
          style={{ color: "#4EA8DE" }}
        />
      </TouchableOpacity>

      <Text style={done ? styles.taskCLosed : styles.taskOpen}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Icon name="trash" size={20} style={{ color: "#808080" }} />
      </TouchableOpacity>
    </View>
  );
};

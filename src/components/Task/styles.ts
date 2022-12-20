import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#333333",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  taskOpen: {
    color: "#FFF",
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    lineHeight: 25,
  },
  taskCLosed: {
    color: "#808080",
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    lineHeight: 25,
    textDecorationLine: "line-through",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
});

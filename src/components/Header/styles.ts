import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 173,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 1000,
  },
  logo: {
    width: 110.34,
    height: 32,
  },
  form: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    paddingLeft: 12,
    paddingRight: 12,
    bottom: -25,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    zIndex: 3000,
    elevation: 3000,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3000,
    elevation: 3000,
  },
});

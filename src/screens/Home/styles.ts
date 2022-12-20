import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    zIndex: 1,
    elevation: 1,
    padding: 12,
  },
  subtitles: {
    marginTop: 50,
    marginBottom: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#262626",
    paddingBottom: 16,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#8284FA",
  },
  subtitleNumber: {
    color: "white",
    backgroundColor: "#333333",
    borderRadius: 99999,
  },
  emptyListText: {
    color: "#808080",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
});

import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../util/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "sansita-bold",
    fontSize: 26,
    color: Colors.mojitoDark,
    textAlign: "center",
    // borderWidth: Platform.OS === "ios" ? 0 : 2,
    borderWidth: 0,
    borderColor: Colors.mojitoDark,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

import { Text, StyleSheet } from "react-native";
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
    borderWidth: 2,
    borderColor: Colors.mojitoDark,
    padding: 12,
  },
});

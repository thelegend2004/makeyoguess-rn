import { StyleSheet, View } from "react-native";
import Colors from "../../util/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    borderRadius: 8,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.mojito,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
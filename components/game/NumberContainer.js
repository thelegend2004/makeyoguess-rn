import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../util/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary300,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 18,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "sansita",
    color: Colors.primary300,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});

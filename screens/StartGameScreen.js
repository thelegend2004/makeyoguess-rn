import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.valueInput}/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    borderRadius: 8,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#bbff9cff",
    elevation: 8,
    shadowColor: "black",
    shadowOffset: {width: 4, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  valueInput: {
    height: 50,
    width: 80,
    fontSize: 22,
    borderBottomColor: "#764602ff",
    borderBottomWidth: 2,
    marginVertical: 8,
    color: "#764602ff",
    fontWeight: "semibold",
    textAlign: "center",
  },
});
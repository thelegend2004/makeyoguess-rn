import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../util/colors";
import Title from "../components/ui/Title";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleChangeInput(value) {
    setEnteredNumber(value);
  }

  function resetEnteredNumber() {
    setEnteredNumber("");
  }

  function handleConfirmInput() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "The great mistake",
        "Something wrong with your value, chief (should be number from 0 to 99)",
        [
          {
            text: "Okey-dokey",
            style: "destructive",
            onPress: resetEnteredNumber,
          },
        ]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Make yo GUESS!!!</Title>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.valueInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={handleChangeInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={resetEnteredNumber}>Reset</PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
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
  valueInput: {
    height: 50,
    width: 80,
    fontSize: 22,
    borderBottomColor: Colors.primary300,
    borderBottomWidth: 2,
    marginVertical: 8,
    color: Colors.primary300,
    fontWeight: "semibold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});

import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../util/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

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

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Make yo GUESS!!!</Title>
          <Card>
            <InstructionText>Enter your number</InstructionText>
            <TextInput
              style={styles.valueInput}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={handleChangeInput}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={resetEnteredNumber}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={handleConfirmInput}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: "center",
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

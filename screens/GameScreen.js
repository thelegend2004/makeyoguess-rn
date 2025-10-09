import {
  View,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBound = 1;
let maxBound = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const [initialGuess] = useState(() =>
    generateRandomBetween(minBound, maxBound, userNumber)
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const guessRoundsLength = guessRounds.length;

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    minBound = 1;
    maxBound = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRoundsLength);
    }
  }, [currentGuess, onGameOver, userNumber]);

  function handleNextGuess(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't give me a bs", "Give right directions", [
        { text: "I apologize", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBound,
      maxBound,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prev) => [newRndNumber, ...prev]);
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(this, "lower")}>
              <Ionicons name="remove-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNextGuess.bind(this, "greater")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <FlatList
        data={guessRounds}
        keyExtractor={(item) => item}
        renderItem={(guessRound) => (
          <GuessLogItem
            guess={guessRound.item}
            roundNumber={guessRoundsLength - guessRound.index}
          />
        )}
        style={styles.guessList}
      />
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainerWide}>
              <PrimaryButton onPress={handleNextGuess.bind(this, "lower")}>
                <Ionicons name="remove-outline" size={24} color="white" />
              </PrimaryButton>
            </View>

            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainerWide}>
              <PrimaryButton onPress={handleNextGuess.bind(this, "greater")}>
                <Ionicons name="add-outline" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {content}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerWide: {
    flex: 1,
    justifyContent: "center",
  },
  guessList: {
    marginTop: 12,
  },
});

import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "./util/colors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [areFontsLoaded] = useFonts({
    sansita: require("./assets/fonts/Sansita-Regular.ttf"),
    "sansita-bold": require("./assets/fonts/Sansita-Bold.ttf"),
  });

  useEffect(() => {
    if (areFontsLoaded) {
      SplashScreen.hide();
    }
  }, [areFontsLoaded]);

  if (!areFontsLoaded) {
    return null;
  }

  function handlePickNumber(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }

  function handleGameOver(numberOfRound) {
    setIsGameOver(true);
    setGuessRounds(numberOfRound);
  }

  function handleStartNewGame() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  if (userNumber)
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;

  if (isGameOver && userNumber)
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={handleStartNewGame}
      />
    );

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.shade1, Colors.shade2]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/tequila.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.screenImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  screenImage: {
    opacity: 0.15,
  },
});

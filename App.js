import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "./util/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);

  function handlePickNumber(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }

  function handleGameOver() {
    setIsGameOver(true);
  }

  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  if (userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver}/>;

  if(isGameOver && userNumber) screen = <GameOverScreen/>;

  return (
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

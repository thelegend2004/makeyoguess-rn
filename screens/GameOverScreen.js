import { View, StyleSheet, Image, Text, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../util/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const {width, height} = useWindowDimensions();

  let imageSize = 280;

  if(width < 380) {
    imageSize = 150;
  }  

  if(height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/thumbs-up.jpg")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          round to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <View style={{marginBottom: 64, marginHorizontal: 64}}>
        <PrimaryButton onPress={onStartNewGame}>Start Again</PrimaryButton>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 250 : 280,
    // height: deviceWidth < 380 ? 250 : 280,
    // borderRadius: deviceWidth < 380 ? 125 : 140,
    borderWidth: 3,
    borderColor: Colors.primary300,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "sansita",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "sansita-bold",
    color: Colors.mojitoDark,
  },
});

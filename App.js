import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [value, onChangeText] = useState("Enter your guess here...");
  const [generatedNumber, setGeneratedNumber] = useState(null);
  const [feedback, setFeedback] = useState("");

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 20) + 1;
    setGeneratedNumber(number);
    setFeedback("");
    onChangeText("");
    alert("Number generated! Try to guess it.");
  };

  const handleGuess = () => {
    const guess = parseInt(value);
    if (!guess || guess < 1 || guess > 20) {
      alert("Please enter a valid number between 1 and 20");
      return;
    }

    if (guess === generatedNumber) {
      setFeedback("Congratulations! You guessed correctly!");
    } else if (guess > generatedNumber) {
      setFeedback("Too high! Try again!");
    } else {
      setFeedback("Too low! Try again!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Guessing app </Text>
      <View style={styles.heroContainer}>
        <Text style={styles.generateText}>Generate a number between 1-20</Text>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={generateRandomNumber}
        >
          <Text style={styles.btnText}>Generate Number</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <TouchableOpacity style={styles.btn} onPress={handleGuess} >
          <Text style={styles.guessBtn}>Guess</Text>
        </TouchableOpacity>
        {feedback ? <Text>{feedback}</Text> : null}
      </View>
      <StatusBar style="auto" />
        <Text style={styles.footerText}>Made by Shanti Hedelin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    color: "black",
  },
  welcomeText: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 40,
  },
  btn: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 40,
    width: 90,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 20,

  },
  heroContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  generateBtn: {
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
  },
  touchableOpacity: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: 180,
    height: 50,
  },
  btnText: {
    color: "blue",
    fontSize: 18,
  },
  guessBtn: {
    color: "black",
    fontSize: 18,
  }
});

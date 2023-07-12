import React from "react";
import {
  StyleSheet,
  Button,
  Pressable,
  Text,
  PressableAndroidRippleConfig,
} from "react-native";
import { Level } from "../utils/types";

type Props = {
  title: string;
  onPress: (level: Level) => void;
  level: Level;
  questions: number;
};

const CustomButton = ({ title, onPress, level, questions }: Props) => {
  // const onPress = () => console.log("eeeonPress", title);
  const rippleConfig: PressableAndroidRippleConfig = {
    color: "#ff8080",
  };

  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor: questions === 0 ? "grey" : "#ff4d4d",
      }}
      onPress={() => onPress(level)}
      android_ripple={rippleConfig}
      disabled={questions === 0}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 10,
    backgroundColor: "#ff4d4d",
    marginTop: 50,
    width: 275,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
});

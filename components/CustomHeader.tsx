import React from "react";
import { Header } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { MAIN_TITLE } from "../utils/text";
import { StyleSheet } from "react-native";

type Props = {};

function CustomHeader({}: Props) {
  return (
    <Header
      ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
        colors: ["red", "pink"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      centerComponent={{ text: MAIN_TITLE, style: styles.heading }}
    />
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});

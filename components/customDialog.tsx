import { Dialog } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { Level } from "../utils/types";
import { LEVEL_1_TITLE, LEVEL_2_TITLE, LEVEL_3_TITLE } from "../utils/text";

type Props = {
  visible: boolean;
  setVisible: (value: React.SetStateAction<boolean>) => void;
  level: Level;
  question: string;
};

const getTitle = (level: Level) => {
  if (level === Level.Level_1) {
    return LEVEL_1_TITLE;
  } else if (level === Level.Level_2) {
    return LEVEL_2_TITLE;
  } else if (level === Level.Level_3) {
    return LEVEL_3_TITLE;
  }

  return "";
};

function customDialog({ visible, setVisible, level, question }: Props) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(getTitle(level));
    // get the questions
    // length of questions list random generated
  }, [level]);

  return (
    <Dialog
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      style={styles.dialog}
      overlayStyle={styles.overlay}
      backdropStyle={styles.backdrop}
    >
      <Dialog.Title title={title} titleStyle={styles.title} />
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{question}</Text>
        </View>

        <View style={styles.footer}>
          <Dialog.Actions>
            <Dialog.Button
              titleStyle={styles.button}
              title="CLOSE"
              onPress={() => setVisible(false)}
            />
          </Dialog.Actions>
        </View>
      </View>
    </Dialog>
  );
}

export default customDialog;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "none",
  },
  dialog: {
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    borderRadius: 16,
    backgroundColor: "#ff4d4d",
    height: 400,
    width: 300,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "column",
    height: 250,
    // width: 300,
  },
  button: {
    color: "white",
    width: "100%",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: -10,
    marginTop: -50,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./components/CustomButton";
import {
  LEVEL_1_TITLE,
  LEVEL_2_TITLE,
  LEVEL_3_TITLE,
  MAIN_TITLE,
} from "./utils/text";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomHeader from "./components/CustomHeader";
import { useEffect, useState } from "react";
import CustomDialog from "./components/customDialog";
import { Level } from "./utils/types";
import { L1_QUESTIONS, L2_QUESTIONS, L3_QUESTIONS } from "./utils/questions";
import { getRandomInt } from "./utils/helper";

const setQuestion = (
  questions: string[],
  setQuestionList: React.Dispatch<React.SetStateAction<string[]>>,
  setQuestion: React.Dispatch<React.SetStateAction<string>>
) => {
  const index = getRandomInt(questions.length);
  setQuestion(questions[index]);
  questions.splice(index, 1);
  setQuestionList(questions);
};

export default function App() {
  const [visible, setVisible] = useState(false);
  const [level, setLevel] = useState<Level>();
  const [questionsL1, setQuestionsL1] = useState<string[]>(L1_QUESTIONS);
  const [questionsL2, setQuestionsL2] = useState<string[]>(L2_QUESTIONS);
  const [questionsL3, setQuestionsL3] = useState<string[]>(L3_QUESTIONS);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const toggleQuestions = (level: Level) => {
    setVisible(true);
    setLevel(level);

    if (level === Level.Level_1) {
      setQuestion(questionsL1, setQuestionsL1, setCurrentQuestion);
    } else if (level === Level.Level_2) {
      setQuestion(questionsL2, setQuestionsL2, setCurrentQuestion);
    } else if (level === Level.Level_3) {
      setQuestion(questionsL3, setQuestionsL3, setCurrentQuestion);
    }
  };

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <CustomHeader />
      <View style={styles.container}>
        <CustomButton
          title={LEVEL_1_TITLE}
          onPress={toggleQuestions}
          level={1}
          questions={questionsL1.length}
        />
        <CustomButton
          title={LEVEL_2_TITLE}
          onPress={toggleQuestions}
          level={2}
          questions={questionsL2.length}
        />
        <CustomButton
          title={LEVEL_3_TITLE}
          onPress={toggleQuestions}
          level={3}
          questions={questionsL3.length}
        />
        <StatusBar style="auto" />
      </View>
      {level && (
        <CustomDialog
          visible={visible}
          setVisible={setVisible}
          level={level}
          question={currentQuestion}
        />
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    backgroundColor: "#333",
  },
});

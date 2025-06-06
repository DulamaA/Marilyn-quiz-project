import { IQuestion } from "../data/questionsData";

// This function checks whether the selected answer matches the correct answer for the current question.
// It takes two parameters: the user's selected answer (a string) and the current question object (of type Question).
// The function logs both the selected and correct answers for debugging purposes and returns a boolean value:
// true if the answers match, and false otherwise.
export function validateAnswer(
  selectedAnswer: string,
  currentQuestion: IQuestion,
): boolean {
  return selectedAnswer === currentQuestion.correctAnswer;
}

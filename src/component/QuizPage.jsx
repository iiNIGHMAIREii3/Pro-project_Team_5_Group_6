import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import Accepted from '../pages/Accepted';
import Notaccepted from '../pages/Notaccepted';
import'../style/QuizPage.css'

// You can freely edit/add questions here!
const questions = [
  {
    question: "given an array of n integers,what is the time complexity of finding all oairs (i,j) such that A[i] +A[j]=k using a hash set",
    options: ["O(n2)", "O(n log n)", "O(n)"],
    correct: "O(n)",
  },
  {
    question: "which of the following alorithms uses a devide and concquer approach?",
    options: ["Prim's Algorithms", "Qicksort", "BFS"],
    correct: "Qicksort",
  },
  {
    question: "which of the following supports range minimum queries in logarithmic time and constant time updates",
    options: ["segmant Tree", "Hash table", "Priority Queue"],
    correct: "segmant Tree",
    image: null, // Add image path if needed
  },
  {
    question: "which design pronciple does the following describes? 'A class should have only one reason to change'",
    options: ["Open-Closed Principle", "Liskov Substitution", "Single Reprponsability Prinsiple"],
    correct: "Single Reprponsability Prinsiple",
    image: null, // Add image path if needed
  },
  {
    question: "How many trailling zeros are there in 100!(factorial)",
    options: ["24", "25", "22"],
    correct: "25",
    image: null, // Add image path if needed
  },
  {
    question: "Which of these Java concepts is cricial for memory management ",
    options: ["Encapsulation", "Garbage collection", "Polymorphism"],
    correct: "Garbage collection",
    image: null, // Add image path if needed
  },
];

function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Calculate score
      const correctCount = newAnswers.filter((ans, idx) => ans === questions[idx].correct).length;
      const percent = (correctCount / questions.length) * 100;
      setIsAccepted(percent >= 80);
      setShowResult(true);
    }
  };

  if (showResult) {
    return isAccepted ? <Accepted /> : <Notaccepted />;
  }

  return (
    <div className="quiz-page">
        
      <QuestionCard
        key={current}
        question={questions[current]}
        onAnswer={handleAnswer}
        questionNumber={current + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
}

export default QuizPage; 
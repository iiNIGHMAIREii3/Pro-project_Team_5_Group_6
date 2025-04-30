import React, { useEffect, useState } from 'react';


function QuestionCard({ question, onAnswer, questionNumber, totalQuestions }) {
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(15);

  useEffect(() => {
    setTime(15);
    setSelected(null);
    const timer = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          clearInterval(timer);
          onAnswer(selected);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [question, onAnswer]);

  const handleSelect = (opt) => setSelected(opt);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(selected);
  };

  return (
    <div className="question-card">
      <div className="timer">Time left: {time}s</div>
      <div className="question-title">
        {questionNumber}. {question.question}
      </div>
      {question.image && <img src={question.image} alt="question visual" style={{maxWidth: '200px', margin: '1rem 0'}} />}
      <form onSubmit={handleSubmit}>
        <div className="options">
          {question.options.map((opt, idx) => (
            <label key={idx} style={{display: 'block', margin: '0.5rem 0'}}>
              <input
                type="radio"
                name="option"
                checked={selected === opt}
                onChange={() => handleSelect(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
        <button type="submit" disabled={selected === null}>Submit</button>
      </form>
      <div className="progress">
        Question {questionNumber} of {totalQuestions}
      </div>
    </div>
  );
}

export default QuestionCard; 
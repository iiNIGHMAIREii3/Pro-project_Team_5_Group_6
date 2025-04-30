import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import '../style/interview.css';
import { useNavigate } from "react-router-dom";

const questions = [
  "Tell me about yourself.",
  "Why are you interested in this position?",
  "What are your greatest strengths and weaknesses?",
  "Can you describe a challenging situation you faced and how you handled it?",
  "Where do you see yourself in five years?",
];

function Interview() {
  const navigate = useNavigate(); // ← تم تصحيح مكانها
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [results, setResults] = useState([]);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);

  useEffect(() => {
    // إعداد الكاميرا
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    });
  }, []);

  const startRecording = () => {
    setIsRecording(true);
    recordedChunks.current = [];
    const stream = videoRef.current.srcObject;
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) recordedChunks.current.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks.current, { type: "video/webm" });
      const formData = new FormData();
      formData.append("video", blob, "interview.webm");

      axios.post("http://127.0.0.1:5000/analyze", formData)
        .then(res => {
          setResults(prev => [...prev, res.data]);
        })
        .catch(err => {
          console.error("Error sending data:", err);
        });
    };

    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;

    setTimeout(() => {
      stopRecording();
    }, 10000); // يسجل لمدة 10 ثوانٍ
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
  };

  const handleNext = () => {
    if (!isRecording) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate("/Infopage"); // ← الانتقال عند انتهاء الأسئلة
      }
    }
  };

  return (
    <div className="interview-container">
      <h1 className="interview-title">AI Interviewer</h1>
      <div className="video-section">
        <video ref={videoRef} className="video-feed" muted />
        <div className="question-box">
          <h2>AI: {questions[currentQuestion]}</h2>
        </div>
      </div>

      <div className="controls">
        <button onClick={startRecording} disabled={isRecording}>
          {isRecording ? "Recording..." : "Answer"}
        </button>
        <button onClick={handleNext} disabled={isRecording}>
          Next Question
        </button>
      </div>

      <div className="results">
        {results.map((res, index) => (
          <div key={index} className="result-card">
            <h3>Response to Q{index + 1}</h3>
            <p><strong>Emotion:</strong> {res.emotion}</p>
            <p><strong>Sentiment:</strong> {res.sentiment}</p>
            <p><strong>Personality:</strong> {res.personality}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interview;

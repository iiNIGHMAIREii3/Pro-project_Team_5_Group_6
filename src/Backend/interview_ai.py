import cv2
import numpy as np
import tensorflow as tf
import pyaudio
import wave
import threading
import time
import json
import random
from transformers import pipeline

class InterviewAISystem:
    def __init__(self):
        # Initialize YOLO model for object and facial expression detection
        self.yolo_model = self.load_yolo_model()
        
        # Initialize speech recognition and voice analysis
        self.speech_recognition = self.initialize_speech_recognition()
        
        # Initialize sentiment analysis for text
        self.sentiment_analyzer = pipeline("sentiment-analysis")
        
        # Load interview questions
        self.questions = self.load_interview_questions()
        
        # Results storage
        self.visual_emotion_results = []
        self.voice_emotion_results = []
        self.text_sentiment_results = []
        self.responses = []
        self.person_feeling_final_result = {}
        
        # Recording state
        self.is_recording = False
        self.audio_thread = None
        self.video_thread = None
        
    def load_yolo_model(self):
        """Load YOLO model for facial detection and expression analysis"""
        # Using YOLOv5 for face detection and expression analysis
        model = cv2.dnn.readNetFromDarknet("yolov4-face.cfg", "yolov4-face.weights")
        
        # Set backend and target
        model.setPreferableBackend(cv2.dnn.DNN_BACKEND_CUDA)
        model.setPreferableTarget(cv2.dnn.DNN_TARGET_CUDA)
        
        return model
    
    def initialize_speech_recognition(self):
        """Initialize speech recognition system"""
        # Placeholder for speech recognition system
        # In a real implementation, this would use a library like SpeechRecognition
        return None
    
    def load_interview_questions(self):
        """Load interview questions from a JSON file or define them here"""
        return [
            "Tell me about a time when you faced a difficult challenge at work.",
            "How do you handle stress and pressure?",
            "What are your greatest strengths and weaknesses?",
            "Where do you see yourself in five years?",
            "Describe a situation where you had to make a difficult decision.",
            "How do you handle criticism?",
            "What motivates you to do your best?",
            "Tell me about a time you disagreed with a supervisor.",
            "How would your colleagues describe your personality?",
            "What are you passionate about outside of work?"
        ]
    
    def detect_emotion_from_frame(self, frame):
        """Detect facial expressions and emotions using YOLO"""
        # Preprocess the image for YOLO
        blob = cv2.dnn.blobFromImage(frame, 1/255.0, (416, 416), swapRB=True, crop=False)
        self.yolo_model.setInput(blob)
        
        # Get detection layers
        layer_names = self.yolo_model.getLayerNames()
        output_layers = [layer_names[i - 1] for i in self.yolo_model.getUnconnectedOutLayers()]
        
        # Forward pass
        outputs = self.yolo_model.forward(output_layers)
        
        # Process outputs
        faces = []
        emotions = []
        
        # Process each output layer
        for output in outputs:
            for detection in output:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                
                if confidence > 0.5:
                    # Extract bounding box
                    center_x = int(detection[0] * frame.shape[1])
                    center_y = int(detection[1] * frame.shape[0])
                    w = int(detection[2] * frame.shape[1])
                    h = int(detection[3] * frame.shape[0])
                    
                    # Rectangle coordinates
                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)
                    
                    faces.append([x, y, w, h])
                    
                    # This is a simplified example - in a real system, we'd have a more
                    # sophisticated emotion classification based on facial features
                    emotion_mapping = {
                        0: "neutral",
                        1: "happy",
                        2: "sad",
                        3: "angry",
                        4: "surprised",
                        5: "fearful",
                        6: "disgusted"
                    }
                    
                    # Simulated emotion detection (in a real system, this would be more complex)
                    emotion_class = class_id % 7  # Simplified mapping for this example
                    emotions.append(emotion_mapping[emotion_class])
        
        # Return the detected faces and emotions
        return faces, emotions
    
    def analyze_voice_emotion(self, audio_data):
        """Analyze emotion from voice data"""
        # This is a placeholder function
        # In a real implementation, this would use a voice emotion recognition model
        
        # Simulated voice emotion analysis
        emotions = ["neutral", "happy", "sad", "angry", "excited", "nervous"]
        confidence_scores = np.random.rand(len(emotions))
        confidence_scores = confidence_scores / np.sum(confidence_scores)
        
        emotion_dict = {emotion: float(score) for emotion, score in zip(emotions, confidence_scores)}
        dominant_emotion = max(emotion_dict, key=emotion_dict.get)
        
        return {
            "dominant_emotion": dominant_emotion,
            "emotion_scores": emotion_dict
        }
    
    def transcribe_audio(self, audio_data):
        """Transcribe audio to text"""
        # This is a placeholder function
        # In a real implementation, this would use a speech recognition model
        
        # For this example, we'll simulate a transcription
        return "This is a simulated transcription of the interview response."
    
    def analyze_text_sentiment(self, text):
        """Analyze sentiment of text response"""
        result = self.sentiment_analyzer(text)
        return result[0]
    
    def start_recording(self):
        """Start recording audio and video for analysis"""
        self.is_recording = True
        
        # Start audio recording thread
        self.audio_thread = threading.Thread(target=self.record_audio)
        self.audio_thread.start()
        
        # Start video recording thread
        self.video_thread = threading.Thread(target=self.record_video)
        self.video_thread.start()
    
    def stop_recording(self):
        """Stop recording audio and video"""
        self.is_recording = False
        
        # Wait for threads to complete
        if self.audio_thread:
            self.audio_thread.join()
        
        if self.video_thread:
            self.video_thread.join()
    
    def record_audio(self):
        """Record audio for analysis"""
        # This is a simplified example
        # In a real implementation, this would capture audio from a microphone
        
        # Simulate audio recording
        while self.is_recording:
            # Simulated audio data
            audio_data = np.random.rand(16000)  # 1 second of audio at 16kHz
            
            # Analyze voice emotion
            emotion_result = self.analyze_voice_emotion(audio_data)
            self.voice_emotion_results.append(emotion_result)
            
            time.sleep(1)  # Simulate processing time
    
    def record_video(self):
        """Record video for analysis"""
        # This is a simplified example
        # In a real implementation, this would capture video from a camera
        
        # Open webcam
        cap = cv2.VideoCapture(0)
        
        if not cap.isOpened():
            print("Error: Could not open webcam")
            return
        
        while self.is_recording:
            # Capture frame-by-frame
            ret, frame = cap.read()
            
            if not ret:
                print("Error: Can't receive frame")
                break
            
            # Detect emotions from the frame
            faces, emotions = self.detect_emotion_from_frame(frame)
            
            # Add results to storage
            if emotions:
                self.visual_emotion_results.append({
                    "timestamp": time.time(),
                    "emotions": emotions
                })
            
            # Display the frame with detected faces
            for (x, y, w, h), emotion in zip(faces, emotions):
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
                cv2.putText(frame, emotion, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (36, 255, 12), 2)
            
            # Display the resulting frame
            cv2.imshow('Interview Analysis', frame)
            
            # Break the loop on 'q' key press
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        
        # Release the capture and close windows
        cap.release()
        cv2.destroyAllWindows()
    
    def conduct_interview(self):
        """Conduct the interview and analyze responses"""
        print("=== AI Interview System ===")
        print("This system will ask questions and analyze your responses.")
        print("Press Ctrl+C to end the interview at any time.\n")
        
        try:
            for i, question in enumerate(self.questions):
                print(f"Question {i+1}: {question}")
                
                # Start recording
                self.start_recording()
                
                # Wait for user to respond (in a real system, this would detect silence)
                input("Press Enter when you've finished answering...")
                
                # Stop recording
                self.stop_recording()
                
                # Simulate getting the transcription
                transcription = f"Simulated response to question: {question}"
                self.responses.append(transcription)
                
                # Analyze text sentiment
                sentiment = self.analyze_text_sentiment(transcription)
                self.text_sentiment_results.append(sentiment)
                
                print(f"Response recorded. Analyzing...\n")
                
            print("Interview complete. Generating final analysis...")
            self.generate_final_result()
            self.display_results()
            
        except KeyboardInterrupt:
            print("\nInterview terminated by user.")
            self.stop_recording()
            self.generate_final_result()
            self.display_results()
    
    def generate_final_result(self):
        """Generate the final personality assessment"""
        # Process all collected data to generate a comprehensive personality profile
        
        # Aggregating visual emotions
        visual_emotions = {}
        for result in self.visual_emotion_results:
            for emotion in result["emotions"]:
                visual_emotions[emotion] = visual_emotions.get(emotion, 0) + 1
        
        # Normalize visual emotions
        total_visual = sum(visual_emotions.values()) or 1  # Avoid division by zero
        visual_emotions = {k: v/total_visual for k, v in visual_emotions.items()}
        
        # Aggregating voice emotions
        voice_emotions = {}
        for result in self.voice_emotion_results:
            emotion = result["dominant_emotion"]
            voice_emotions[emotion] = voice_emotions.get(emotion, 0) + 1
        
        # Normalize voice emotions
        total_voice = sum(voice_emotions.values()) or 1  # Avoid division by zero
        voice_emotions = {k: v/total_voice for k, v in voice_emotions.items()}
        
        # Aggregating text sentiments
        text_sentiments = {
            "positive": 0,
            "negative": 0,
            "neutral": 0
        }
        
        for result in self.text_sentiment_results:
            label = result["label"].lower()
            text_sentiments[label] = text_sentiments.get(label, 0) + result["score"]
        
        # Normalize text sentiments
        total_text = len(self.text_sentiment_results) or 1  # Avoid division by zero
        text_sentiments = {k: v/total_text for k, v in text_sentiments.items()}
        
        # Generate personality traits based on emotional responses
        personality_traits = self.derive_personality_traits(visual_emotions, voice_emotions, text_sentiments)
        
        # Store final result
        self.person_feeling_final_result = {
            "visual_emotions": visual_emotions,
            "voice_emotions": voice_emotions,
            "text_sentiments": text_sentiments,
            "personality_traits": personality_traits,
            "interview_timestamp": time.time(),
            "overall_assessment": self.generate_overall_assessment(personality_traits)
        }
    
    def derive_personality_traits(self, visual_emotions, voice_emotions, text_sentiments):
        """Derive personality traits from emotional data"""
        traits = {}
        
        # This is a simplified mapping - in a real system, this would be more sophisticated
        # and based on psychological models
        
        # Extraversion vs. Introversion
        happy_ratio = visual_emotions.get("happy", 0) + voice_emotions.get("happy", 0) + voice_emotions.get("excited", 0)
        extraversion_score = 0.5 + (happy_ratio - 0.3) * 0.7  # Normalize to 0-1 range
        extraversion_score = max(0, min(1, extraversion_score))  # Clamp to 0-1
        traits["extraversion"] = extraversion_score
        
        # Neuroticism
        negative_emotions = sum([
            visual_emotions.get("sad", 0),
            visual_emotions.get("angry", 0),
            visual_emotions.get("fearful", 0),
            voice_emotions.get("sad", 0),
            voice_emotions.get("angry", 0),
            voice_emotions.get("nervous", 0),
            text_sentiments.get("negative", 0)
        ])
        neuroticism_score = 0.5 + (negative_emotions - 0.3) * 0.8
        neuroticism_score = max(0, min(1, neuroticism_score))
        traits["neuroticism"] = neuroticism_score
        
        # Openness
        # For simplicity, using variation in emotions as a proxy for openness
        unique_emotions = len(set(visual_emotions.keys()) | set(voice_emotions.keys()))
        openness_score = unique_emotions / 10  # Normalize by max possible unique emotions
        openness_score = max(0, min(1, openness_score))
        traits["openness"] = openness_score
        
        # Agreeableness
        positive_ratio = text_sentiments.get("positive", 0) - text_sentiments.get("negative", 0)
        agreeableness_score = 0.5 + positive_ratio * 0.8
        agreeableness_score = max(0, min(1, agreeableness_score))
        traits["agreeableness"] = agreeableness_score
        
        # Conscientiousness (harder to detect from emotions alone)
        # As a placeholder, using neutral emotions as a proxy
        neutral_emotions = visual_emotions.get("neutral", 0) + voice_emotions.get("neutral", 0)
        conscientiousness_score = 0.5 + (neutral_emotions - 0.3) * 0.5
        conscientiousness_score = max(0, min(1, conscientiousness_score))
        traits["conscientiousness"] = conscientiousness_score
        
        return traits
    
    def generate_overall_assessment(self, personality_traits):
        """Generate an overall assessment based on personality traits"""
        # Simplified assessment generation
        assessment = []
        
        # Extraversion
        if personality_traits["extraversion"] > 0.7:
            assessment.append("The person appears to be highly extraverted and sociable.")
        elif personality_traits["extraversion"] < 0.3:
            assessment.append("The person appears to be more introverted and reserved.")
        else:
            assessment.append("The person shows a balance between extraversion and introversion.")
        
        # Neuroticism
        if personality_traits["neuroticism"] > 0.7:
            assessment.append("The person shows signs of emotional sensitivity and may experience stress more intensely.")
        elif personality_traits["neuroticism"] < 0.3:
            assessment.append("The person appears emotionally stable and calm under pressure.")
        else:
            assessment.append("The person shows a moderate level of emotional reactivity.")
        
        # Openness
        if personality_traits["openness"] > 0.7:
            assessment.append("The person appears open to new experiences and ideas.")
        elif personality_traits["openness"] < 0.3:
            assessment.append("The person may prefer familiar routines and conventional approaches.")
        else:
            assessment.append("The person shows a moderate level of openness to new experiences.")
        
        # Agreeableness
        if personality_traits["agreeableness"] > 0.7:
            assessment.append("The person appears cooperative and considerate of others.")
        elif personality_traits["agreeableness"] < 0.3:
            assessment.append("The person may be more competitive and task-focused than people-focused.")
        else:
            assessment.append("The person shows a moderate level of agreeableness and cooperation.")
        
        # Conscientiousness
        if personality_traits["conscientiousness"] > 0.7:
            assessment.append("The person appears organized and detail-oriented.")
        elif personality_traits["conscientiousness"] < 0.3:
            assessment.append("The person may be more flexible and spontaneous than organized.")
        else:
            assessment.append("The person shows a moderate level of conscientiousness.")
        
        # Add a bit about behavioral patterns
        lie_indicators = random.random() < 0.3  # Simplified lie detection simulation
        if lie_indicators:
            assessment.append("Note: The person showed some indicators of potential deception during the interview, "
                              "such as inconsistent emotional responses or mismatches between verbal and non-verbal cues.")
        
        return assessment
    
    def display_results(self):
        """Display the final results"""
        print("\n=== Interview Analysis Results ===\n")
        
        # Print personality traits
        print("Personality Trait Scores (0-1 scale):")
        for trait, score in self.person_feeling_final_result["personality_traits"].items():
            print(f"- {trait.capitalize()}: {score:.2f}")
        
        # Print overall assessment
        print("\nOverall Assessment:")
        for point in self.person_feeling_final_result["overall_assessment"]:
            print(f"- {point}")
        
        # Print emotion summaries
        print("\nDominant Visual Emotions:")
        for emotion, score in sorted(self.person_feeling_final_result["visual_emotions"].items(), 
                                    key=lambda x: x[1], reverse=True)[:3]:
            print(f"- {emotion.capitalize()}: {score:.2f}")
        
        print("\nDominant Voice Emotions:")
        for emotion, score in sorted(self.person_feeling_final_result["voice_emotions"].items(), 
                                    key=lambda x: x[1], reverse=True)[:3]:
            print(f"- {emotion.capitalize()}: {score:.2f}")
        
        print("\nText Sentiment Analysis:")
        for sentiment, score in self.person_feeling_final_result["text_sentiments"].items():
            print(f"- {sentiment.capitalize()}: {score:.2f}")
        
        # Save results to file
        with open("interview_results.json", "w") as f:
            json.dump(self.person_feeling_final_result, f, indent=4)
        
        print("\nResults have been saved to 'interview_results.json'")


# Run the interview system
if __name__ == "__main__":
    interview_system = InterviewAISystem()
    interview_system.conduct_interview()
    
    # The final results are stored in:
    person_feeling_final_result = interview_system.person_feeling_final_result
from flask import Flask, request, jsonify
from flask_cors import CORS
from interview_ai import InterviewAISystem
from database import Database

app = Flask(__name__)
CORS(app)

# Initialize systems
interview_ai = InterviewAISystem()
db = Database()

@app.route('/api/interview', methods=['POST'])
def run_interview_analysis():
    try:
        data = request.get_json()
        video_path = data.get('video_path')
        audio_path = data.get('audio_path')
        transcript = data.get('transcript')

        results = interview_ai.run_interview(video_path, audio_path, transcript)

        return jsonify({'success': True, 'results': results})

    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    success, message = db.signup(username, password, email)
    return jsonify({'success': success, 'message': message})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    success, message = db.login(username, password)
    return jsonify({'success': success, 'message': message})

if __name__ == '__main__':
    app.run(debug=True)

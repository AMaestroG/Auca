import os
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

# Configure the Gemini API key
try:
    genai.configure(api_key=os.environ['GOOGLE_API_KEY'])
except KeyError:
    # This is a fallback for local development if the key isn't set,
    # but it's better to handle this more gracefully in a real app
    # or ensure the key is always set.
    print("Error: GOOGLE_API_KEY environment variable not set.")
    # You might want to raise an exception or exit if the key is critical
    # For now, we'll let it proceed, but API calls will fail.
    pass


# Initialize the generative model
# Adjust model_name as needed, e.g., 'gemini-pro' or other available models
try:
    model = genai.GenerativeModel('gemini-pro')
except Exception as e:
    print(f"Error initializing generative model: {e}")
    model = None # Ensure model is None if initialization fails

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    if not model:
        return jsonify({'error': 'Generative model not initialized. Check API key and model name.'}), 500

    user_message = request.json.get('message')
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    try:
        # For chat-like behavior, you might want to maintain conversation history.
        # For a simple request-response, just sending the message is fine.
        # response = model.generate_content(user_message)
        # return jsonify({'reply': response.text})

        # Start a chat session if you want to maintain context (history)
        chat = model.start_chat(history=[]) # You can load history here if needed
        response = chat.send_message(user_message)
        return jsonify({'reply': response.text})

    except Exception as e:
        # Log the full error for debugging
        print(f"Error during API call: {e}")
        # Provide a generic error message to the user
        return jsonify({'error': f'Failed to get response from AI: {str(e)}'}), 500

if __name__ == '__main__':
    # It's good practice to specify host and port, especially for development
    app.run(debug=True, host='0.0.0.0', port=5000)

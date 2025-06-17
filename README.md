# Gemini AI Chat with Flask

This is a simple web-based chat application that uses Flask for the backend and the Google Gemini API for AI-powered responses.

## Features

- Basic chat interface for sending and receiving messages.
- Integration with Google's Gemini Pro model.
- Asynchronous message handling using JavaScript `fetch`.

## Prerequisites

- Python 3.7+
- Access to Google AI Studio and a Gemini API Key.

## Setup and Running

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Set up your Google API Key:**
    You need to set the `GOOGLE_API_KEY` environment variable. Replace `YOUR_API_KEY` with your actual key.

    -   **Linux/macOS:**
        ```bash
        export GOOGLE_API_KEY="YOUR_API_KEY"
        ```
    -   **Windows (PowerShell):**
        ```powershell
        $env:GOOGLE_API_KEY="YOUR_API_KEY"
        ```
    -   **Windows (CMD):**
        ```cmd
        set GOOGLE_API_KEY=YOUR_API_KEY
        ```
    *Note: For persistent storage of the environment variable, you might want to add it to your shell's profile file (e.g., `.bashrc`, `.zshrc`) or system environment variables.*

3.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

4.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Run the Flask application:**
    ```bash
    python app.py
    ```
    The application will typically be available at `http://127.0.0.1:5000` or `http://0.0.0.0:5000`. Check your console output for the exact address.

## How it Works

-   The `app.py` file contains the Flask application logic:
    -   Serves the main chat interface (`index.html`).
    -   Provides a `/send_message` endpoint that receives user messages.
    -   Communicates with the Gemini API using the `google-generativeai` library.
-   The `templates/index.html` file provides the structure and basic styling for the chat window.
-   JavaScript within `index.html` handles sending messages to the backend and displaying responses without page reloads.

## Files

-   `app.py`: Main Flask application file.
-   `templates/index.html`: HTML template for the chat interface.
-   `requirements.txt`: Python dependencies.
-   `README.md`: This file.
-   `LICENSE`: Project license.

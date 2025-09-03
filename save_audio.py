import requests
import base64
import wave
import json
import os
import time


def generate_and_save_audio(text_to_speak, api_keys, output_filename="output.wav"):
    """
    Generates audio from text using the Gemini TTS API and saves it as a WAV file.

    Args:
        text_to_speak (str): The text you want to convert to speech.
        api_key (str): Your Google AI API key.
        output_filename (str, optional): The name of the output WAV file.
                                         Defaults to "output.wav".
    """
    _index = 0
    for _ in range(10):
        try:
            api_key = api_keys[_index]
            # The API endpoint for the Gemini TTS model
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key={api_key}"

            # The data to send in the request, including the text and voice settings
            payload = {
                "contents": [{
                    "parts": [{
                        "text": f"Say in a friendly, cheerful voice for a child: {text_to_speak}"
                    }]
                }],
                "generationConfig": {
                    "responseModalities": ["AUDIO"],
                    "speechConfig": {
                        "voiceConfig": {
                            "prebuiltVoiceConfig": {
                                "voiceName": "Puck"
                            }
                        }
                    }
                },
                "model": "gemini-2.5-flash-preview-tts"
            }

            headers = {
                'Content-Type': 'application/json'
            }

            # Make the POST request to the API
            response = requests.post(url, headers=headers, json=payload)
            response.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)

            # Parse the JSON response
            response_data = response.json()

            # Extract the base64 encoded audio data
            audio_data_base64 = response_data['candidates'][0]['content']['parts'][0]['inlineData']['data']

            # Decode the base64 string to get the raw PCM audio data
            pcm_data = base64.b64decode(audio_data_base64)

            # Get the sample rate from the MIME type
            mime_type = response_data['candidates'][0]['content']['parts'][0]['inlineData']['mimeType']
            sample_rate = int(mime_type.split('rate=')[1])

            # Save the PCM data as a WAV file
            with wave.open(output_filename, 'wb') as wav_file:
                wav_file.setnchannels(1)  # Mono audio
                wav_file.setsampwidth(2)  # 16-bit audio (2 bytes)
                wav_file.setframerate(sample_rate)
                wav_file.writeframes(pcm_data)

            print(f"Audio successfully saved to {output_filename}")
            return True

        except requests.exceptions.RequestException as e:
            print(f"An error occurred with the API request: {e}")
            _index += 1
            time.sleep(5)  # Wait for 60 seconds before retrying
            if _index >= len(api_keys):
                print("All API keys have been exhausted. Please check your API keys or network connection.")
                return False
        except (KeyError, IndexError) as e:
            print(f"Error parsing the API response: {e}")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")


API_KEYS = ["AIzaSyCx-9BeHzPAJWanCkDmrD14ZBtrc8A28TY",
            "AIzaSyAjVSy4RHwyIqL893D10Rk7eGgdPe45YmQ",
            "AIzaSyDkJxl0nmu2en6-UgOP07UU1TxfWq3hVg4",
            "AIzaSyA71091HCH7nQW0zE4bogWJ2-mDFxxb1mE",
            'AIzaSyAMOfk7OeLsoCFFD75bpTYwMDPjZ2_Yj60',
            "AIzaSyAFpg8xYh3CqFSkFrEROSakWDJh0q1AKjQ",
            "AIzaSyDMYzo9K2ayAfBFhaznFqeirVxEpEVWBHE",
            "AIzaSyCG6cbBTsUsXdxN-I4mWwGTx8-UDeblZoA"]
path_ = os.getcwd() + "/www"
# Read dictionary from file `vocabulary.json`
with open(path_ + '/vocabulary.json', 'r') as file:
    vocabulary = json.load(file)
for key, value in vocabulary.items():
    for _data in value:
        _keyword = _data['name']
        print(f"Generating audio for keyword: {_keyword}")
        if not os.path.isdir(path_ + "/sound/" + key):
            os.makedirs(path_+ "/sound/" + key, exist_ok=True)
        output_filename = path_ + f"/sound/{key}/{_keyword}.wav"
        if os.path.exists(output_filename):
            print(f"Audio file for '{_keyword}' already exists. Skipping generation.")
            continue
        # Generate and save the audio file
        generate_and_save_audio(_keyword, API_KEYS, output_filename=path_ + f"/sound/{key}/{_keyword}.wav")
        # break
    # break
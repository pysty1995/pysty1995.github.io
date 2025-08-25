document.addEventListener('DOMContentLoaded', () => {
    // --- DATA (WITH CORRECTED CARTOON IMAGES) ---
    let vocabulary = {};
    let allItems = [];
    let currentCategory = '';
    async function loadVocabulary() {
        try {
            const response = await fetch('./vocabulary.json');
            vocabulary = await response.json();
            allItems = [].concat(...Object.values(vocabulary));
            // Once data is loaded, initialize the app
            initializeApp();
        } catch (error) {
            console.error("Failed to load vocabulary:", error);
            document.body.innerHTML = '<div class="text-white text-center p-8">Failed to load vocabulary data. Please refresh the page.</div>';
        }
    }

    // --- ELEMENTS ---
    const apiKeyAlert = document.getElementById('api-key-alert');
    const vocabSection = document.getElementById('vocabulary-section');
    const categoryButtonsContainer = document.getElementById('category-buttons');
    const vocabGridContainer = document.getElementById('vocabulary-grid-container');
    const quizSection = document.getElementById('quiz-section');
    const storySection = document.getElementById('story-section');
    const riddleSection = document.getElementById('riddle-section');
    const drawingSection = document.getElementById('drawing-section');
    const chatSection = document.getElementById('chat-section');
    const songSection = document.getElementById('song-section');
    const sentenceSection = document.getElementById('sentence-section');
    const spellingSection = document.getElementById('spelling-section');
    const pictureDetectiveSection = document.getElementById('picture-detective-section');
    const tongueTwisterSection = document.getElementById('tongue-twister-section');
    const rhymingSection = document.getElementById('rhyming-section');
    const rhymingFeedback = document.getElementById('rhyming-feedback');
    const storyCreatorSection = document.getElementById('story-creator-section');
    const whatsDifferentSection = document.getElementById('whats-different-section');
    const showVocabBtn = document.getElementById('show-vocab-btn');
    const showQuizBtn = document.getElementById('show-quiz-btn');
    const showStoryBtn = document.getElementById('show-story-btn');
    const showRiddleBtn = document.getElementById('show-riddle-btn');
    const showDrawingBtn = document.getElementById('show-drawing-btn');
    const showChatBtn = document.getElementById('show-chat-btn');
    const showSongBtn = document.getElementById('show-song-btn');
    const showSentenceBtn = document.getElementById('show-sentence-btn');
    const showSpellingBtn = document.getElementById('show-spelling-btn');
    const showPictureDetectiveBtn = document.getElementById('show-picture-detective-btn');
    const showTongueTwisterBtn = document.getElementById('show-tongue-twister-btn');
    const showRhymingBtn = document.getElementById('show-rhyming-btn');
    const showStoryCreatorBtn = document.getElementById('show-story-creator-btn');
    const showWhatsDifferentBtn = document.getElementById('show-whats-different-btn');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizStartScreen = document.getElementById('quiz-start-screen');
    const quizGameScreen = document.getElementById('quiz-game-screen');
    const scoreEl = document.getElementById('score');
    const questionNumberEl = document.getElementById('question-number');
    const quizImageContainer = document.getElementById('quiz-image-container');
    const quizOptionsContainer = document.getElementById('quiz-options-container');
    const quizFeedback = document.getElementById('quiz-feedback');
    const cloudLayer = document.getElementById('cloud-layer');
    const generateStoryBtn = document.getElementById('generate-story-btn');
    const continueStoryBtn = document.getElementById('continue-story-btn');
    const storyOutput = document.getElementById('story-output');
    const storyAudioControls = document.getElementById('story-audio-controls');
    const readStoryBtn = document.getElementById('read-story-btn');
    const audioPlayerContainer = document.getElementById('audio-player-container');
    const startRiddleBtn = document.getElementById('start-riddle-btn');
    const riddleStartScreen = document.getElementById('riddle-start-screen');
    const riddleGameScreen = document.getElementById('riddle-game-screen');
    const riddleText = document.getElementById('riddle-text');
    const riddleOptionsContainer = document.getElementById('riddle-options-container');
    const riddleFeedback = document.getElementById('riddle-feedback');
    const funFactModal = document.getElementById('fun-fact-modal');
    const funFactTitle = document.getElementById('fun-fact-title');
    const funFactContent = document.getElementById('fun-fact-content');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const readFactBtn = document.getElementById('read-fact-btn');
    const factAudioPlayer = document.getElementById('fact-audio-player');
    const generateDrawingBtn = document.getElementById('generate-drawing-btn');
    const drawingPromptInput = document.getElementById('drawing-prompt');
    const drawingOutput = document.getElementById('drawing-output');
    const downloadDrawingBtn = document.getElementById('download-drawing-btn');
    const storyFromDrawingBtn = document.getElementById('story-from-drawing-btn');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatLog = document.getElementById('chat-log');
    const chatSendBtn = document.getElementById('chat-send-btn');
    const songWordsSelection = document.getElementById('song-words-selection');
    const generateSongBtn = document.getElementById('generate-song-btn');
    const songOutput = document.getElementById('song-output');
    const songAudioControls = document.getElementById('song-audio-controls');
    const readSongBtn = document.getElementById('read-song-btn');
    const songAudioPlayer = document.getElementById('song-audio-player');
    const sentenceAnswerArea = document.getElementById('sentence-answer-area');
    const sentenceWordsContainer = document.getElementById('sentence-words-container');
    const sentenceCheckBtn = document.getElementById('sentence-check-btn');
    const sentenceClearBtn = document.getElementById('sentence-clear-btn');
    const sentenceNewBtn = document.getElementById('sentence-new-btn');
    const sentenceFeedback = document.getElementById('sentence-feedback');
    const spellingStartScreen = document.getElementById('spelling-start-screen');
    const startSpellingBtn = document.getElementById('start-spelling-btn');
    const spellingGameScreen = document.getElementById('spelling-game-screen');
    const spellingScoreEl = document.getElementById('spelling-score');
    const spellingListenBtn = document.getElementById('spelling-listen-btn');
    const spellingAudioPlayer = document.getElementById('spelling-audio-player');
    const spellingInput = document.getElementById('spelling-input');
    const spellingCheckBtn = document.getElementById('spelling-check-btn');
    const spellingFeedback = document.getElementById('spelling-feedback');
    const spellingNextBtn = document.getElementById('spelling-next-btn');
    const detectiveImageContainer = document.getElementById('detective-image-container');
    const detectiveDescriptionInput = document.getElementById('detective-description-input');
    const detectiveFeedback = document.getElementById('detective-feedback');
    const detectiveCheckBtn = document.getElementById('detective-check-btn');
    const detectiveNewBtn = document.getElementById('detective-new-btn');
    const generateTwisterBtn = document.getElementById('generate-twister-btn');
    const twisterOutput = document.getElementById('twister-output');
    const twisterAudioControls = document.getElementById('twister-audio-controls');
    const readTwisterBtn = document.getElementById('read-twister-btn');
    const twisterAudioPlayerContainer = document.getElementById('twister-audio-player-container');
    const rhymingWordDisplay = document.getElementById('rhyming-word-display');
    const rhymingInput = document.getElementById('rhyming-input');
    const rhymingCheckBtn = document.getElementById('rhyming-check-btn');
    const rhymingNewBtn = document.getElementById('rhyming-new-btn');
    const storyCreatorStart = document.getElementById('story-creator-start');
    const storyCreatorStartBtn = document.getElementById('story-creator-start-btn');
    const storyCreatorInputs = document.getElementById('story-creator-inputs');
    const storyCreatorFields = document.getElementById('story-creator-fields');
    const storyCreatorGenerateBtn = document.getElementById('story-creator-generate-btn');
    const storyCreatorOutput = document.getElementById('story-creator-output');
    const storyCreatorResult = document.getElementById('story-creator-result');
    const storyCreatorReadBtn = document.getElementById('story-creator-read-btn');
    const storyCreatorNewBtn = document.getElementById('story-creator-new-btn');
    const storyCreatorAudioPlayer = document.getElementById('story-creator-audio-player');
    const whatsDifferentImages = document.getElementById('whats-different-images');
    const whatsDifferentInput = document.getElementById('whats-different-input');
    const whatsDifferentCheckBtn = document.getElementById('whats-different-check-btn');
    const whatsDifferentFeedback = document.getElementById('whats-different-feedback');
    const whatsDifferentNewBtn = document.getElementById('whats-different-new-btn');
    const showCategoryFunBtn = document.getElementById('show-category-fun-btn');

    let quizState = {questions: [], currentQuestionIndex: 0, score: 0, isAnswered: false};
    let storyState = {currentStory: ''};
    let riddleState = {isAnswered: false};
    let sentenceState = {correctSentence: '', userSentence: []};
    let spellingState = {currentWord: '', score: 0};
    let detectiveState = {originalPrompt: ''};
    let drawingState = {lastImageBase64: ''};
    let rhymingState = {currentWord: ''};
    let rhymingGameStarted = false;
    let storyCreatorState = {wordTypes: [], userWords: {}};
    let whatsDifferentState = {image1: '', image2: ''};
    let chatHistory = [];

    let sentenceGameStarted = false;
    let detectiveGameStarted = false;
    let whatsDifferentGameStarted = false;
    const audioCache = new Map();

    // --- NAVIGATION ---
    function hideAllSections() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => section.classList.add('hidden'));
    }

    function showVocab() {
        hideAllSections();
        vocabSection.classList.remove('hidden');
    }

    function showQuiz() {
        hideAllSections();
        quizSection.classList.remove('hidden');
    }

    function showStory() {
        hideAllSections();
        storySection.classList.remove('hidden');
    }

    function showRiddle() {
        hideAllSections();
        riddleSection.classList.remove('hidden');
    }

    function showDrawing() {
        hideAllSections();
        drawingSection.classList.remove('hidden');
    }

    function showChat() {
        hideAllSections();
        chatSection.classList.remove('hidden');
    }

    function showSong() {
        hideAllSections();
        songSection.classList.remove('hidden');
    }

    function showSentence() {
        hideAllSections();
        sentenceSection.classList.remove('hidden');
        if (!sentenceGameStarted) {
            startSentenceGame();
            sentenceGameStarted = true;
        }
    }

    function showSpelling() {
        hideAllSections();
        spellingSection.classList.remove('hidden');
    }

    function showPictureDetective() {
        hideAllSections();
        pictureDetectiveSection.classList.remove('hidden');
        if (!detectiveGameStarted) {
            startPictureDetectiveGame();
            detectiveGameStarted = true;
        }
    }

    function showTongueTwister() {
        hideAllSections();
        tongueTwisterSection.classList.remove('hidden');
    }

    function showStoryCreator() {
        hideAllSections();
        storyCreatorSection.classList.remove('hidden');
    }

    function showWhatsDifferent() {
        hideAllSections();
        whatsDifferentSection.classList.remove('hidden');
        if (!whatsDifferentGameStarted) {
            startWhatsDifferentGame();
            whatsDifferentGameStarted = true;
        }
    }


    // --- GEMINI API & HELPERS ---
    const API_KEY = "AIzaSyCx-9BeHzPAJWanCkDmrD14ZBtrc8A28TY"; // <-- PASTE YOUR API KEY HERE

    async function callGeminiApi(apiUrl, payload, retries = 3, delay = 1000) {
        if (!API_KEY) {
            apiKeyAlert.classList.remove('hidden');
            throw new Error("API Key is missing.");
        }
        apiKeyAlert.classList.add('hidden');

        for (let i = 0; i < retries; i++) {
            try {
                const response = await fetch(apiUrl, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)});
                if (!response.ok) {
                    let errorBody;
                    try {
                        errorBody = await response.json();
                    } catch (e) {
                        errorBody = {error: {message: await response.text()}};
                    }
                    console.error('API Error:', errorBody);
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const text = await response.text();
                if (!text) {
                    console.warn("API returned an empty response for payload:", payload);
                    return {candidates: [], predictions: []};
                }
                return JSON.parse(text);
            } catch (error) {
                console.error(`Attempt ${i + 1} failed. Retrying in ${delay}ms...`, error);
                if (i === retries - 1) throw error;
                await new Promise(res => setTimeout(res, delay));
                delay *= 2;
            }
        }
    }

    function base64ToArrayBuffer(base64) {
        const binaryString = window.atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    function pcmToWav(pcmData, numChannels, sampleRate) {
        const byteRate = sampleRate * numChannels * 2;
        const blockAlign = numChannels * 2;
        const dataSize = pcmData.length * 2;
        const buffer = new ArrayBuffer(44 + dataSize);
        const view = new DataView(buffer);

        function writeString(view, offset, string) {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        }

        writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + dataSize, true);
        writeString(view, 8, 'WAVE');
        writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, byteRate, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, 16, true);
        writeString(view, 36, 'data');
        view.setUint32(40, dataSize, true);
        for (let i = 0; i < pcmData.length; i++) {
            view.setInt16(44 + i * 2, pcmData[i], true);
        }
        return new Blob([view], {type: 'audio/wav'});
    }

    // --- TTS & AUDIO (REFACTORED FOR SPEED) ---
    let isSpeaking = false;

    async function generateAudioUrl(text) {
        if (audioCache.has(text)) {
            return audioCache.get(text);
        }
        try {
            const payload = {contents: [{parts: [{text: `Say in a friendly, cheerful voice for a child: ${text}`}]}], generationConfig: {responseModalities: ["AUDIO"], speechConfig: {voiceConfig: {prebuiltVoiceConfig: {voiceName: "Puck"}}}}, model: "gemini-2.5-flash-preview-tts"};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            const part = result?.candidates?.[0]?.content?.parts?.[0];
            const audioData = part?.inlineData?.data;
            const mimeType = part?.inlineData?.mimeType;

            if (audioData && mimeType && mimeType.startsWith("audio/")) {
                const rateMatch = mimeType.match(/rate=(\d+)/);
                if (!rateMatch) {
                    throw new Error("Sample rate not found in MIME type.");
                }
                const sampleRate = parseInt(rateMatch[1], 10);
                const pcmData = base64ToArrayBuffer(audioData);
                const pcm16 = new Int16Array(pcmData);
                const wavBlob = pcmToWav(pcm16, 1, sampleRate);
                const audioUrl = URL.createObjectURL(wavBlob);
                audioCache.set(text, audioUrl);
                return audioUrl;
            } else {
                throw new Error("Invalid audio data in response.");
            }
        } catch (error) {
            console.error(`Failed to generate TTS for "${text}":`, error);
            return null;
        }
    }

    async function speak(text) {
        if (isSpeaking) return;
        isSpeaking = true;

        const audioUrl = await generateAudioUrl(text);
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
            audio.onended = () => {
                isSpeaking = false;
            };
            audio.onerror = () => {
                isSpeaking = false;
            };
        } else {
            isSpeaking = false;
        }
    }

    async function speakVocabulary(text) {
        let audioUrl = "/sound/" + currentCategory + "/" + text + ".wav";
        // check if audio file exists in the local sound folder
        try {
            const response = await fetch(audioUrl);
            if (!response.ok) {
                audioUrl = await generateAudioUrl(text);
            }
        } catch (error) {
            console.error(`Failed to fetch audio for "${text}":`, error);
            audioUrl = await generateAudioUrl(text);
        }
        if (isSpeaking) return;
        isSpeaking = true;

        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
            audio.onended = () => {
                isSpeaking = false;
            };
            audio.onerror = () => {
                isSpeaking = false;
            };
        } else {
            isSpeaking = false;
        }
    }

    async function readAloud(text, button, playerContainer) {
        if (button && button.disabled) return;
        let originalContent;
        if (button) {
            originalContent = button.innerHTML;
            button.disabled = true;
            button.innerHTML = '<div class="loader" style="width:16px;height:16px;border-width:2px;display:inline-block;margin:0;"></div>';
        }
        if (playerContainer) playerContainer.innerHTML = '';

        const audioUrl = await generateAudioUrl(text);

        if (audioUrl) {
            const audio = new Audio(audioUrl);
            if (playerContainer) playerContainer.appendChild(audio);
            audio.play();
            audio.onended = () => {
                if (button) {
                    button.disabled = false;
                    button.innerHTML = originalContent;
                }
            };
        } else {
            if (playerContainer) playerContainer.innerHTML = '<p class="text-red-500 text-sm">Could not generate audio.</p>';
            if (button) {
                button.disabled = false;
                button.innerHTML = originalContent;
            }
        }
    }

    // --- AI FEATURES ---
    async function generateStory() {
        generateStoryBtn.disabled = true;
        continueStoryBtn.classList.add('hidden');
        generateStoryBtn.innerHTML = 'Thinking... <div class="loader"></div>';
        storyOutput.innerHTML = '<p class="text-gray-500">Our AI storyteller is thinking of a tale...</p>';
        storyAudioControls.classList.add('hidden');
        audioPlayerContainer.innerHTML = '';
        try {
            const shuffled = shuffleArray([...allItems]);
            const storyWords = shuffled.slice(0, 3).map(item => item.name);
            const prompt = `Write a short, simple, and fun story for a 5-year-old child. The story must include these three things: a ${storyWords[0]}, a ${storyWords[1]}, and a ${storyWords[2]}. Make the story cheerful, easy to understand, and end on a happy note.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const storyText = result.candidates[0].content.parts[0].text;
                storyOutput.innerHTML = storyText.replace(/\n/g, '<br>');
                storyState.currentStory = storyText;
                storyAudioControls.classList.remove('hidden');
                continueStoryBtn.classList.remove('hidden');
            } else {
                storyOutput.innerHTML = '<p class="text-red-500">The storyteller got a little stuck. Please try again!</p>';
            }
        } catch (error) {
            console.error("Failed to generate story:", error);
            storyOutput.innerHTML = '<p class="text-red-500">Oops! Something went wrong. Please check the console and try again.</p>';
        } finally {
            generateStoryBtn.disabled = false;
            generateStoryBtn.textContent = 'Tell me a story!';
        }
    }

    async function continueStory() {
        continueStoryBtn.disabled = true;
        continueStoryBtn.innerHTML = 'Thinking... <div class="loader"></div>';
        try {
            const prompt = `This is a children's story:\n\n${storyState.currentStory}\n\nContinue the story with one or two more simple, fun paragraphs. Make it exciting and happy.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const continuationText = result.candidates[0].content.parts[0].text;
                storyState.currentStory += "\n\n" + continuationText;
                storyOutput.innerHTML = storyState.currentStory.replace(/\n/g, '<br>');
            } else {
                alert("The storyteller couldn't think of what happens next! Try again.");
            }
        } catch (error) {
            console.error("Failed to continue story:", error);
            alert("Oops! Something went wrong while continuing the story.");
        } finally {
            continueStoryBtn.disabled = false;
            continueStoryBtn.textContent = 'What happens next?';
        }
    }

    async function generateImage(prompt) {
        const payload = {
            contents: [{
                parts: [{text: prompt}]
            }],
            generationConfig: {
                responseModalities: ['TEXT', 'IMAGE']
            },
        };
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${API_KEY}`;
        const result = await callGeminiApi(apiUrl, payload);
        const base64Data = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
        if (base64Data) {
            return `data:image/png;base64,${base64Data}`;
        } else {
            throw new Error("No image data in response.");
        }
    }

    async function handleChatSubmit(e) {
        e.preventDefault();
        const userInput = chatInput.value.trim();
        if (!userInput) return;
        chatInput.value = '';
        chatSendBtn.disabled = true;
        addChatMessage(userInput, 'user');
        try {
            const systemPrompt = "You are a friendly, cartoon parrot named Pip. You love to talk to children. Keep your answers short, simple, and cheerful, using easy words. Always be encouraging.";
            chatHistory.push({role: "user", parts: [{text: userInput}]});
            const payload = {
                contents: [...chatHistory],
                system_instruction: {
                    parts: [{text: systemPrompt}]
                }
            };
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const aiResponse = result.candidates[0].content.parts[0].text;
                chatHistory.push({role: "model", parts: [{text: aiResponse}]});
                addChatMessage(aiResponse, 'ai');
            } else {
                addChatMessage("Squawk! I'm a little tongue-tied. Try asking something else!", 'ai');
            }
        } catch (error) {
            console.error("Chat error:", error);
            addChatMessage("Oh no! My beak is tired. Let's try again in a moment.", 'ai');
        } finally {
            chatSendBtn.disabled = false;
        }
    }

    function addChatMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender === 'user' ? 'user-message' : 'ai-message'}`;
        const textSpan = document.createElement('span');
        textSpan.textContent = message;
        messageDiv.appendChild(textSpan);
        if (sender === 'ai') {
            const readBtn = document.createElement('button');
            readBtn.textContent = '🔊';
            readBtn.className = 'ml-2';
            readBtn.onclick = () => readAloud(message, readBtn, messageDiv);
            messageDiv.appendChild(readBtn);
        }
        chatLog.appendChild(messageDiv);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    async function generateSong() {
        const selectedWords = Array.from(songWordsSelection.querySelectorAll('.selected')).map(btn => btn.textContent);
        if (selectedWords.length === 0) {
            alert('Please pick at least one word for the song!');
            return;
        }
        generateSongBtn.disabled = true;
        generateSongBtn.innerHTML = 'Writing... <div class="loader"></div>';
        songOutput.innerHTML = '<p class="text-gray-500">The AI is writing a song...</p>';
        songAudioControls.classList.add('hidden');
        songAudioPlayer.innerHTML = '';
        try {
            const prompt = `Write a very simple, 4-line nursery rhyme for a child that includes the words: ${selectedWords.join(', ')}. Make it cheerful and easy to sing.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const songText = result.candidates[0].content.parts[0].text.replace(/\n/g, '<br>');
                songOutput.innerHTML = songText;
                songAudioControls.classList.remove('hidden');
            } else {
                songOutput.innerHTML = '<p class="text-red-500">The songwriter is taking a break. Please try again!</p>';
            }
        } catch (error) {
            console.error("Failed to generate song:", error);
            songOutput.innerHTML = '<p class="text-red-500">Oops! Something went wrong.</p>';
        } finally {
            generateSongBtn.disabled = false;
            generateSongBtn.textContent = 'Write a Song!';
        }
    }

    function populateSongWords() {
        songWordsSelection.innerHTML = '';
        const shuffled = shuffleArray([...allItems]);
        const words = shuffled.slice(0, 12).map(item => item.name);
        words.forEach(word => {
            const button = document.createElement('button');
            button.textContent = word;
            button.className = 'song-word-btn font-semibold bg-white text-gray-700 py-2 px-4 rounded-full shadow-md';
            button.addEventListener('click', () => {
                if (button.classList.contains('selected')) {
                    button.classList.remove('selected');
                } else if (songWordsSelection.querySelectorAll('.selected').length < 3) {
                    button.classList.add('selected');
                }
            });
            songWordsSelection.appendChild(button);
        });
    }

    async function startSentenceGame() {
        sentenceNewBtn.disabled = true;
        sentenceWordsContainer.innerHTML = '<div class="loader"></div>';
        sentenceAnswerArea.innerHTML = '';
        sentenceFeedback.innerHTML = '';
        sentenceState.userSentence = [];
        try {
            const randomWord = allItems[Math.floor(Math.random() * allItems.length)].name;
            const prompt = `Create one very simple, grammatically correct sentence for a 5-year-old child that includes the word "${randomWord}". The sentence should be between 4 and 7 words long. Do not add any punctuation.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                sentenceState.correctSentence = result.candidates[0].content.parts[0].text.trim();
                const words = sentenceState.correctSentence.split(' ');
                const scrambledWords = shuffleArray([...words]);
                sentenceWordsContainer.innerHTML = '';
                scrambledWords.forEach(word => {
                    const btn = document.createElement('button');
                    btn.textContent = word;
                    btn.className = 'font-semibold text-lg bg-white hover:bg-blue-100 text-gray-800 p-3 rounded-xl shadow-md';
                    btn.onclick = () => {
                        sentenceState.userSentence.push(word);
                        btn.style.visibility = 'hidden';
                        updateSentenceAnswerArea();
                    };
                    sentenceWordsContainer.appendChild(btn);
                });
            } else {
                throw new Error('Could not generate sentence.');
            }
        } catch (e) {
            sentenceWordsContainer.innerHTML = '<p class="text-red-500">Could not create a game. Please try again!</p>';
        } finally {
            sentenceNewBtn.disabled = false;
        }
    }

    function updateSentenceAnswerArea() {
        sentenceAnswerArea.textContent = sentenceState.userSentence.join(' ');
    }

    function clearSentence() {
        sentenceState.userSentence = [];
        updateSentenceAnswerArea();
        sentenceWordsContainer.querySelectorAll('button').forEach(btn => btn.style.visibility = 'visible');
        sentenceFeedback.innerHTML = '';
    }

    function checkSentence() {
        const userAnswer = sentenceState.userSentence.join(' ');
        if (userAnswer === sentenceState.correctSentence) {
            sentenceFeedback.textContent = 'Great job! 🎉';
            sentenceFeedback.className = 'text-center mt-4 text-2xl font-bold text-green-600';
        } else {
            sentenceFeedback.textContent = 'Not quite, try again!';
            sentenceFeedback.className = 'text-center mt-4 text-2xl font-bold text-red-500';
        }
    }

    // --- SPELLING BEE ---
    function startSpellingBee() {
        spellingStartScreen.classList.add('hidden');
        spellingGameScreen.classList.remove('hidden');
        spellingState.score = 0;
        spellingScoreEl.textContent = spellingState.score;
        loadNextSpellingWord();
    }

    async function loadNextSpellingWord() {
        spellingInput.value = '';
        spellingFeedback.innerHTML = '';
        spellingCheckBtn.disabled = false;
        spellingState.currentWord = allItems[Math.floor(Math.random() * allItems.length)].name;
        await readAloud(`Spell the word: ${spellingState.currentWord}`, spellingListenBtn, spellingAudioPlayer);
    }

    function checkSpelling() {
        const userAnswer = spellingInput.value.trim().toLowerCase();
        const correctAnswer = spellingState.currentWord.toLowerCase();
        if (userAnswer === correctAnswer) {
            spellingFeedback.textContent = 'Correct! 🎉';
            spellingFeedback.className = 'text-center mt-4 text-2xl font-bold text-green-600';
            spellingState.score++;
            spellingScoreEl.textContent = spellingState.score;
        } else {
            spellingFeedback.textContent = `Not quite! The word was "${spellingState.currentWord}"`;
            spellingFeedback.className = 'text-center mt-4 text-2xl font-bold text-red-500';
        }
        spellingCheckBtn.disabled = true;
    }

    // --- PICTURE DETECTIVE ---
    async function startPictureDetectiveGame() {
        detectiveNewBtn.disabled = true;
        detectiveCheckBtn.disabled = true;
        detectiveImageContainer.innerHTML = '<div class="loader"></div><p class="ml-4 text-gray-500">Thinking of a picture...</p>';
        detectiveDescriptionInput.value = '';
        detectiveFeedback.innerHTML = '';
        try {
            const promptForPrompt = `Give me a simple, fun, and silly idea for a picture that a child can describe. For example: "A purple hippo wearing a chef's hat" or "Three green snakes having a tea party".`;
            const payload = {contents: [{role: "user", parts: [{text: promptForPrompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                detectiveState.originalPrompt = result.candidates[0].content.parts[0].text.trim();
                detectiveImageContainer.innerHTML = '<div class="loader"></div><p class="ml-4 text-gray-500">Drawing the picture...</p>';
                const imageUrl = await generateImage(`A simple, cute, and colorful cartoon drawing for a child of: ${detectiveState.originalPrompt}`);
                detectiveImageContainer.innerHTML = `<img src="${imageUrl}" class="w-full h-full object-contain rounded-lg" alt="AI generated drawing of ${detectiveState.originalPrompt}">`;
            } else {
                throw new Error("Could not generate a picture idea.");
            }
        } catch (e) {
            detectiveImageContainer.innerHTML = '<p class="text-red-500">Could not create a picture. Please try again!</p>';
        } finally {
            detectiveNewBtn.disabled = false;
            detectiveCheckBtn.disabled = false;
        }
    }

    async function checkDescription() {
        const userDescription = detectiveDescriptionInput.value;
        if (!userDescription) {
            alert("Please describe the picture first!");
            return;
        }
        detectiveCheckBtn.disabled = true;
        detectiveFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';
        try {
            const prompt = `A child was shown a picture of "${detectiveState.originalPrompt}". The child wrote: "${userDescription}". Provide simple, positive, and encouraging feedback in 1-2 sentences. Mention one thing they got right and one thing they could add.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                detectiveFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (e) {
            detectiveFeedback.textContent = 'I am not sure what to say! Try again.';
        } finally {
            detectiveCheckBtn.disabled = false;
        }
    }

    // --- TONGUE TWISTER ---
    async function generateTongueTwister() {
        generateTwisterBtn.disabled = true;
        generateTwisterBtn.innerHTML = 'Thinking... <div class="loader"></div>';
        twisterOutput.innerHTML = '<p class="text-gray-500">Thinking of a tricky twister...</p>';
        twisterAudioControls.classList.add('hidden');
        twisterAudioPlayerContainer.innerHTML = '';
        try {
            const randomWord = allItems[Math.floor(Math.random() * allItems.length)].name;
            const prompt = `Create a very simple, short, and fun tongue twister for a 5-year-old child that repeats the sound of the word '${randomWord}'. For example, if the word is 'snake', you could write 'Silly snakes slide sideways.'`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const twisterText = result.candidates[0].content.parts[0].text.trim();
                twisterOutput.textContent = twisterText;
                twisterAudioControls.classList.remove('hidden');
            } else {
                twisterOutput.innerHTML = '<p class="text-red-500">I got my tongue tied! Please try again.</p>';
            }
        } catch (error) {
            console.error("Failed to generate tongue twister:", error);
            twisterOutput.innerHTML = '<p class="text-red-500">Oops! Something went wrong.</p>';
        } finally {
            generateTwisterBtn.disabled = false;
            generateTwisterBtn.textContent = 'New Tongue Twister!';
        }
    }

    // --- VOCABULARY UI ---
    function displayVocabularyForCategory(categoryName) {
        currentCategory = categoryName;
        vocabGridContainer.innerHTML = '';
        const items = vocabulary[categoryName];
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden cursor-pointer';
            card.innerHTML = `<img src="${item.img}" alt="${item.name}" class="w-full h-80 w-35 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400/ccc/000?text=Image+Error';"><button class="info-button fun-fact-button" data-item-name="${item.name}">?</button><button class="info-button what-is-it-button" data-item-name="${item.name}">🤔</button>`;
            card.querySelector('img').addEventListener('click', () => speakVocabulary(item.name));
            grid.appendChild(card);
        });
        vocabGridContainer.appendChild(grid);
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent === categoryName) {
                btn.classList.add('active');
            }
        });
    }

    function createCategoryButtons() {
        categoryButtonsContainer.innerHTML = '';
        Object.keys(vocabulary).forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.className = 'category-btn font-semibold text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-yellow-300 hover:text-gray-800';
            button.addEventListener('click', () => displayVocabularyForCategory(category));
            categoryButtonsContainer.appendChild(button);
        });
    }

    // --- FUN FACT & EXPLANATION MODAL ---
    async function showInfoModal(title, contentPromise) {
        funFactTitle.textContent = title;
        funFactContent.innerHTML = '<div class="flex justify-center items-center"><div class="loader"></div></div>';
        factAudioPlayer.innerHTML = '';
        funFactModal.classList.remove('hidden');
        setTimeout(() => {
            funFactModal.classList.remove('opacity-0');
            funFactModal.querySelector('div').classList.remove('scale-95');
        }, 10);
        try {
            const content = await contentPromise;
            funFactContent.textContent = content;
        } catch (e) {
            funFactContent.textContent = 'Something went wrong!';
        }
    }

    async function getFunFact(itemName) {
        const prompt = `Tell me one fun, simple fact for a 5-year-old child about a ${itemName}. Keep it to one or two short sentences.`;
        const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
        const result = await callGeminiApi(apiUrl, payload);
        if (result.candidates && result.candidates[0].content.parts[0].text) {
            return result.candidates[0].content.parts[0].text;
        }
        return 'Could not find a fun fact. Try another!';
    }

    async function getExplanation(itemName) {
        const prompt = `Explain what a "${itemName}" is to a 5-year-old child in one simple sentence.`;
        const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
        const result = await callGeminiApi(apiUrl, payload);
        if (result.candidates && result.candidates[0].content.parts[0].text) {
            return result.candidates[0].content.parts[0].text;
        }
        return `A ${itemName} is a type of thing!`;
    }

    function hideFunFact() {
        funFactModal.classList.add('opacity-0');
        funFactModal.querySelector('div').classList.add('scale-95');
        setTimeout(() => {
            funFactModal.classList.add('hidden');
        }, 300);
    }

    vocabGridContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('fun-fact-button')) {
            const itemName = e.target.dataset.itemName;
            showInfoModal(`Fun Fact about ${itemName}!`, getFunFact(itemName));
        }
        if (e.target.classList.contains('what-is-it-button')) {
            const itemName = e.target.dataset.itemName;
            showInfoModal(`What is a ${itemName}?`, getExplanation(itemName));
        }
    });

    // --- RIDDLE GAME ---
    async function startRiddleGame() {
        riddleStartScreen.classList.add('hidden');
        riddleGameScreen.classList.remove('hidden');
        await loadNextRiddle();
    }

    async function loadNextRiddle() {
        riddleState.isAnswered = false;
        riddleText.innerHTML = '<div class="loader"></div>';
        riddleOptionsContainer.innerHTML = '';
        riddleFeedback.innerHTML = '';
        try {
            const correctAnswer = allItems[Math.floor(Math.random() * allItems.length)];
            const prompt = `Create a very simple "What am I?" riddle for a 5-year-old child. The answer is ${correctAnswer.name}. Make it 2-3 short sentences. Do not mention the word "${correctAnswer.name}" in the riddle.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                riddleText.textContent = result.candidates[0].content.parts[0].text;
                let options = [correctAnswer.name];
                const wrongAnswers = allItems.filter(item => item.name !== correctAnswer.name).map(item => item.name);
                shuffleArray(wrongAnswers);
                options.push(...wrongAnswers.slice(0, 3));
                options = shuffleArray(options);
                options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = 'font-semibold text-lg bg-white hover:bg-blue-100 text-gray-800 p-4 rounded-xl shadow-md transition-all duration-200';
                    btn.textContent = opt;
                    btn.addEventListener('click', () => checkRiddleAnswer(opt, correctAnswer.name, btn));
                    riddleOptionsContainer.appendChild(btn);
                });
            } else {
                throw new Error('Could not generate riddle');
            }
        } catch (e) {
            riddleText.textContent = 'Oops! Could not think of a riddle. Please try again.';
            setTimeout(loadNextRiddle, 2000);
        }
    }

    function checkRiddleAnswer(selected, correct, button) {
        if (riddleState.isAnswered) return;
        riddleState.isAnswered = true;
        const allButtons = riddleOptionsContainer.querySelectorAll('button');
        if (selected === correct) {
            button.classList.add('correct');
            speak('That\'s right!');
            riddleFeedback.innerHTML = `<p class="text-2xl font-bold text-green-600">You got it! 🎉</p>`;
        } else {
            button.classList.add('incorrect');
            speak('Not quite.');
            riddleFeedback.innerHTML = `<p class="text-2xl font-bold text-red-600">Good try! The answer was ${correct}.</p>`;
            allButtons.forEach(btn => {
                if (btn.textContent === correct) btn.classList.add('correct');
            });
        }
        setTimeout(loadNextRiddle, 2500);
    }

    // --- QUIZ & OTHER FUNCTIONS ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function startQuiz() {
        quizState.questions = shuffleArray([...allItems]).slice(0, 10);
        quizState.currentQuestionIndex = 0;
        quizState.score = 0;
        quizState.isAnswered = false;
        scoreEl.textContent = quizState.score;
        quizStartScreen.classList.add('hidden');
        quizGameScreen.classList.remove('hidden');
        loadQuestion();
    }

    function loadQuestion() {
        quizState.isAnswered = false;
        const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
        questionNumberEl.textContent = quizState.currentQuestionIndex + 1;
        quizImageContainer.innerHTML = `<img src="${currentQuestion.img}" alt="Quiz item" class="w-64 h-64 object-cover rounded-2xl shadow-md" onerror="this.onerror=null;this.src='https://placehold.co/400/ccc/000?text=Image+Error';">`;
        const correctAnswer = currentQuestion.name;
        let options = [correctAnswer];
        const wrongAnswers = allItems.filter(item => item.name !== correctAnswer).map(item => item.name);
        shuffleArray(wrongAnswers);
        options.push(...wrongAnswers.slice(0, 3));
        options = shuffleArray(options);
        quizOptionsContainer.innerHTML = '';
        options.forEach(optionText => {
            const optionButton = document.createElement('button');
            optionButton.className = 'font-semibold text-lg bg-white hover:bg-blue-100 text-gray-800 p-4 rounded-xl shadow-md transition-all duration-200';
            optionButton.textContent = optionText;
            optionButton.addEventListener('click', () => checkAnswer(optionText, correctAnswer, optionButton));
            quizOptionsContainer.appendChild(optionButton);
        });
        quizFeedback.innerHTML = '';
    }

    function checkAnswer(selectedAnswer, correctAnswer, button) {
        if (quizState.isAnswered) return;
        quizState.isAnswered = true;
        const allButtons = quizOptionsContainer.querySelectorAll('button');
        if (selectedAnswer === correctAnswer) {
            quizState.score++;
            scoreEl.textContent = quizState.score;
            button.classList.add('correct');
            speak('Correct!');
            quizFeedback.innerHTML = `<p class="text-2xl font-bold text-green-600">Correct! 🎉</p>`;
        } else {
            button.classList.add('incorrect');
            speak('Try again.');
            quizFeedback.innerHTML = `<p class="text-2xl font-bold text-red-600">Not quite! The answer is ${correctAnswer}.</p>`;
            allButtons.forEach(btn => {
                if (btn.textContent === correct) btn.classList.add('correct');
            });
        }
        setTimeout(() => {
            if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
                quizState.currentQuestionIndex++;
                loadQuestion();
            } else {
                showFinalScore();
            }
        }, 2000);
    }

    async function generateQuizFeedback(score, total) {
        const feedbackContainer = document.getElementById('ai-feedback');
        feedbackContainer.innerHTML = '<div class="loader inline-block"></div>';
        try {
            const prompt = `A child just finished a quiz and scored ${score} out of ${total}. Write a short, cheerful, and encouraging message for them. If they did well (more than half correct), praise them. If their score is low, be encouraging and suggest they try again. Keep it to 1-2 sentences.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                feedbackContainer.textContent = result.candidates[0].content.parts[0].text;
            } else {
                feedbackContainer.textContent = "You did a great job!";
            }
        } catch (error) {
            console.error("Failed to generate quiz feedback:", error);
            feedbackContainer.textContent = "You did a great job!";
        }
    }

    function showFinalScore() {
        quizGameScreen.classList.add('hidden');
        quizStartScreen.classList.remove('hidden');
        quizStartScreen.innerHTML = `
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-4 font-fredoka">Quiz Complete!</h2>
                <p class="text-center text-gray-600 mb-2 text-2xl">Your final score is <span class="font-bold text-blue-600">${quizState.score}</span> out of ${quizState.questions.length}!</p>
                <div id="ai-feedback" class="text-center text-gray-700 font-semibold text-lg my-4 min-h-[2.5rem]"></div>
                <div class="text-center">
                    <button id="restart-quiz-btn" class="font-fredoka text-2xl bg-green-500 hover:bg-green-600 text-white py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">Play Again</button>
                </div>`;

        generateQuizFeedback(quizState.score, quizState.questions.length);

        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            quizStartScreen.innerHTML = `<h2 class="text-3xl font-bold text-center text-gray-800 mb-4 font-fredoka">Quiz Time!</h2><p class="text-center text-gray-600 mb-6">Let's see what you've learned. Click the button to start!</p><div class="text-center"><button id="start-quiz-btn" class="font-fredoka text-2xl bg-green-500 hover:bg-green-600 text-white py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">Start Quiz</button></div>`;
            document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
        });
    }

    function createCloud() {
        const cloudTemplate = document.getElementById('cloud-svg');
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.innerHTML = cloudTemplate.innerHTML;

        const duration = Math.random() * 70 + 50;
        const top = Math.random() * 30;
        const scale = Math.random() * 0.6 + 0.5;
        const delay = Math.random() * -20;

        cloud.style.animationDuration = `${duration}s`;
        cloud.style.animationDelay = `${delay}s`;
        cloud.style.top = `${top}vh`;
        cloud.style.transform = `scale(${scale})`;

        cloudLayer.appendChild(cloud);

        setTimeout(() => {
            cloud.remove();
        }, (duration + Math.abs(delay)) * 1000);
    }

    async function startStoryCreator() {
        storyCreatorStart.classList.add('hidden');
        storyCreatorOutput.classList.add('hidden');
        storyCreatorInputs.classList.remove('hidden');
        storyCreatorFields.innerHTML = '<div class="loader"></div>';

        try {
            const prompt = "Give me a list of 5 funny and simple word types for a Mad Libs-style story for a child. Examples: 'A silly sound', 'An animal', 'A color'. Return only a JSON array of strings.";
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                storyCreatorState.wordTypes = JSON.parse(result.candidates[0].content.parts[0].text);
                storyCreatorFields.innerHTML = '';
                storyCreatorState.wordTypes.forEach(type => {
                    const div = document.createElement('div');
                    div.className = 'flex flex-col';
                    div.innerHTML = `
                            <label class="mb-1 font-semibold text-gray-700">${type}</label>
                            <input type="text" data-type="${type}" class="p-2 border-2 border-gray-300 rounded-lg">
                        `;
                    storyCreatorFields.appendChild(div);
                });
            } else {
                throw new Error("Could not get word types.");
            }
        } catch (error) {
            console.error("Failed to start story creator:", error);
            storyCreatorFields.innerHTML = '<p class="text-red-500">Could not start the story creator. Please try again!</p>';
        }
    }

    async function generateSillyStory() {
        storyCreatorGenerateBtn.disabled = true;
        storyCreatorGenerateBtn.innerHTML = 'Writing... <div class="loader"></div>';

        let allFilled = true;
        storyCreatorState.userWords = {};
        storyCreatorFields.querySelectorAll('input').forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
            storyCreatorState.userWords[input.dataset.type] = input.value.trim();
        });

        if (!allFilled) {
            alert("Please fill in all the words!");
            storyCreatorGenerateBtn.disabled = false;
            storyCreatorGenerateBtn.textContent = 'Create My Story!';
            return;
        }

        try {
            const wordsList = Object.entries(storyCreatorState.userWords).map(([type, word]) => `For the word type "${type}", use the word "${word}".`).join('\n');
            const prompt = `Write a short, silly, and funny story for a 5-year-old child. Use the following words that I provide:\n\n${wordsList}\n\nMake sure to include all the words in the story.`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const storyText = result.candidates[0].content.parts[0].text;
                storyCreatorResult.innerHTML = storyText.replace(/\n/g, '<br>');
                storyCreatorInputs.classList.add('hidden');
                storyCreatorOutput.classList.remove('hidden');
            } else {
                throw new Error("Could not generate story.");
            }
        } catch (error) {
            console.error("Failed to generate silly story:", error);
            storyCreatorResult.innerHTML = '<p class="text-red-500">The storyteller got writer\'s block! Please try again.</p>';
        } finally {
            storyCreatorGenerateBtn.disabled = false;
            storyCreatorGenerateBtn.textContent = 'Create My Story!';
        }
    }

    function resetStoryCreator() {
        storyCreatorOutput.classList.add('hidden');
        storyCreatorInputs.classList.add('hidden');
        storyCreatorStart.classList.remove('hidden');
        storyCreatorFields.innerHTML = '';
        storyCreatorResult.innerHTML = '';
    }

    async function startWhatsDifferentGame() {
        whatsDifferentNewBtn.disabled = true;
        whatsDifferentCheckBtn.disabled = true;
        whatsDifferentInput.value = '';
        whatsDifferentFeedback.innerHTML = '';
        whatsDifferentImages.innerHTML = '<div class="col-span-2 flex flex-col items-center justify-center"><div class="loader"></div><p class="mt-4 text-gray-500">Creating a puzzle...</p></div>';

        try {
            const prompt = `Describe a simple cartoon scene for a child in one sentence. Then, describe a very subtle, single difference for that scene. Return the response as a JSON object with two keys: "original" and "modified". For example: {"original": "A yellow cat wearing a blue hat.", "modified": "A yellow cat wearing a red hat."}`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const descriptions = JSON.parse(result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim());
                const [image1Url, image2Url] = await Promise.all([
                    generateImage(`A simple, cute, and colorful cartoon drawing for a child of: ${descriptions.original}`),
                    generateImage(`A simple, cute, and colorful cartoon drawing for a child of: ${descriptions.modified}`)
                ]);

                whatsDifferentState.image1 = image1Url.split(',')[1];
                whatsDifferentState.image2 = image2Url.split(',')[1];

                whatsDifferentImages.innerHTML = `
                        <div class="bg-white p-2 rounded-lg shadow-inner flex items-center justify-center"><img src="${image1Url}" class="w-full h-full object-contain rounded-lg"></div>
                        <div class="bg-white p-2 rounded-lg shadow-inner flex items-center justify-center"><img src="${image2Url}" class="w-full h-full object-contain rounded-lg"></div>
                    `;
            } else {
                throw new Error("Could not get image descriptions.");
            }
        } catch (error) {
            console.error("Failed to start What's Different game:", error);
            whatsDifferentImages.innerHTML = '<p class="text-red-500">Could not create a puzzle. Please try again!</p>';
        } finally {
            whatsDifferentNewBtn.disabled = false;
            whatsDifferentCheckBtn.disabled = false;
        }
    }

    async function checkWhatsDifferentAnswer() {
        const userAnswer = whatsDifferentInput.value.trim();
        if (!userAnswer) {
            alert("Please describe the difference first!");
            return;
        }

        whatsDifferentCheckBtn.disabled = true;
        whatsDifferentFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `Here are two images. A child has described the difference between them as: "${userAnswer}". Is the child correct? Respond with a short, encouraging message for the child. If they are correct, praise them. If they are incorrect, gently guide them toward the actual difference.`;
            const payload = {
                contents: [{
                    parts: [
                        {text: prompt},
                        {inline_data: {mime_type: "image/png", data: whatsDifferentState.image1}},
                        {inline_data: {mime_type: "image/png", data: whatsDifferentState.image2}}
                    ]
                }]
            };
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                whatsDifferentFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check What's Different answer:", error);
            whatsDifferentFeedback.textContent = 'I am not sure! Try again.';
        } finally {
            whatsDifferentCheckBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const categoryFunSection = document.getElementById('category-fun-section');
    const categoryFunCategory = document.getElementById('category-fun-category');
    const categoryFunWords = document.getElementById('category-fun-words');
    const categoryFunScoreEl = document.getElementById('category-fun-score');
    const categoryFunNewBtn = document.getElementById('category-fun-new-btn');

    let categoryFunState = {
        category: '',
        correctWords: [],
        allWords: [],
        score: 0,
        isAnswered: {}
    };
    let categoryGameStarted = false;

    // --- Add this new function with your other "show" functions ---
    function showCategoryFun() {
        hideAllSections();
        categoryFunSection.classList.remove('hidden');
        if (!categoryGameStarted) {
            startCategoryFunGame();
            categoryGameStarted = true;
        }
    }

    async function startCategoryFunGame() {
        categoryFunNewBtn.disabled = true;
        categoryFunCategory.innerHTML = '';
        categoryFunWords.innerHTML = '<div class="loader"></div><p class="ml-4 text-gray-500">Thinking of a new challenge...</p>';
        categoryFunState.score = 0;
        categoryFunScoreEl.textContent = 0;
        categoryFunState.isAnswered = {};

        try {
            const categoryKeys = Object.keys(vocabulary);
            const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
            categoryFunState.category = randomCategory;
            categoryFunCategory.textContent = randomCategory;

            const prompt = `From the category "${randomCategory}", give me 5 random words. Also give me 5 random words that are NOT in that category. Return a single JSON object with two keys: "correct" and "incorrect", each containing an array of 5 strings.`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                categoryFunState.correctWords = data.correct;
                categoryFunState.allWords = shuffleArray([...data.correct, ...data.incorrect]);

                categoryFunWords.innerHTML = '';
                categoryFunState.allWords.forEach(word => {
                    const btn = document.createElement('button');
                    btn.textContent = word;
                    btn.className = 'font-semibold text-lg bg-white hover:bg-emerald-100 text-gray-800 p-3 rounded-xl shadow-md transition-all duration-200';
                    btn.onclick = () => checkCategoryAnswer(word, btn);
                    categoryFunWords.appendChild(btn);
                });
            } else {
                throw new Error("Could not generate category words.");
            }
        } catch (error) {
            console.error("Failed to start Category Fun game:", error);
            categoryFunWords.innerHTML = '<p class="text-red-500">Could not create a game. Please try again!</p>';
        } finally {
            categoryFunNewBtn.disabled = false;
        }
    }

    function checkCategoryAnswer(word, button) {
        if (categoryFunState.isAnswered[word]) return;
        categoryFunState.isAnswered[word] = true;

        if (categoryFunState.correctWords.includes(word)) {
            button.classList.add('correct');
            categoryFunState.score++;
            speak('Correct!');
        } else {
            button.classList.add('incorrect');
            categoryFunState.score--;
            speak('Nope!');
        }
        categoryFunScoreEl.textContent = categoryFunState.score;
    }

    function showRhymingTime() {
        hideAllSections();
        rhymingSection.classList.remove('hidden');
        if (!rhymingGameStarted) {
            startRhymingGame();
            rhymingGameStarted = true;
        }
    }

    // --- Rhyming Logic ---
    async function startRhymingGame() {
        rhymingNewBtn.disabled = true;
        rhymingCheckBtn.disabled = true;
        rhymingInput.value = '';
        rhymingFeedback.innerHTML = '';
        rhymingWordDisplay.innerHTML = '<div class="loader"></div>';

        try {
            const randomWord = allItems[Math.floor(Math.random() * allItems.length)].name;
            rhymingState.currentWord = randomWord;
            rhymingWordDisplay.textContent = randomWord;
        } catch (error) {
            console.error("Failed to start rhyming game:", error);
            rhymingWordDisplay.textContent = 'Error!';
        } finally {
            rhymingNewBtn.disabled = false;
            rhymingCheckBtn.disabled = false;
        }
    }

    async function checkRhyme() {
        const userWord = rhymingInput.value.trim();
        if (!userWord) {
            alert("Please type a word that rhymes!");
            return;
        }

        rhymingCheckBtn.disabled = true;
        rhymingFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `Does the word "${userWord}" rhyme with "${rhymingState.currentWord}"? Respond with a short, cheerful, and encouraging message for a child. If it's a good rhyme, say so. If not, gently say it doesn't rhyme.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                rhymingFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get rhyming feedback.");
            }
        } catch (error) {
            console.error("Failed to check rhyme:", error);
            rhymingFeedback.textContent = 'I am not sure! Try again.';
        } finally {
            rhymingCheckBtn.disabled = false;
        }
    }

    const illustratedStorySection = document.getElementById('illustrated-story-section');
    const generateIllustratedStoryBtn = document.getElementById('generate-illustrated-story-btn');
    const illustratedStoryOutput = document.getElementById('illustrated-story-output');
    const showIllustratedStoryBtn = document.getElementById('show-illustrated-story-btn');

    // --- Add this new "show" function with the others ---
    function showIllustratedStory() {
        hideAllSections();
        illustratedStorySection.classList.remove('hidden');
    }

    // --- Add this new game function with your other game logic ---
    async function generateIllustratedStory() {
        generateIllustratedStoryBtn.disabled = true;
        generateIllustratedStoryBtn.innerHTML = 'Thinking... <div class="loader"></div>';
        illustratedStoryOutput.innerHTML = '<div class="flex flex-col items-center justify-center"><div class="loader" style="width:48px; height:48px; border-width: 6px;"></div><p class="mt-4 text-gray-500">Our AI storyteller is dreaming up a tale with pictures...</p></div>';

        try {
            const prompt = `Write a short, simple, and fun story for a 5-year-old child. The story should be 3 paragraphs long. After each paragraph, insert an image description in the format [IMAGE: a simple description of a cute cartoon drawing]. For example: [IMAGE: a happy sun shining over a green hill].`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const storyText = result.candidates[0].content.parts[0].text;
                const parts = storyText.split(/(\[IMAGE:.*?\])/g).filter(part => part.trim() !== '');

                illustratedStoryOutput.innerHTML = ''; // Clear the loading indicator

                for (const part of parts) {
                    if (part.startsWith('[IMAGE:')) {
                        const description = part.substring(7, part.length - 1);
                        const imageContainer = document.createElement('div');
                        imageContainer.className = 'flex justify-center items-center my-4';
                        imageContainer.innerHTML = '<div class="loader"></div><p class="ml-2 text-gray-500">Drawing a picture of ' + description + '...</p>';
                        illustratedStoryOutput.appendChild(imageContainer);

                        try {
                            const imageUrl = await generateImage(`A simple, cute, and colorful cartoon drawing for a child of: ${description}`);
                            imageContainer.innerHTML = `<img src="${imageUrl}" class="w-full max-w-md mx-auto rounded-lg shadow-md" alt="${description}">`;
                        } catch (imgError) {
                            console.error("Failed to generate image:", imgError);
                            imageContainer.innerHTML = '<p class="text-red-500 text-center">Could not draw a picture for this part of the story.</p>';
                        }
                    } else {
                        const p = document.createElement('p');
                        p.textContent = part.trim();
                        illustratedStoryOutput.appendChild(p);
                    }
                }
            } else {
                throw new Error("Could not generate the story.");
            }
        } catch (error) {
            console.error("Failed to generate illustrated story:", error);
            illustratedStoryOutput.innerHTML = '<p class="text-red-500">Oops! The storyteller got a little stuck. Please try again.</p>';
        } finally {
            generateIllustratedStoryBtn.disabled = false;
            generateIllustratedStoryBtn.textContent = 'Tell Me A Story';
        }
    }

    const showWordAssociationFunBtn = document.getElementById('show-word-association-fun-btn');
    const wordAssociationSection = document.getElementById('word-association-section');
    const wordAssociationDisplay = document.getElementById('word-association-display');
    const wordAssociationInput = document.getElementById('word-association-input');
    const wordAssociationCheckBtn = document.getElementById('word-association-check-btn');
    const wordAssociationFeedback = document.getElementById('word-association-feedback');
    const wordAssociationNewBtn = document.getElementById('word-association-new-btn');


    let wordAssociationState = {
        currentWord: '',
    };
    let wordAssociationGameStarted = false;

    // --- Add this new function with your other "show" functions ---
    function showWordAssociationFun() {
        hideAllSections();
        wordAssociationSection.classList.remove('hidden');
        if (!wordAssociationGameStarted) {
            startWordAssociationGame();
            wordAssociationGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startWordAssociationGame() {
        wordAssociationNewBtn.disabled = true;
        wordAssociationCheckBtn.disabled = true;
        wordAssociationInput.value = '';
        wordAssociationFeedback.innerHTML = '';
        wordAssociationDisplay.innerHTML = '<div class="loader"></div>';

        try {
            const randomWord = allItems[Math.floor(Math.random() * allItems.length)].name;
            wordAssociationState.currentWord = randomWord;
            wordAssociationDisplay.textContent = randomWord;
        } catch (error) {
            console.error("Failed to start Word Association game:", error);
            wordAssociationDisplay.textContent = 'Error!';
        } finally {
            wordAssociationNewBtn.disabled = false;
            wordAssociationCheckBtn.disabled = false;
        }
    }

    async function checkWordAssociation() {
        const userWord = wordAssociationInput.value.trim();
        if (!userWord) {
            alert("Please type a word!");
            return;
        }

        wordAssociationCheckBtn.disabled = true;
        wordAssociationFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `For a child, explain the connection between the word "${wordAssociationState.currentWord}" and "${userWord}". Keep it simple, positive, and encouraging. If there's no clear connection, say something fun and ask them to try another word.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                wordAssociationFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check word association:", error);
            wordAssociationFeedback.textContent = 'That\'s an interesting idea! Try another one.';
        } finally {
            wordAssociationCheckBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showStoryPuzzleBtn = document.getElementById('show-story-puzzle-btn');
    const storyPuzzleSection = document.getElementById('story-puzzle-section');
    const storyPuzzleContainer = document.getElementById('story-puzzle-container');
    const storyPuzzleCheckBtn = document.getElementById('story-puzzle-check-btn');
    const storyPuzzleNewBtn = document.getElementById('story-puzzle-new-btn');
    const storyPuzzleFeedback = document.getElementById('story-puzzle-feedback');

// --- Add these with your other state variables ---
    let storyPuzzleState = {
        correctOrder: [],
    };
    let storyPuzzleGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showStoryPuzzle() {
        hideAllSections();
        storyPuzzleSection.classList.remove('hidden');
        if (!storyPuzzleGameStarted) {
            startStoryPuzzleGame();
            storyPuzzleGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startStoryPuzzleGame() {
        storyPuzzleNewBtn.disabled = true;
        storyPuzzleCheckBtn.disabled = true;
        storyPuzzleFeedback.innerHTML = '';
        storyPuzzleContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Creating a story puzzle...</p></div>';

        try {
            const prompt = `Write a simple, three-paragraph story for a 5-year-old. Then, provide the story again with the paragraphs in a random, incorrect order. Return a single JSON object with two keys: "correct_order" (an array of the paragraphs in the correct sequence) and "jumbled" (an array of the paragraphs in a random order).`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                storyPuzzleState.correctOrder = data.correct_order;

                storyPuzzleContainer.innerHTML = '';
                data.jumbled.forEach(paragraph => {
                    const p = document.createElement('p');
                    p.textContent = paragraph;
                    p.className = 'p-4 bg-gray-100 rounded-lg cursor-grab';
                    p.draggable = true;
                    storyPuzzleContainer.appendChild(p);
                });

                // Add drag-and-drop event listeners
                const paragraphs = storyPuzzleContainer.querySelectorAll('p');
                paragraphs.forEach(p => {
                    p.addEventListener('dragstart', () => {
                        p.classList.add('opacity-50');
                    });

                    p.addEventListener('dragend', () => {
                        p.classList.remove('opacity-50');
                    });
                });

                storyPuzzleContainer.addEventListener('dragover', e => {
                    e.preventDefault();
                    const afterElement = getDragAfterElement(storyPuzzleContainer, e.clientY);
                    const draggable = document.querySelector('.opacity-50');
                    if (afterElement == null) {
                        storyPuzzleContainer.appendChild(draggable);
                    } else {
                        storyPuzzleContainer.insertBefore(draggable, afterElement);
                    }
                });
            } else {
                throw new Error("Could not generate story puzzle.");
            }
        } catch (error) {
            console.error("Failed to start Story Puzzle game:", error);
            storyPuzzleContainer.innerHTML = '<p class="text-red-500">Could not create a puzzle. Please try again!</p>';
        } finally {
            storyPuzzleNewBtn.disabled = false;
            storyPuzzleCheckBtn.disabled = false;
        }
    }

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('p:not(.opacity-50)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return {offset: offset, element: child};
            } else {
                return closest;
            }
        }, {offset: Number.NEGATIVE_INFINITY}).element;
    }

    async function checkStoryPuzzle() {
        const userOrder = [...storyPuzzleContainer.querySelectorAll('p')].map(p => p.textContent);

        storyPuzzleCheckBtn.disabled = true;
        storyPuzzleFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `A child arranged a story in this order: ${JSON.stringify(userOrder)}. The correct order is: ${JSON.stringify(storyPuzzleState.correctOrder)}. Is the child's order correct? Respond with a short, cheerful, and encouraging message for the child. If they are correct, praise them. If not, gently tell them to try again.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                storyPuzzleFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check story puzzle:", error);
            storyPuzzleFeedback.textContent = 'That\'s a great try! Let\'s try another puzzle.';
        } finally {
            storyPuzzleCheckBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showWhatsMissingBtn = document.getElementById('show-whats-missing-btn');
    const whatsMissingSection = document.getElementById('whats-missing-section');
    const whatsMissingInstructions = document.getElementById('whats-missing-instructions');
    const whatsMissingImageContainer = document.getElementById('whats-missing-image-container');
    const whatsMissingInputArea = document.getElementById('whats-missing-input-area');
    const whatsMissingInput = document.getElementById('whats-missing-input');
    const whatsMissingCheckBtn = document.getElementById('whats-missing-check-btn');
    const whatsMissingFeedback = document.getElementById('whats-missing-feedback');
    const whatsMissingNewBtn = document.getElementById('whats-missing-new-btn');

// --- Add these with your other state variables ---
    let whatsMissingState = {
        missingItem: '',
    };
    let whatsMissingGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showWhatsMissing() {
        hideAllSections();
        whatsMissingSection.classList.remove('hidden');
        if (!whatsMissingGameStarted) {
            startWhatsMissingGame();
            whatsMissingGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startWhatsMissingGame() {
        whatsMissingNewBtn.disabled = true;
        whatsMissingCheckBtn.disabled = true;
        whatsMissingInput.value = '';
        whatsMissingFeedback.innerHTML = '';
        whatsMissingInputArea.classList.add('hidden');
        whatsMissingInstructions.textContent = 'Look at the picture and try to remember everything in it!';
        whatsMissingImageContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Creating a scene...</p></div>';

        try {
            const prompt = `Create a simple scene for a child's memory game. Describe a scene with 3 to 4 simple objects. Then, name one of those objects to be the "missing_item". Return a single JSON object with two keys: "full_scene_description" and "missing_item". For example: {"full_scene_description": "A red ball, a yellow banana, and a blue car are on a table.", "missing_item": "banana"}`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                whatsMissingState.missingItem = data.missing_item;
                const fullScenePrompt = `A simple, cute, and colorful cartoon drawing for a child of: ${data.full_scene_description}`;
                const partialScenePrompt = `A simple, cute, and colorful cartoon drawing for a child of: ${data.full_scene_description.replace(data.missing_item, "")}`;

                const imageUrl = await generateImage(fullScenePrompt);
                whatsMissingImageContainer.innerHTML = `<img src="${imageUrl}" class="w-full max-w-md mx-auto rounded-lg shadow-md" alt="A scene with several objects.">`;

                setTimeout(async () => {
                    whatsMissingInstructions.textContent = 'Wait... what is missing from the picture?';
                    whatsMissingImageContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Making something disappear...</p></div>';

                    const partialImageUrl = await generateImage(partialScenePrompt);
                    whatsMissingImageContainer.innerHTML = `<img src="${partialImageUrl}" class="w-full max-w-md mx-auto rounded-lg shadow-md" alt="The same scene, but with one object missing.">`;

                    whatsMissingInputArea.classList.remove('hidden');
                    whatsMissingCheckBtn.disabled = false;
                }, 5000); // Show the full image for 5 seconds
            } else {
                throw new Error("Could not generate the scene.");
            }
        } catch (error) {
            console.error("Failed to start What's Missing game:", error);
            whatsMissingImageContainer.innerHTML = '<p class="text-red-500">Could not create a game. Please try again!</p>';
        } finally {
            whatsMissingNewBtn.disabled = false;
        }
    }

    async function checkWhatsMissingAnswer() {
        const userAnswer = whatsMissingInput.value.trim().toLowerCase();
        if (!userAnswer) {
            alert("Please type your guess!");
            return;
        }

        whatsMissingCheckBtn.disabled = true;
        whatsMissingFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `A child is playing a memory game. The missing item was "${whatsMissingState.missingItem}". The child guessed "${userAnswer}". Is the child correct? Respond with a short, cheerful, and encouraging message. If they are correct, praise them. If they are wrong, gently tell them the correct answer.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                whatsMissingFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check missing item answer:", error);
            whatsMissingFeedback.textContent = 'That was a good guess! Let\'s try another round.';
        } finally {
            whatsMissingCheckBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showStoryEmojiBtn = document.getElementById('show-story-emoji-btn');
    const storyEmojiSection = document.getElementById('story-emoji-section');
    const storyEmojiContainer = document.getElementById('story-emoji-container');
    const storyEmojiCheckBtn = document.getElementById('story-emoji-check-btn');
    const storyEmojiNewBtn = document.getElementById('story-emoji-new-btn');
    const storyEmojiFeedback = document.getElementById('story-emoji-feedback');

// --- Add these with your other state variables ---
    let storyEmojiState = {
        correctWords: [],
    };
    let storyEmojiGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showStoryEmoji() {
        hideAllSections();
        storyEmojiSection.classList.remove('hidden');
        if (!storyEmojiGameStarted) {
            startStoryEmojiGame();
            storyEmojiGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startStoryEmojiGame() {
        storyEmojiNewBtn.disabled = true;
        storyEmojiCheckBtn.disabled = true;
        storyEmojiFeedback.innerHTML = '';
        storyEmojiContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Creating a new emoji story...</p></div>';

        try {
            const prompt = `Write a simple, two-sentence story for a 5-year-old. Replace two nouns in the story with corresponding emojis. Return a single JSON object with two keys: "story" (the story with emojis) and "answers" (an array of the original words in the order they appear). For example: {"story": "The 🦊 jumped over the 🌕.", "answers": ["fox", "moon"]}`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                storyEmojiState.correctWords = data.answers;

                storyEmojiContainer.innerHTML = '';
                const storyParts = data.story.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);

                storyParts.forEach(part => {
                    if (part.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)) {
                        storyEmojiContainer.innerHTML += `<span class="text-4xl">${part}</span><input type="text" class="w-24 text-center border-b-2 border-gray-400 focus:border-blue-500 outline-none">`;
                    } else {
                        storyEmojiContainer.innerHTML += `<span>${part}</span>`;
                    }
                });
            } else {
                throw new Error("Could not generate emoji story.");
            }
        } catch (error) {
            console.error("Failed to start Story Emoji game:", error);
            storyEmojiContainer.innerHTML = '<p class="text-red-500">Could not create a story. Please try again!</p>';
        } finally {
            storyEmojiNewBtn.disabled = false;
            storyEmojiCheckBtn.disabled = false;
        }
    }

    async function checkStoryEmojiAnswers() {
        const userInputs = storyEmojiContainer.querySelectorAll('input');
        const userAnswers = Array.from(userInputs).map(input => input.value.trim().toLowerCase());

        storyEmojiCheckBtn.disabled = true;
        storyEmojiFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `A child was given an emoji story and guessed the missing words. The correct answers were ${JSON.stringify(storyEmojiState.correctWords)}. The child guessed ${JSON.stringify(userAnswers)}. Are they correct? Respond with a short, cheerful, and encouraging message for the child. If they are correct, praise them. If they are wrong, gently tell them the correct answers.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                storyEmojiFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check emoji story answers:", error);
            storyEmojiFeedback.textContent = 'That was a great try! Let\'s try another story.';
        } finally {
            storyEmojiCheckBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showInteractiveStoryBtn = document.getElementById('show-interactive-story-btn');
    const interactiveStorySection = document.getElementById('interactive-story-section');
    const interactiveStoryOutput = document.getElementById('interactive-story-output');
    const interactiveStoryInput = document.getElementById('interactive-story-input');
    const interactiveStoryContinueBtn = document.getElementById('interactive-story-continue-btn');
    const interactiveStoryNewBtn = document.getElementById('interactive-story-new-btn');

// --- Add these with your other state variables ---
    let interactiveStoryState = {
        currentStory: '',
    };
    let interactiveStoryGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showInteractiveStory() {
        hideAllSections();
        interactiveStorySection.classList.remove('hidden');
        if (!interactiveStoryGameStarted) {
            startInteractiveStoryGame();
            interactiveStoryGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startInteractiveStoryGame() {
        interactiveStoryNewBtn.disabled = true;
        interactiveStoryContinueBtn.disabled = true;
        interactiveStoryOutput.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Dreaming up a new adventure...</p></div>';

        try {
            const prompt = `Write the beginning of a simple and exciting adventure story for a 5-year-old child. The story should be one paragraph long and end with a question asking 'What happens next?'.`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const storyText = result.candidates[0].content.parts[0].text;
                interactiveStoryState.currentStory = storyText;
                interactiveStoryOutput.innerHTML = `<p>${storyText}</p>`;
            } else {
                throw new Error("Could not start the story.");
            }
        } catch (error) {
            console.error("Failed to start Interactive Adventure game:", error);
            interactiveStoryOutput.innerHTML = '<p class="text-red-500">The storyteller is taking a nap. Please try again!</p>';
        } finally {
            interactiveStoryNewBtn.disabled = false;
            interactiveStoryContinueBtn.disabled = false;
        }
    }

    async function continueInteractiveStory() {
        const userInput = interactiveStoryInput.value.trim();
        if (!userInput) {
            alert("Please tell us what happens next!");
            return;
        }

        interactiveStoryContinueBtn.disabled = true;
        interactiveStoryInput.value = '';
        interactiveStoryOutput.innerHTML += '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Writing the next part...</p></div>';

        try {
            const prompt = `This is a children's story so far:\n\n${interactiveStoryState.currentStory}\n\nThe child wants this to happen next: "${userInput}".\n\nContinue the story by incorporating the child's idea in a fun and exciting way. Write one or two more paragraphs and end with a new question asking 'What happens next?'.`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const continuationText = result.candidates[0].content.parts[0].text;
                interactiveStoryState.currentStory += `\n\n${continuationText}`;
                interactiveStoryOutput.innerHTML = interactiveStoryState.currentStory.replace(/\n/g, '<p class="mt-4"></p>');
            } else {
                throw new Error("Could not continue the story.");
            }
        } catch (error) {
            console.error("Failed to continue story:", error);
            interactiveStoryOutput.innerHTML += '<p class="text-red-500">The storyteller got a little lost! Please try again.</p>';
        } finally {
            interactiveStoryContinueBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showDescribePictureBtn = document.getElementById('show-describe-picture-btn');
    const describePictureSection = document.getElementById('describe-picture-section');
    const describePictureImageContainer = document.getElementById('describe-picture-image-container');
    const describePictureInput = document.getElementById('describe-picture-input');
    const describePictureCheckBtn = document.getElementById('describe-picture-check-btn');
    const describePictureFeedback = document.getElementById('describe-picture-feedback');
    const describePictureNewBtn = document.getElementById('describe-picture-new-btn');

// --- Add these with your other state variables ---
    let describePictureState = {
        imageDescription: '',
    };
    let describePictureGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showDescribePicture() {
        hideAllSections();
        describePictureSection.classList.remove('hidden');
        if (!describePictureGameStarted) {
            startDescribePictureGame();
            describePictureGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startDescribePictureGame() {
        describePictureNewBtn.disabled = true;
        describePictureCheckBtn.disabled = true;
        describePictureInput.value = '';
        describePictureFeedback.innerHTML = '';
        describePictureImageContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Creating a picture for you...</p></div>';

        try {
            const prompt = `Give me a simple, fun, and creative idea for a picture that a child can describe. For example: "A happy blue dog flying in a rocket ship."`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const description = result.candidates[0].content.parts[0].text.trim();
                describePictureState.imageDescription = description;

                const imageUrl = await generateImage(`A simple, cute, and colorful cartoon drawing for a child of: ${description}`);
                describePictureImageContainer.innerHTML = `<img src="${imageUrl}" class="w-full max-w-md mx-auto rounded-lg shadow-md" alt="${description}">`;
            } else {
                throw new Error("Could not generate a picture idea.");
            }
        } catch (error) {
            console.error("Failed to start Describe the Picture game:", error);
            describePictureImageContainer.innerHTML = '<p class="text-red-500">Could not create a picture. Please try again!</p>';
        } finally {
            describePictureNewBtn.disabled = false;
            describePictureCheckBtn.disabled = false;
        }
    }

    async function checkPictureDescription() {
        const userDescription = describePictureInput.value.trim();
        if (!userDescription) {
            alert("Please describe the picture first!");
            return;
        }

        describePictureCheckBtn.disabled = true;
        describePictureFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `A child was shown a picture of "${describePictureState.imageDescription}". The child described it as: "${userDescription}". Provide simple, positive, and encouraging feedback in 1-2 sentences. Mention one thing they got right and one thing they could add to their description.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                describePictureFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check picture description:", error);
            describePictureFeedback.textContent = 'That\'s a great description! Let\'s try another picture.';
        } finally {
            describePictureCheckBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showGuessTheSoundBtn = document.getElementById('show-guess-the-sound-btn');
    const guessTheSoundSection = document.getElementById('guess-the-sound-section');
    const guessTheSoundDescription = document.getElementById('guess-the-sound-description');
    const guessTheSoundInput = document.getElementById('guess-the-sound-input');
    const guessTheSoundCheckBtn = document.getElementById('guess-the-sound-check-btn');
    const guessTheSoundFeedback = document.getElementById('guess-the-sound-feedback');
    const guessTheSoundNewBtn = document.getElementById('guess-the-sound-new-btn');

// --- Add these with your other state variables ---
    let guessTheSoundState = {
        soundDescription: '',
    };
    let guessTheSoundGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showGuessTheSound() {
        hideAllSections();
        guessTheSoundSection.classList.remove('hidden');
        if (!guessTheSoundGameStarted) {
            startGuessTheSoundGame();
            guessTheSoundGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startGuessTheSoundGame() {
        guessTheSoundNewBtn.disabled = true;
        guessTheSoundCheckBtn.disabled = true;
        guessTheSoundInput.value = '';
        guessTheSoundFeedback.innerHTML = '';
        guessTheSoundDescription.innerHTML = '<div class="loader"></div>';

        try {
            const prompt = `Give me a simple description of a sound for a child to guess, like "the sound a cow makes" or "the sound of a fire truck". Return a single JSON object with one key: "description".`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                guessTheSoundState.soundDescription = data.description;
                guessTheSoundDescription.textContent = data.description;
            } else {
                throw new Error("Could not generate a sound description.");
            }
        } catch (error) {
            console.error("Failed to start Guess the Sound game:", error);
            guessTheSoundDescription.textContent = 'Error!';
        } finally {
            guessTheSoundNewBtn.disabled = false;
            guessTheSoundCheckBtn.disabled = false;
        }
    }

    async function checkSoundGuess() {
        const userAnswer = guessTheSoundInput.value.trim();
        if (!userAnswer) {
            alert("Please type your guess!");
            return;
        }

        guessTheSoundCheckBtn.disabled = true;
        guessTheSoundFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `A child was asked to guess the sound for "${guessTheSoundState.soundDescription}". The child guessed "${userAnswer}". Is this a good guess? Respond with a short, cheerful, and encouraging message for the child. If they are correct, praise them. If not, gently tell them a better answer.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                guessTheSoundFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check sound guess:", error);
            guessTheSoundFeedback.textContent = 'That\'s a great guess! Let\'s try another sound.';
        } finally {
            guessTheSoundCheckBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showFinishDrawingBtn = document.getElementById('show-finish-drawing-btn');
    const finishDrawingSection = document.getElementById('finish-drawing-section');
    const finishDrawingImageContainer = document.getElementById('finish-drawing-image-container');
    const finishDrawingInput = document.getElementById('finish-drawing-input');
    const finishDrawingBtn = document.getElementById('finish-drawing-btn');
    const finishDrawingNewBtn = document.getElementById('finish-drawing-new-btn');

// --- Add these with your other state variables ---
    let finishDrawingState = {
        initialPrompt: '',
    };
    let finishDrawingGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showFinishDrawing() {
        hideAllSections();
        finishDrawingSection.classList.remove('hidden');
        if (!finishDrawingGameStarted) {
            startFinishDrawingGame();
            finishDrawingGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startFinishDrawingGame() {
        finishDrawingNewBtn.disabled = true;
        finishDrawingBtn.disabled = true;
        finishDrawingInput.value = '';
        finishDrawingImageContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Starting a new drawing...</p></div>';

        try {
            const prompt = `Give me a simple and incomplete drawing prompt for a child to finish. For example: "a single wheel", "the top of a mushroom", "a tree with no leaves". Return a single JSON object with one key: "prompt".`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                finishDrawingState.initialPrompt = data.prompt;

                const imageUrl = await generateImage(`A simple, cute, and colorful cartoon drawing for a child of: ${data.prompt}`);
                finishDrawingImageContainer.innerHTML = `<img src="${imageUrl}" class="w-full max-w-md mx-auto rounded-lg shadow-md" alt="${data.prompt}">`;
            } else {
                throw new Error("Could not generate a drawing prompt.");
            }
        } catch (error) {
            console.error("Failed to start Finish the Drawing game:", error);
            finishDrawingImageContainer.innerHTML = '<p class="text-red-500">Could not start a new drawing. Please try again!</p>';
        } finally {
            finishDrawingNewBtn.disabled = false;
            finishDrawingBtn.disabled = false;
        }
    }

    async function finishTheDrawing() {
        const userInput = finishDrawingInput.value.trim();
        if (!userInput) {
            alert("Please tell me what to add to the drawing!");
            return;
        }

        finishDrawingBtn.disabled = true;
        finishDrawingImageContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Finishing your drawing...</p></div>';

        try {
            const fullPrompt = `${finishDrawingState.initialPrompt} with ${userInput}`;
            const imageUrl = await generateImage(`A simple, cute, and colorful cartoon drawing for a child of: ${fullPrompt}`);
            finishDrawingImageContainer.innerHTML = `<img src="${imageUrl}" class="w-full max-w-md mx-auto rounded-lg shadow-md" alt="${fullPrompt}">`;
        } catch (error) {
            console.error("Failed to finish the drawing:", error);
            finishDrawingImageContainer.innerHTML = '<p class="text-red-500">I couldn\'t finish the drawing. Let\'s try a new one!</p>';
        } finally {
            finishDrawingBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showEmotionGuesserBtn = document.getElementById('show-emotion-guesser-btn');
    const emotionGuesserSection = document.getElementById('emotion-guesser-section');
    const emotionGuesserScenario = document.getElementById('emotion-guesser-scenario');
    const emotionGuesserInput = document.getElementById('emotion-guesser-input');
    const emotionGuesserCheckBtn = document.getElementById('emotion-guesser-check-btn');
    const emotionGuesserFeedback = document.getElementById('emotion-guesser-feedback');
    const emotionGuesserNewBtn = document.getElementById('emotion-guesser-new-btn');

// --- Add these with your other state variables ---
    let emotionGuesserState = {
        correctEmotion: '',
    };
    let emotionGuesserGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showEmotionGuesser() {
        hideAllSections();
        emotionGuesserSection.classList.remove('hidden');
        if (!emotionGuesserGameStarted) {
            startEmotionGuesserGame();
            emotionGuesserGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startEmotionGuesserGame() {
        emotionGuesserNewBtn.disabled = true;
        emotionGuesserCheckBtn.disabled = true;
        emotionGuesserInput.value = '';
        emotionGuesserFeedback.innerHTML = '';
        emotionGuesserScenario.innerHTML = '<div class="loader"></div>';

        try {
            const prompt = `Describe a simple situation for a 5-year-old that evokes a clear emotion. Then, name the emotion. Return a single JSON object with two keys: "scenario" and "emotion". For example: {"scenario": "You just dropped your ice cream cone on the ground.", "emotion": "sad"}`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                emotionGuesserState.correctEmotion = data.emotion;
                emotionGuesserScenario.textContent = data.scenario;
            } else {
                throw new Error("Could not generate a scenario.");
            }
        } catch (error) {
            console.error("Failed to start Emotion Guessing game:", error);
            emotionGuesserScenario.textContent = 'Error!';
        } finally {
            emotionGuesserNewBtn.disabled = false;
            emotionGuesserCheckBtn.disabled = false;
        }
    }

    async function checkEmotionGuess() {
        const userAnswer = emotionGuesserInput.value.trim().toLowerCase();
        if (!userAnswer) {
            alert("Please type your guess!");
            return;
        }

        emotionGuesserCheckBtn.disabled = true;
        emotionGuesserFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `A child was asked to guess the emotion for the situation: "${emotionGuesserScenario.textContent}". The correct emotion is "${emotionGuesserState.correctEmotion}". The child guessed "${userAnswer}". Is the child's guess close enough to be considered correct? Respond with a short, cheerful, and encouraging message for the child. If they are correct, praise them. If not, gently tell them the correct answer.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                emotionGuesserFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check emotion guess:", error);
            emotionGuesserFeedback.textContent = 'That\'s a great guess! Let\'s try another one.';
        } finally {
            emotionGuesserCheckBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showWhatAmIBtn = document.getElementById('show-what-am-i-btn');
    const whatAmISection = document.getElementById('what-am-i-section');
    const whatAmIClues = document.getElementById('what-am-i-clues');
    const whatAmIInput = document.getElementById('what-am-i-input');
    const whatAmICheckBtn = document.getElementById('what-am-i-check-btn');
    const whatAmIFeedback = document.getElementById('what-am-i-feedback');
    const whatAmINewBtn = document.getElementById('what-am-i-new-btn');

// --- Add these with your other state variables ---
    let whatAmIState = {
        correctAnswer: '',
    };
    let whatAmIGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showWhatAmI() {
        hideAllSections();
        whatAmISection.classList.remove('hidden');
        if (!whatAmIGameStarted) {
            startWhatAmIGame();
            whatAmIGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startWhatAmIGame() {
        whatAmINewBtn.disabled = true;
        whatAmICheckBtn.disabled = true;
        whatAmIInput.value = '';
        whatAmIFeedback.innerHTML = '';
        whatAmIClues.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Thinking of a new puzzle...</p></div>';

        try {
            const prompt = `Give me a simple object for a child's guessing game, along with three simple clues. Return a single JSON object with two keys: "object" and "clues" (an array of 3 strings). For example: {"object": "sun", "clues": ["I am very bright.", "I am hot.", "I disappear at night."]}`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                whatAmIState.correctAnswer = data.object;
                whatAmIClues.innerHTML = '';

                data.clues.forEach((clue, index) => {
                    setTimeout(() => {
                        const p = document.createElement('p');
                        p.textContent = clue;
                        whatAmIClues.appendChild(p);
                    }, (index + 1) * 1000);
                });
            } else {
                throw new Error("Could not generate clues.");
            }
        } catch (error) {
            console.error("Failed to start What Am I? game:", error);
            whatAmIClues.innerHTML = '<p class="text-red-500">Could not create a puzzle. Please try again!</p>';
        } finally {
            whatAmINewBtn.disabled = false;
            whatAmICheckBtn.disabled = false;
        }
    }

    async function checkWhatAmIGuess() {
        const userAnswer = whatAmIInput.value.trim().toLowerCase();
        if (!userAnswer) {
            alert("Please type your guess!");
            return;
        }

        whatAmICheckBtn.disabled = true;
        whatAmIFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `A child was asked to guess an object based on clues. The correct answer is "${whatAmIState.correctAnswer}". The child guessed "${userAnswer}". Is the child's guess correct? Respond with a short, cheerful, and encouraging message for the child. If they are correct, praise them. If not, gently tell them the correct answer.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                whatAmIFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check What Am I? guess:", error);
            whatAmIFeedback.textContent = 'That\'s a great guess! Let\'s try another one.';
        } finally {
            whatAmICheckBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showWhatHappensNextBtn = document.getElementById('show-what-happens-next-btn');
    const whatHappensNextSection = document.getElementById('what-happens-next-section');
    const whatHappensNextImageContainer = document.getElementById('what-happens-next-image-container');
    const whatHappensNextInput = document.getElementById('what-happens-next-input');
    const whatHappensNextSubmitBtn = document.getElementById('what-happens-next-submit-btn');
    const whatHappensNextFeedback = document.getElementById('what-happens-next-feedback');
    const whatHappensNextNewBtn = document.getElementById('what-happens-next-new-btn');

// --- Add these with your other state variables ---
    let whatHappensNextState = {
        initialPrompt: '',
    };
    let whatHappensNextGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showWhatHappensNext() {
        hideAllSections();
        whatHappensNextSection.classList.remove('hidden');
        if (!whatHappensNextGameStarted) {
            startWhatHappensNextGame();
            whatHappensNextGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startWhatHappensNextGame() {
        whatHappensNextNewBtn.disabled = true;
        whatHappensNextSubmitBtn.disabled = true;
        whatHappensNextInput.value = '';
        whatHappensNextFeedback.innerHTML = '';
        whatHappensNextImageContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Creating a new scene...</p></div>';

        try {
            const prompt = `Give me a simple and fun scenario for a child's story that is about to happen. For example: "A cat is about to pounce on a toy mouse" or "A girl is about to blow out the candles on her birthday cake". Return a single JSON object with one key: "scenario".`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                whatHappensNextState.initialPrompt = data.scenario;

                const imageUrl = await generateImage(`A simple, cute, and colorful cartoon drawing for a child of: ${data.scenario}`);
                whatHappensNextImageContainer.innerHTML = `<img src="${imageUrl}" class="w-full max-w-md mx-auto rounded-lg shadow-md" alt="${data.scenario}">`;
            } else {
                throw new Error("Could not generate a scenario.");
            }
        } catch (error) {
            console.error("Failed to start What Happens Next game:", error);
            whatHappensNextImageContainer.innerHTML = '<p class="text-red-500">Could not create a new scene. Please try again!</p>';
        } finally {
            whatHappensNextNewBtn.disabled = false;
            whatHappensNextSubmitBtn.disabled = false;
        }
    }

    async function continueWhatHappensNextStory() {
        const userInput = whatHappensNextInput.value.trim();
        if (!userInput) {
            alert("Please tell me what you think happens next!");
            return;
        }

        whatHappensNextSubmitBtn.disabled = true;
        whatHappensNextImageContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Drawing what happens next...</p></div>';
        whatHappensNextFeedback.innerHTML = '';

        try {
            const fullPrompt = `${whatHappensNextState.initialPrompt}. Then, ${userInput}.`;
            const imageUrl = await generateImage(`A simple, cute, and colorful cartoon drawing for a child of: ${fullPrompt}`);
            whatHappensNextImageContainer.innerHTML = `<img src="${imageUrl}" class="w-full max-w-md mx-auto rounded-lg shadow-md" alt="${fullPrompt}">`;

            const feedbackPrompt = `A child was shown a picture of "${whatHappensNextState.initialPrompt}" and predicted that "${userInput}" would happen next. Write a short, encouraging sentence to go with the new picture.`;
            const feedbackPayload = {contents: [{role: "user", parts: [{text: feedbackPrompt}]}]};
            const feedbackApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const feedbackResult = await callGeminiApi(feedbackApiUrl, feedbackPayload);

            if (feedbackResult.candidates && feedbackResult.candidates[0].content.parts[0].text) {
                whatHappensNextFeedback.textContent = feedbackResult.candidates[0].content.parts[0].text;
            }

        } catch (error) {
            console.error("Failed to continue the story:", error);
            whatHappensNextImageContainer.innerHTML = '<p class="text-red-500">I couldn\'t draw that. Let\'s try a new story!</p>';
        } finally {
            whatHappensNextSubmitBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showCreativeStoryBtn = document.getElementById('show-creative-story-btn');
    const creativeStorySection = document.getElementById('creative-story-section');
    const creativeStoryOutput = document.getElementById('creative-story-output');
    const creativeStoryInput = document.getElementById('creative-story-input');
    const creativeStoryContinueBtn = document.getElementById('creative-story-continue-btn');
    const creativeStoryFeedback = document.getElementById('creative-story-feedback');
    const creativeStoryNewBtn = document.getElementById('creative-story-new-btn');

// --- Add these with your other state variables ---
    let creativeStoryState = {
        currentStory: '',
    };
    let creativeStoryGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showCreativeStory() {
        hideAllSections();
        creativeStorySection.classList.remove('hidden');
        if (!creativeStoryGameStarted) {
            startCreativeStoryGame();
            creativeStoryGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startCreativeStoryGame() {
        creativeStoryNewBtn.disabled = true;
        creativeStoryContinueBtn.disabled = true;
        creativeStoryInput.value = '';
        creativeStoryFeedback.innerHTML = '';
        creativeStoryOutput.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div><p class="ml-4 text-gray-500">Thinking of a story starter...</p></div>';

        try {
            const prompt = `Write a single, fun, and imaginative opening sentence for a children's story.`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const storyStarter = result.candidates[0].content.parts[0].text.trim();
                creativeStoryState.currentStory = storyStarter;
                creativeStoryOutput.innerHTML = `<p>${storyStarter}</p>`;
            } else {
                throw new Error("Could not generate a story starter.");
            }
        } catch (error) {
            console.error("Failed to start Creative Story Starter game:", error);
            creativeStoryOutput.innerHTML = '<p class="text-red-500">Could not start a new story. Please try again!</p>';
        } finally {
            creativeStoryNewBtn.disabled = false;
            creativeStoryContinueBtn.disabled = false;
        }
    }

    async function continueCreativeStory() {
        const userInput = creativeStoryInput.value.trim();
        if (!userInput) {
            alert("Please write the next sentence!");
            return;
        }

        creativeStoryContinueBtn.disabled = true;
        creativeStoryInput.value = '';
        creativeStoryFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `This is a children's story we are writing together:\n\n${creativeStoryState.currentStory}\n\nThe child added this sentence: "${userInput}".\n\nFirst, give some encouraging feedback on the child's sentence. Then, continue the story with one more sentence that builds on their idea.`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const responseText = result.candidates[0].content.parts[0].text;
                const parts = responseText.split('\n');
                const feedback = parts.shift();
                const newStoryPart = parts.join('\n');

                creativeStoryState.currentStory += ` ${userInput} ${newStoryPart}`;
                creativeStoryOutput.innerHTML = creativeStoryState.currentStory.replace(/\n/g, '<p class="mt-4"></p>');
                creativeStoryFeedback.textContent = feedback;
            } else {
                throw new Error("Could not continue the story.");
            }
        } catch (error) {
            console.error("Failed to continue the story:", error);
            creativeStoryFeedback.textContent = 'That\'s a great sentence! Let\'s try a new story.';
        } finally {
            creativeStoryContinueBtn.disabled = false;
        }
    }

    // --- Add these with your other element variables ---
    const showSillySentenceBtn = document.getElementById('show-silly-sentence-btn');
    const sillySentenceSection = document.getElementById('silly-sentence-section');
    const sillySentenceWords = document.getElementById('silly-sentence-words');
    const sillySentenceInput = document.getElementById('silly-sentence-input');
    const sillySentenceCheckBtn = document.getElementById('silly-sentence-check-btn');
    const sillySentenceFeedback = document.getElementById('silly-sentence-feedback');
    const sillySentenceNewBtn = document.getElementById('silly-sentence-new-btn');

// --- Add these with your other state variables ---
    let sillySentenceState = {
        words: [],
    };
    let sillySentenceGameStarted = false;

// --- Add this new function with your other "show" functions ---
    function showSillySentence() {
        hideAllSections();
        sillySentenceSection.classList.remove('hidden');
        if (!sillySentenceGameStarted) {
            startSillySentenceGame();
            sillySentenceGameStarted = true;
        }
    }

// --- Add these new game functions with your other game logic ---
    async function startSillySentenceGame() {
        sillySentenceNewBtn.disabled = true;
        sillySentenceCheckBtn.disabled = true;
        sillySentenceInput.value = '';
        sillySentenceFeedback.innerHTML = '';
        sillySentenceWords.innerHTML = '<div class="loader"></div>';

        try {
            const prompt = `Give me a list of 4 to 5 random and funny words for a child's silly sentence game. The words should be a mix of nouns, verbs, and adjectives. Return a single JSON object with one key: "words" (an array of strings).`;

            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const rawJson = result.candidates[0].content.parts[0].text.replace(/```json\n|```/g, '').trim();
                const data = JSON.parse(rawJson);

                sillySentenceState.words = data.words;
                sillySentenceWords.innerHTML = '';

                data.words.forEach(word => {
                    const span = document.createElement('span');
                    span.textContent = word;
                    span.className = 'bg-yellow-200 text-yellow-800 font-bold py-2 px-4 rounded-full';
                    sillySentenceWords.appendChild(span);
                });
            } else {
                throw new Error("Could not generate silly words.");
            }
        } catch (error) {
            console.error("Failed to start Silly Sentence game:", error);
            sillySentenceWords.innerHTML = '<p class="text-red-500">Could not get new words. Please try again!</p>';
        } finally {
            sillySentenceNewBtn.disabled = false;
            sillySentenceCheckBtn.disabled = false;
        }
    }

    async function checkSillySentence() {
        const userSentence = sillySentenceInput.value.trim();
        if (!userSentence) {
            alert("Please write a sentence!");
            return;
        }

        sillySentenceCheckBtn.disabled = true;
        sillySentenceFeedback.innerHTML = '<div class="loader inline-block"></div> Thinking...';

        try {
            const prompt = `A child was given the words: ${JSON.stringify(sillySentenceState.words)}. They wrote the sentence: "${userSentence}". Does the sentence use all the words? Is it a creative and silly sentence? Respond with a short, cheerful, and encouraging message for the child, praising their creativity.`;
            const payload = {contents: [{role: "user", parts: [{text: prompt}]}]};
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
            const result = await callGeminiApi(apiUrl, payload);

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                sillySentenceFeedback.textContent = result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not get feedback.");
            }
        } catch (error) {
            console.error("Failed to check silly sentence:", error);
            sillySentenceFeedback.textContent = 'That\'s a very silly sentence! Let\'s try some new words.';
        } finally {
            sillySentenceCheckBtn.disabled = false;
        }
    }

    function initializeApp() {
        showVocabBtn.addEventListener('click', showVocab);
        showQuizBtn.addEventListener('click', showQuiz);
        showStoryBtn.addEventListener('click', showStory);
        showRiddleBtn.addEventListener('click', showRiddle);
        showDrawingBtn.addEventListener('click', showDrawing);
        showChatBtn.addEventListener('click', showChat);
        showSongBtn.addEventListener('click', showSong);
        showSentenceBtn.addEventListener('click', showSentence);
        showSpellingBtn.addEventListener('click', showSpelling);
        showPictureDetectiveBtn.addEventListener('click', showPictureDetective);
        showTongueTwisterBtn.addEventListener('click', showTongueTwister);
        showRhymingBtn.addEventListener('click', showRhymingTime);
        showStoryCreatorBtn.addEventListener('click', showStoryCreator);
        showWhatsDifferentBtn.addEventListener('click', showWhatsDifferent);
        startQuizBtn.addEventListener('click', startQuiz);
        startRiddleBtn.addEventListener('click', startRiddleGame);
        generateStoryBtn.addEventListener('click', generateStory);
        continueStoryBtn.addEventListener('click', continueStory);
        readStoryBtn.addEventListener('click', () => readAloud(storyOutput.innerText, readStoryBtn, audioPlayerContainer));
        closeModalBtn.addEventListener('click', hideFunFact);
        readFactBtn.addEventListener('click', () => readAloud(funFactContent.innerText, readFactBtn, factAudioPlayer));
        generateTwisterBtn.addEventListener('click', generateTongueTwister);
        readTwisterBtn.addEventListener('click', () => readAloud(twisterOutput.innerText, readTwisterBtn, twisterAudioPlayerContainer));

        generateDrawingBtn.addEventListener('click', async () => {
            const prompt = drawingPromptInput.value.trim();
            if (!prompt) {
                alert('Please type what you want to draw!');
                return;
            }
            generateDrawingBtn.disabled = true;
            downloadDrawingBtn.classList.add('hidden');
            storyFromDrawingBtn.classList.add('hidden');
            generateDrawingBtn.innerHTML = 'Drawing... <div class="loader"></div>';
            drawingOutput.innerHTML = '<div class="flex flex-col items-center justify-center"><div class="loader" style="width:48px; height:48px; border-width: 6px;"></div><p class="mt-4 text-gray-500">Our AI artist is getting its crayons...</p></div>';
            try {
                const fullPrompt = `A simple, cute, and colorful cartoon drawing for a child of: ${prompt}`;
                const pngImageUrl = await generateImage(fullPrompt);

                drawingState.lastImageBase64 = pngImageUrl.split(',')[1];

                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);

                    const webpImageUrl = canvas.toDataURL('image/webp', 0.9);

                    drawingOutput.innerHTML = `<img src="${pngImageUrl}" class="w-full h-full object-contain rounded-lg" alt="AI generated drawing of ${prompt}">`;
                    downloadDrawingBtn.href = webpImageUrl;
                    downloadDrawingBtn.classList.remove('hidden');
                    storyFromDrawingBtn.classList.remove('hidden');
                };
                img.src = pngImageUrl;

            } catch (error) {
                console.error("Failed to generate drawing:", error);
                drawingOutput.innerHTML = '<p class="text-red-500">Oops! The artist dropped the pencils. Please try again.</p>';
            } finally {
                generateDrawingBtn.disabled = false;
                generateDrawingBtn.textContent = 'Draw!';
            }
        });

        storyFromDrawingBtn.addEventListener('click', async () => {
            storyFromDrawingBtn.disabled = true;
            storyFromDrawingBtn.innerHTML = 'Writing... <div class="loader"></div>';
            try {
                const prompt = "Write a short, simple, and fun story for a 5-year-old child based on this picture.";
                const payload = {
                    contents: [{
                        parts: [
                            {text: prompt},
                            {inline_data: {mime_type: "image/png", data: drawingState.lastImageBase64}}
                        ]
                    }]
                };
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${API_KEY}`;
                const result = await callGeminiApi(apiUrl, payload);
                if (result.candidates && result.candidates[0].content.parts[0].text) {
                    const storyText = result.candidates[0].content.parts[0].text;
                    storyState.currentStory = storyText;
                    storyOutput.innerHTML = storyText.replace(/\n/g, '<br>');
                    showStory();
                    continueStoryBtn.classList.remove('hidden');
                    storyAudioControls.classList.remove('hidden');
                } else {
                    alert("The storyteller couldn't think of a story for this picture! Try another one.");
                }
            } catch (error) {
                console.error("Failed to generate story from drawing:", error);
                alert("Oops! Something went wrong while writing the story.");
            } finally {
                storyFromDrawingBtn.disabled = false;
                storyFromDrawingBtn.textContent = '✨ Tell a Story About This Picture';
            }
        });

        chatForm.addEventListener('submit', handleChatSubmit);
        generateSongBtn.addEventListener('click', generateSong);
        readSongBtn.addEventListener('click', () => readAloud(songOutput.innerText, readSongBtn, songAudioPlayer));
        sentenceNewBtn.addEventListener('click', startSentenceGame);
        sentenceClearBtn.addEventListener('click', clearSentence);
        sentenceCheckBtn.addEventListener('click', checkSentence);
        startSpellingBtn.addEventListener('click', startSpellingBee);
        spellingListenBtn.addEventListener('click', () => readAloud(`Spell the word: ${spellingState.currentWord}`, spellingListenBtn, spellingAudioPlayer));
        spellingCheckBtn.addEventListener('click', checkSpelling);
        spellingNextBtn.addEventListener('click', loadNextSpellingWord);
        detectiveCheckBtn.addEventListener('click', checkDescription);
        detectiveNewBtn.addEventListener('click', startPictureDetectiveGame);
        storyCreatorStartBtn.addEventListener('click', startStoryCreator);
        storyCreatorGenerateBtn.addEventListener('click', generateSillyStory);
        storyCreatorNewBtn.addEventListener('click', resetStoryCreator);
        storyCreatorReadBtn.addEventListener('click', () => readAloud(storyCreatorResult.innerText, storyCreatorReadBtn, storyCreatorAudioPlayer));
        whatsDifferentNewBtn.addEventListener('click', startWhatsDifferentGame);
        whatsDifferentCheckBtn.addEventListener('click', checkWhatsDifferentAnswer);
        showCategoryFunBtn.addEventListener('click', () => {
            hideAllSections();
            document.getElementById('category-fun-section').classList.remove('hidden');
        });
        // Find this line in initializeApp():
        showWhatsDifferentBtn.addEventListener('click', showWhatsDifferent);

        // Add this line right after it:
        showCategoryFunBtn.addEventListener('click', showCategoryFun);

        // Also, find this line:
        whatsDifferentNewBtn.addEventListener('click', startWhatsDifferentGame);

        // Add this line right after it:
        categoryFunNewBtn.addEventListener('click', startCategoryFunGame);

        rhymingCheckBtn.addEventListener('click', checkRhyme);
        rhymingNewBtn.addEventListener('click', startRhymingGame);

        showIllustratedStoryBtn.addEventListener('click', showIllustratedStory);
        generateIllustratedStoryBtn.addEventListener('click', generateIllustratedStory);

        showWordAssociationFunBtn.addEventListener('click', showWordAssociationFun);
        wordAssociationCheckBtn.addEventListener('click', checkWordAssociation);
        wordAssociationNewBtn.addEventListener('click', startWordAssociationGame);

        showStoryPuzzleBtn.addEventListener('click', showStoryPuzzle);
        storyPuzzleCheckBtn.addEventListener('click', checkStoryPuzzle);
        storyPuzzleNewBtn.addEventListener('click', startStoryPuzzleGame);

        showWhatsMissingBtn.addEventListener('click', showWhatsMissing);
        whatsMissingCheckBtn.addEventListener('click', checkWhatsMissingAnswer);
        whatsMissingNewBtn.addEventListener('click', startWhatsMissingGame);

        showStoryEmojiBtn.addEventListener('click', showStoryEmoji);
        storyEmojiCheckBtn.addEventListener('click', checkStoryEmojiAnswers);
        storyEmojiNewBtn.addEventListener('click', startStoryEmojiGame);

        showInteractiveStoryBtn.addEventListener('click', showInteractiveStory);
        interactiveStoryContinueBtn.addEventListener('click', continueInteractiveStory);
        interactiveStoryNewBtn.addEventListener('click', startInteractiveStoryGame);

        showDescribePictureBtn.addEventListener('click', showDescribePicture);
        describePictureCheckBtn.addEventListener('click', checkPictureDescription);
        describePictureNewBtn.addEventListener('click', startDescribePictureGame);

        showGuessTheSoundBtn.addEventListener('click', showGuessTheSound);
        guessTheSoundCheckBtn.addEventListener('click', checkSoundGuess);
        guessTheSoundNewBtn.addEventListener('click', startGuessTheSoundGame);

        showFinishDrawingBtn.addEventListener('click', showFinishDrawing);
        finishDrawingBtn.addEventListener('click', finishTheDrawing);
        finishDrawingNewBtn.addEventListener('click', startFinishDrawingGame);

        showEmotionGuesserBtn.addEventListener('click', showEmotionGuesser);
        emotionGuesserCheckBtn.addEventListener('click', checkEmotionGuess);
        emotionGuesserNewBtn.addEventListener('click', startEmotionGuesserGame);

        showWhatAmIBtn.addEventListener('click', showWhatAmI);
        whatAmICheckBtn.addEventListener('click', checkWhatAmIGuess);
        whatAmINewBtn.addEventListener('click', startWhatAmIGame);

        showWhatHappensNextBtn.addEventListener('click', showWhatHappensNext);
        whatHappensNextSubmitBtn.addEventListener('click', continueWhatHappensNextStory);
        whatHappensNextNewBtn.addEventListener('click', startWhatHappensNextGame);

        showCreativeStoryBtn.addEventListener('click', showCreativeStory);
        creativeStoryContinueBtn.addEventListener('click', continueCreativeStory);
        creativeStoryNewBtn.addEventListener('click', startCreativeStoryGame);

        showSillySentenceBtn.addEventListener('click', showSillySentence);
        sillySentenceCheckBtn.addEventListener('click', checkSillySentence);
        sillySentenceNewBtn.addEventListener('click', startSillySentenceGame);
        // --- Initial Page Load ---
        createCategoryButtons();
        displayVocabularyForCategory('Animals');
        populateSongWords();
        showVocab();

        for (let i = 0; i < 5; i++) {
            createCloud();
        }
        setInterval(createCloud, 10000);
    }

    loadVocabulary();

});
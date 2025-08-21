import React, { useState, useEffect } from 'react';

// Placeholder images for ASL letters and common words.
// IMPORTANT: You will need to replace these URLs with actual ASL sign images or GIFs/videos.
// For example: 'a': '/images/asl_a.png' or 'a': 'https://your-image-host.com/asl_a.gif'
const ASL_IMAGES = {
  'a': 'https://www.signingsavvy.com/images/words/alphabet/2/a1.jpg',
  'b': 'https://www.signingsavvy.com/images/words/alphabet/2/b1.jpg',
  'c': 'https://www.signingsavvy.com/images/words/alphabet/2/c1.jpg',
  'd': 'https://www.signingsavvy.com/images/words/alphabet/2/d1.jpg',
  'e': 'https://www.signingsavvy.com/images/words/alphabet/2/e1.jpg',
  'f': 'https://www.signingsavvy.com/images/words/alphabet/2/f1.jpg',
  'g': 'https://www.signingsavvy.com/images/words/alphabet/2/g1.jpg',
  'h': 'https://www.signingsavvy.com/images/words/alphabet/2/h1.jpg',
  'i': 'https://www.signingsavvy.com/images/words/alphabet/2/i1.jpg',
  'j': 'https://www.signingsavvy.com/images/words/alphabet/2/j1.jpg',
  'k': 'https://www.signingsavvy.com/images/words/alphabet/2/k1.jpg',
  'l': 'https://www.signingsavvy.com/images/words/alphabet/2/l1.jpg',
  'm': 'https://www.signingsavvy.com/images/words/alphabet/2/m1.jpg',
  'n': 'https://www.signingsavvy.com/images/words/alphabet/2/n1.jpg',
  'o': 'https://www.signingsavvy.com/images/words/alphabet/2/o1.jpg',
  'p': 'https://www.signingsavvy.com/images/words/alphabet/2/p1.jpg',
  'q': 'https://www.signingsavvy.com/images/words/alphabet/2/q1.jpg',
  'r': 'https://www.signingsavvy.com/images/words/alphabet/2/r1.jpg',
  's': 'https://www.signingsavvy.com/images/words/alphabet/2/s1.jpg',
  't': 'https://www.signingsavvy.com/images/words/alphabet/2/t1.jpg',
  'u': 'https://www.signingsavvy.com/images/words/alphabet/2/u1.jpg',
  'v': 'https://www.signingsavvy.com/images/words/alphabet/2/v1.jpg',
  'w': 'https://www.signingsavvy.com/images/words/alphabet/2/w1.jpg',
  'x': 'https://www.signingsavvy.com/images/words/alphabet/2/x1.jpg',
  'y': 'https://www.signingsavvy.com/images/words/alphabet/2/y1.jpg',
  'z': 'https://www.signingsavvy.com/images/words/alphabet/2/z1.jpg',
  // Placeholder VIDEO URLs for common words
  'help': 'https://www.signingsavvy.com/media2/mp4-ld/33/33693.mp4', // Replace with actual ASL 'help' video
  'friend': 'https://www.signingsavvy.com/media2/mp4-ld/21/21551.mp4', // Replace with actual ASL 'friend' video
  'yes': 'https://www.signingsavvy.com/media2/mp4-ld/23/23545.mp4', // Replace with actual ASL 'yes' video
  'no': 'https://www.signingsavvy.com/media2/mp4-ld/30/30429.mp4', // Replace with actual ASL 'no' video
  'thank you': 'https://www.signingsavvy.com/media2/mp4-ld/33/33710.mp4', // Replace with actual ASL 'thank you' video
  'goodbye': 'https://www.signingsavvy.com/media2/mp4-ld/22/22741.mp4', // Replace with actual ASL 'goodbye' video
  'love': 'https://www.signingsavvy.com/media2/mp4-ld/22/22883.mp4', // Replace with actual ASL 'love' video
  'school': 'https://www.signingsavvy.com/media2/mp4-ld/33/33695.mp4', // Replace with actual ASL 'school' video
    'hot': 'https://www.signingsavvy.com/media2/mp4-ld/30/30923.mp4',
  'have a good day': 'https://www.signingsavvy.com/media2/mp4-ld/35/35995.mp4',
};

const COMMON_WORDS = [
  { word: 'Help', sign: 'help' },
  { word: 'Friend', sign: 'friend' },
  { word: 'Yes', sign: 'yes' },
  { word: 'No', sign: 'no' },
  { word: 'Thank You', sign: 'thank you' },
  { word: 'Goodbye', sign: 'goodbye' },
  { word: 'Love', sign: 'love' },
  { word: 'School', sign: 'school' },
   { word: 'Hot', sign: 'hot' },
    { word: 'Have a good day', sign: 'have a good day' },
];

// Main App Component
const App = () => {
  const [textInput, setTextInput] = useState('');
  const [displayedLetters, setDisplayedLetters] = useState([]);
  const [selectedSignText, setSelectedSignText] = useState('');

  // Effect to update displayed letters when text input changes
  useEffect(() => {
    const letters = textInput.toLowerCase().split('').filter(char => char >= 'a' && char <= 'z');
    setDisplayedLetters(letters);
  }, [textInput]);

  // Function to handle text input change
  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  // Function to display ASL sign for a common word
  const displayWordSign = (word) => {
    setSelectedSignText(''); // Clear previous ASL to Text selection
    setTextInput(word); // Populate text input with the word
  };

  // Function to handle "ASL to Text" lookup
  const handleSignClick = (signKey) => {
    // This simulates clicking on a sign and getting its text equivalent.
    // In a real app, these would be actual sign images/buttons.
    if (signKey.length === 1) { // It's a letter
      setSelectedSignText(`Letter: ${signKey.toUpperCase()}`);
    } else { // It's a common word
      const foundWord = COMMON_WORDS.find(item => item.sign === signKey);
      if (foundWord) {
        setSelectedSignText(`Word: ${foundWord.word}`);
      } else {
        setSelectedSignText('Sign not recognized.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4 font-inter text-gray-800 flex flex-col items-center justify-center">
      {/* REMOVED: <script src="https://cdn.tailwindcss.com"></script> */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-6 text-center drop-shadow-md">
        <span role="img" aria-label="handshake">🤝</span> Lamar County Schools Learn ASL! <span role="img" aria-label="abc">🔤</span>
      </h1>

      {/* Text to ASL Section */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-4xl w-full mb-8 transform transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 text-center">Type a Word (Text to ASL)</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Type letters or words below, and see their ASL finger-spelled signs!
          (For full words, individual letter signs are shown.)
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <input
            type="text"
            className="flex-grow w-full sm:w-auto p-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            placeholder="Type here..."
            value={textInput}
            onChange={handleTextInputChange}
          />
          <button
            onClick={() => setTextInput('')}
            className="px-6 py-3 bg-red-500 text-white font-bold rounded-xl shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Clear
          </button>
        </div>

        {/* Display ASL signs for letters */}
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200 min-h-[120px]">
          {displayedLetters.length > 0 ? (
            displayedLetters.map((char, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={ASL_IMAGES[char] || 'https://placehold.co/100x100/F0F0F0/888888?text=N/A'}
                  alt={`ASL sign for ${char}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg shadow-md border border-gray-200"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/F0F0F0/888888?text=N/A"; }}
                />
                <span className="mt-1 font-medium text-gray-700 text-lg">{char.toUpperCase()}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-center">Start typing to see ASL signs!</p>
          )}
        </div>
      </div>

      {/* Common Words Section */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-4xl w-full mb-8 transform transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 text-center">Learn Common Words</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Click a word to see its ASL sign (or the finger-spelled letters).
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {COMMON_WORDS.map((item, index) => (
            <button
              key={index}
              onClick={() => displayWordSign(item.word.toLowerCase())}
              className="px-5 py-2 bg-green-500 text-white font-bold rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-transform transform hover:scale-105 text-lg"
            >
              {item.word}
            </button>
          ))}
        </div>
        {textInput && (
          <div className="mt-6 flex flex-col items-center">
            <h3 className="text-xl font-medium text-blue-600 mb-3">Sign for "{textInput}"</h3>
            {/* Conditional rendering for image or video based on the URL type */}
            {ASL_IMAGES[textInput] && (
              ASL_IMAGES[textInput].endsWith('.mp4') || ASL_IMAGES[textInput].endsWith('.webm') ? (
                <video
                  src={ASL_IMAGES[textInput]}
                  controls
                  loop
                  muted
                  autoPlay
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain rounded-lg shadow-lg border-2 border-blue-300"
                  onError={(e) => { e.target.onerror = null; e.target.outerHTML = '<p class="text-red-500">Video failed to load.</p>'; }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={ASL_IMAGES[textInput]}
                  alt={`ASL sign for ${textInput}`}
                  className="w-32 h-32 sm:w-48 sm:h-48 object-contain rounded-lg shadow-lg border-2 border-blue-300"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/F0F0F0/888888?text=Sign_N/A"; }}
                />
              )
            )}
            {!ASL_IMAGES[textInput] && (
              <p className="text-gray-500 italic">No specific word sign available. See finger-spelling above!</p>
            )}
          </div>
        )}
      </div>

      {/* ASL to Text Section (Simplified) */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-4xl w-full transform transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 text-center">What's This Sign? (ASL to Text)</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Click on a placeholder sign to see what letter or word it represents.
        </p>
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200 min-h-[120px]">
          {/* Now showing ALL signs from ASL_IMAGES for demonstration. */}
          {Object.entries(ASL_IMAGES).map(([key, imageUrl]) => (
            <button
              key={key}
              onClick={() => handleSignClick(key)}
              className="flex flex-col items-center bg-purple-200 p-3 rounded-lg shadow-md hover:bg-purple-300 transition-transform transform hover:scale-105"
            >
              {imageUrl.endsWith('.mp4') || imageUrl.endsWith('.webm') ? (
                <video
                  src={imageUrl}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg border border-purple-400"
                  onError={(e) => { e.target.onerror = null; e.target.outerHTML = '<p class="text-red-500">Video failed to load.</p>'; }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={imageUrl}
                  alt={`ASL sign example ${key}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg border border-purple-400"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/F0F0F0/888888?text=Sign"; }}
                />
              )}
              <span className="mt-1 text-sm text-purple-800">Sign for "{key.length === 1 ? key.toUpperCase() : key}"</span>
            </button>
          ))}
        </div>
        {selectedSignText && (
          <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-300 text-center font-bold text-lg text-yellow-800">
            {selectedSignText}
          </div>
        )}
      </div>

      {/* Footer / Instructions */}
      <footer className="mt-8 text-center text-gray-600 text-sm p-4">
        <p>
          This app is designed to help kindergarten students learn basic ASL finger-spelling and common word signs.

        </p>
        <p className="mt-2">
          Made with <span role="img" aria-label="love">❤️</span> for a more inclusive classroom! By Ross Randall
        </p>
      </footer>
    </div>
  );
};

export default App;

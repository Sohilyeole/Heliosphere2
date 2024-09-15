
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import '../styles/chat.css'; // Ensure this path is correct

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const props = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(100%)',
    config: { duration: 300 }
  });

  const handleSendMessage = async () => {
    if (input.trim()) {
      // Add user message to chat
      setMessages([...messages, { text: input, sender: 'user' }]);

      try {
       
        const response = await axios.post(
          'https://api.openai.com/v1/completions',
          {
            model: 'text-davinci-003', // or another model
            prompt: input,
            max_tokens: 150,
          },
          {
            headers: {
              // 'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const botMessage = response.data.choices[0].text.trim();
        
        // Add bot response to chat
        setMessages([...messages, { text: input, sender: 'user' }, { text: botMessage, sender: 'bot' }]);
      } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        setMessages([...messages, { text: input, sender: 'user' }, { text: 'Sorry, something went wrong.', sender: 'bot' }]);
      }

      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <div
        className={`chatbot-dot ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="chatbot-dot-icon">💬</span>
      </div>
      {isOpen && (
        <animated.div style={props} className="chatbot-popup">
          <div className="chatbot-header">
            <h2 className="text-xl font-bold">Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="close-button">✖</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="chatbot-input"
            />
            <button onClick={handleSendMessage} className="chatbot-button">
              Send
            </button>
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default Chatbot;

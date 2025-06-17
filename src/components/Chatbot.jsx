import React, { useState } from 'react';
import axios from 'axios';
import { FiMessageCircle } from 'react-icons/fi';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChatbot = () => setOpen(!open);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/chat', { message: input });
      const botReply = { from: 'bot', text: res.data.reply };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
      {open ? (
        <div style={{
          width: 350,
          height: 500,
          borderRadius: 16,
          backgroundColor: '#fff',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeInUp 0.3s ease'
        }}>
          {/* Header */}
          <div style={{
            padding: '16px',
            backgroundColor: '#0084ff',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            AI Assistant
            <button
              onClick={toggleChatbot}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >✕</button>
          </div>

          {/* Chat Area */}
          <div style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            backgroundColor: '#f9f9f9'
          }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '10px'
              }}>
                <div style={{
                  backgroundColor: msg.from === 'user' ? '#daf1ff' : '#e0e0e0',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  maxWidth: '75%',
                  fontSize: '14px'
                }}>{msg.text}</div>
              </div>
            ))}
            {loading && <div><i>Bot is typing...</i></div>}
          </div>

          {/* Input */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid #ddd',
            display: 'flex',
            gap: '8px',
            backgroundColor: '#fff'
          }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '14px'
              }}
            />
            <button onClick={handleSend} style={{
              backgroundColor: '#0084ff',
              color: 'white',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>Send</button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChatbot}
          style={{
            width: 65,
            height: 65,
            borderRadius: '50%',
            backgroundColor: '#0084ff',
            color: '#fff',
            border: 'none',
            fontSize: '28px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(.75)'}
        >
           <FiMessageCircle size={32} color="#fff" style={{ transition: 'transform 0.3s ease-in-out', marginLeft : '15px' }} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;

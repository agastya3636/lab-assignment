import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
const [conversations, setConversations] = useState([]);
const [selectedConversation, setSelectedConversation] = useState(null);
const [newMessage, setNewMessage] = useState('');
const [messages, setMessages] = useState([]);
useEffect(() => {
fetchConversations();
}, []);
useEffect(() => {
if (selectedConversation) {
fetchMessages(selectedConversation.id);
}
}, [selectedConversation]);
const fetchConversations = () => {
const mockConversations = [
{ id: 1, name: 'Friend 1' },

{ id: 2, name: 'Friend 2' },
];
setConversations(mockConversations);
};
const fetchMessages = (conversationId) => {
const mockMessages = [
{ id: 1, text: 'Hello!', sender: 'Friend 1', timestamp: new Date() },
{ id: 2, text: 'Hi there!', sender: 'You', timestamp: new Date() },
];
setMessages(mockMessages);
};
const handleConversationClick = (conversation) => {
setSelectedConversation(conversation);
};
const handleMessageSend = () => {
const message = { id: messages.length + 1, text: newMessage, sender:
'You', timestamp: new Date() };
setMessages([message, ...messages]);
setNewMessage('');
};
return (
<div className="App">
<div className="sidebar">
<h2>Conversations</h2>
<ul>
{conversations.map((conversation) => (
<li key={conversation.id} onClick={() =>
handleConversationClick(conversation)}>
{conversation.name}
</li>
))}
</ul>
</div>
<div className="chat">
<h2>Chat</h2>
{selectedConversation && (
<div>
<h3>{selectedConversation.name}</h3>
<div className="messages">
{messages.map((message) => (
<div key={message.id} className={message.sender === 'You' ?
'sent' : 'received'}>
<p>{message.text}</p>

<span>{message.sender} -
{message.timestamp.toLocaleString()}</span>
</div>
))}
</div>
<div className="message-input">
<input type="text" value={newMessage} onChange={(e) =>
setNewMessage(e.target.value)} />
<button onClick={handleMessageSend}>Send</button>
</div>
</div>
)}
</div>
</div>
);
}
export default App;
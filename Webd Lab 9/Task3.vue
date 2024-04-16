<template>
    <div id="app">
    <h1>Messaging App</h1>
    <div v-for="conversation in conversations" :key="conversation.id">
    <h2 @click="selectConversation(conversation.id)">
    {{ conversation.name }}
    </h2>
    </div>
    <div v-if="selectedConversation">
    <div v-for="message in selectedConversation.messages"
    :key="message.id">
    <p>{{ message.text }}</p>
    </div>
    <input type="text" v-model="newMessage" placeholder="Type a
    message" />
    <button @click="sendMessage">Send</button>
    </div>
    </div>
    </template>
    <script>
    
    export default {
    data() {
    return {
    conversations: [
    { id: 1, name: "Conversation 1", messages: [] },
    { id: 2, name: "Conversation 2", messages: [] },
    ],
    selectedConversation: null,
    newMessage: "",
    };
    },
    methods: {
    selectConversation(id) {
    this.selectedConversation = this.conversations.find((c) => c.id
    === id);
    },
    sendMessage() {
    if (this.newMessage.trim() !== "") {
    this.selectedConversation.messages.push({
    id: Date.now(),
    text: this.newMessage,
    });
    this.newMessage = "";
    }
    },
    },
    };
    </script>
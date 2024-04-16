<template>
    <div id="app">
    <h1>Stopwatch</h1>
    <button @click="startStopwatch">Start</button>
    <button @click="pauseStopwatch">Pause</button>
    <button @click="resetStopwatch">Reset</button>
    <p>{{ time }}</p>
    </div>
    </template>
    
    <script>
    export default {
    data() {
    return {
    time: 0,
    intervalId: null,
    };
    },
    methods: {
    startStopwatch() {
    this.intervalId = setInterval(() => {
    this.time++;
    }, 1000);
    },
    pauseStopwatch() {
    clearInterval(this.intervalId);
    },
    resetStopwatch() {
    this.time = 0;
    clearInterval(this.intervalId);
    },
    },
    };
    </script>
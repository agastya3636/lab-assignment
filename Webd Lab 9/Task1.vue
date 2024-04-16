<template>
<div id="app">
<h1>Currency Converter</h1>
<input type="number" v-model="amount" placeholder="Enter amount" />
<select v-model="fromCurrency">
<option value="USD">USD</option>
<option value="EUR">EUR</option>
</select>
<select v-model="toCurrency">
<option value="USD">USD</option>
<option value="EUR">EUR</option>
</select>
<button @click="convertCurrency">Convert</button>
<p>{{ convertedAmount }}</p>
</div>
</template>
<script>
export default {
data() {
return {
amount: null,
fromCurrency: "USD",
toCurrency: "EUR",
exchangeRate: {
USD: { EUR: 0.85 },
EUR: { USD: 1.18 },
},
convertedAmount: null,
};
},
methods: {
convertCurrency() {
this.convertedAmount =

this.amount *
this.exchangeRate[this.fromCurrency][this.toCurrency];
},
},
};
</script>
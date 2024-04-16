import React, { useState } from 'react';
const CurrencyConverter = () => {
const [amount, setAmount] = useState('');
const [fromCurrency, setFromCurrency] = useState('USD');
const [toCurrency, setToCurrency] = useState('EUR');
const [convertedAmount, setConvertedAmount] = useState('');
const exchangeRate = 0.85;
const handleAmountChange = (e) => {
setAmount(e.target.value);
};
const handleFromCurrencyChange = (e) => {
setFromCurrency(e.target.value);
};
const handleToCurrencyChange = (e) => {
setToCurrency(e.target.value);
};
const convertCurrency = () => {
const convertedValue = amount * exchangeRate;
setConvertedAmount(convertedValue.toFixed(2));
};
return (
<div>
<h2>Currency Converter</h2>
<div>
<label htmlFor="amount">Amount:</label>
<input type="number" id="amount" value={amount} onChange={handleAmountChange} />
</div>
<div>
<label htmlFor="fromCurrency">From Currency:</label>
<select id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
<option value="USD">USD</option>
</select>
</div>
<div>
<label htmlFor="toCurrency">To Currency:</label>

<select id="toCurrency" value={toCurrency} onChange={handleToCurrencyChange}>
<option value="EUR">EUR</option>
</select>
</div>
<button onClick={convertCurrency}>Convert</button>
<div>
<h3>Converted Amount:</h3>
<p>{convertedAmount}</p>
</div>
</div>
);
};
export default CurrencyConverter;
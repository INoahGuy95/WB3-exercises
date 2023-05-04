'use strict';

const addBtnEl = document.getElementById('cnvrtBtn');
addBtnEl.onclick = onAddBtnClicked;


const num1El = document.getElementById('celsiusField');

const answerEl = document.getElementById('answerField');

function onAddBtnClicked() {
  const answer = num1El.value * (9 / 5) + 32;
  answerEl.value = answer;
}



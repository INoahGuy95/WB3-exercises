'use strict';

const addBtnEl = document.getElementById('cnvrtBtn');
addBtnEl.onclick = onAddBtnClicked;

const rstBtnEl = document.getElementById('rstBtn');
rstBtnEl.onclick = Fun;

const rstBtnEl = document.getElementById('rstBtn');
rstBtnEl.onclick = Fun;


const num1El = document.getElementById('farenheitField');

const answerEl = document.getElementById('answerField');

const messagePara = document.getElementById("messagePara");

function onAddBtnClicked() {
  const answer = (num1El.value - 32) * (5 / 9);
  answerEl.value = answer;
}

function Fun() {
  document.getElementById('rstBtn1').value = "";
  document.getElementById('rstBtn2').value = "";
}
 }  

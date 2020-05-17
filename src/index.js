'use strict';

import popUpCall from './modules/popUpCall';
import sendForm from './modules/sendForm';
import executionSentence from './modules/executionSentence';
import calculate from './modules/calculate';
import questionsAccord from './modules/questionsAccord';
import checkSale from './modules/checkSale';

// PopUp по клику "Перезвоните мне"
popUpCall();

// Отправка данных с форм
sendForm();

// Работа блока Sentence
executionSentence();

// Аккордеон для калькулятора
calculate();

// Аккордеон с вопросами
questionsAccord();

// PopUp для получения скидки
checkSale();
'use strict';

import popUpCall from './modules/popUpCall';
import mainForm from './modules/mainForm';
import executionSentence from './modules/executionSentence';
import calculate from './modules/calculate';
import questionsAccord from './modules/questionsAccord';
import checkSale from './modules/checkSale';
import messageForm from './modules/messageForm';
import maskPhone from './modules/maskPhone';
import captureForm1 from './modules/captureForm1';


// Применение маски
maskPhone('.phone-user');

// PopUp по клику "Перезвоните мне"
popUpCall();

// Работа блока Sentence
executionSentence();

// Аккордеон для калькулятора
calculate();

// Отправка данных с форм
mainForm();

captureForm1();

// Аккордеон с вопросами
questionsAccord();

// PopUp для получения скидки
checkSale();

// Форма с сообщением
messageForm();
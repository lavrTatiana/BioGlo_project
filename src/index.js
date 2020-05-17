'use strict';

import popUpCall from './modules/popUpCall';
import sendForm from './modules/sendForm';
import executionSentence from './modules/executionSentence';

// PopUp по клику "Перезвоните мне"
popUpCall();

// Отправка данных с форм
sendForm();

// Работа блока Sentence
executionSentence();
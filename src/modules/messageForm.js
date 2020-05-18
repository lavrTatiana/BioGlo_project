import togglePopUp from './togglePopUp';
import sendForm from './sendForm';

const messageForm = () => {
  const directorForm = document.querySelector('director-form'),
        consultationBtn = document.querySelectorAll('.consultation-btn'),
        popupConsultation = document.querySelector('.popup-consultation'),
        inputsPopUp = popupConsultation.querySelectorAll('input');


  togglePopUp(consultationBtn, popupConsultation);

  
  
  
};

export default messageForm;
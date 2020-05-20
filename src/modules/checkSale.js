import togglePopUp from './togglePopUp';
import sendForm from './sendForm';

const checkSale = () => {
  const checkBtn = document.querySelectorAll('.check-btn'),
        popUpCheck = document.querySelector('.popup-check'),
        formCheck = document.querySelector('.form-check');

  togglePopUp(checkBtn, popUpCheck);
  sendForm(formCheck);

};

export default checkSale;
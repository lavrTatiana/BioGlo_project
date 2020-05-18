import togglePopUp from './togglePopUp';

const checkSale = () => {
  const checkBtn = document.querySelectorAll('.check-btn'),
        popUpCheck = document.querySelector('.popup-check');

  togglePopUp(checkBtn, popUpCheck);
};

export default checkSale;
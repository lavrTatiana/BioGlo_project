import togglePopUp from '../modules/togglePopUp';

const popUpCall = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
      popupCall = document.querySelector('.popup-call');
  togglePopUp(callBtn, popupCall);
}; 


export default popUpCall;
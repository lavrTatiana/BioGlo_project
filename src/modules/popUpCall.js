import togglePopUp from '../modules/togglePopUp';
import sendForm from './sendForm';

const popUpCall = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
      popupCall = document.querySelector('.popup-call'),
      formCall = document.querySelector('.form-call');
  togglePopUp(callBtn, popupCall);
  sendForm(formCall);
}; 



export default popUpCall;
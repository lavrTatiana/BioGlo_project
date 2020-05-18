const messageForm = () => {
  const directorForm = document.querySelector('.director-form'),
        questionInput = directorForm.querySelector('input'),
        consultationBtn = document.querySelector('.consultation-btn'),
        popupConsultation = document.querySelector('.popup-consultation'),
        captureForm = popupConsultation.querySelector('.capture-form');

  let invisInput = document.createElement('input');
  invisInput.setAttribute('name', 'user-message');
  
  consultationBtn.setAttribute('type', 'button');
  consultationBtn.addEventListener('click', () => {
    
    invisInput.value = questionInput.value;
    questionInput.value = '';
    invisInput.style.display = 'none';
    captureForm.prepend(invisInput);
    
    popupConsultation.style.display = 'block';

    popupConsultation.addEventListener('click', (event) => {
    
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popupConsultation.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popupConsultation.style.display = 'none';
        }
      }
    });

  });
  
};

export default messageForm;
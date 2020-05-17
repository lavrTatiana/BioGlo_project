import togglePopUp from '../modules/togglePopUp';

const executionSentence = () => {
  const addSentenceBtn = document.querySelector('.add-sentence-btn'),
        shadowBlock = document.querySelectorAll('.shadow-block'),
        discountBtn = document.querySelectorAll('.discount-btn'),
        popupDiscount = document.querySelector('.popup-discount');

  
  addSentenceBtn.addEventListener('click', () => {
    shadowBlock.forEach((block) => {
      if (block.parentNode.classList.contains('hidden', 'visible-sm-block')) {
        block.parentNode.classList.remove('hidden', 'visible-sm-block');
      }
    });
    addSentenceBtn.style.display = 'none';
  });

  togglePopUp(discountBtn, popupDiscount);

};


export default executionSentence;